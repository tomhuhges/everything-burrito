/**
 * copy.c
 *
 * Computer Science 50
 * Problem Set 4
 *
 * Copies a BMP piece by piece, just because.
 */
       
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

#include "bmp.h"

int main(int argc, char* argv[])
{
    // ensure proper usage
    if (argc != 4)
    {
        printf("Usage: ./resize n infile outfile\n");
        return 1;
    }
    
    int n = atoi(argv[1]);
    
    if ( n < 1 || n > 100) {
        printf("First argument must be a positive integer between 1 and 100\n");
        return 2;
    }

    // remember filenames
    char* infile = argv[2];
    char* outfile = argv[3];

    // open input file 
    FILE* inptr = fopen(infile, "r");
    if (inptr == NULL)
    {
        printf("Could not open %s.\n", infile);
        return 3;
    }

    // open output file
    FILE* outptr = fopen(outfile, "w");
    if (outptr == NULL)
    {
        fclose(inptr);
        fprintf(stderr, "Could not create %s.\n", outfile);
        return 4;
    }

    // read infile's BITMAPFILEHEADER
    BITMAPFILEHEADER bf;
    fread(&bf, sizeof(BITMAPFILEHEADER), 1, inptr);

    // read infile's BITMAPINFOHEADER
    BITMAPINFOHEADER bi;
    fread(&bi, sizeof(BITMAPINFOHEADER), 1, inptr);

    // ensure infile is (likely) a 24-bit uncompressed BMP 4.0
    if (bf.bfType != 0x4d42 || bf.bfOffBits != 54 || bi.biSize != 40 || 
        bi.biBitCount != 24 || bi.biCompression != 0)
    {
        fclose(outptr);
        fclose(inptr);
        fprintf(stderr, "Unsupported file format.\n");
        return 5;
    }
    
    // create copy of headers
    BITMAPFILEHEADER outbf = bf;
    BITMAPINFOHEADER outbi = bi;
    
    // new width + height
    outbi.biWidth *= n;
    outbi.biHeight *= n;
    
    // determine padding for original scanlines
    int inPadding =  (4 - (bi.biWidth * sizeof(RGBTRIPLE)) % 4) % 4;
    // determine padding for new scanlines
    int outPadding =  (4 - (outbi.biWidth * sizeof(RGBTRIPLE)) % 4) % 4;

    // new biSizeImage + bfSize
    outbi.biSizeImage = (outbi.biWidth * sizeof(RGBTRIPLE) + outPadding) * abs(outbi.biHeight);
    outbf.bfSize = outbi.biSizeImage + outbf.bfOffBits;
    
    // write outfile's BITMAPFILEHEADER
    fwrite(&outbf, sizeof(BITMAPFILEHEADER), 1, outptr);

    // write outfile's BITMAPINFOHEADER
    fwrite(&outbi, sizeof(BITMAPINFOHEADER), 1, outptr);

    // iterate over infile's scanlines
    for (int i = 0, biHeight = abs(bi.biHeight); i < biHeight; i++)
    {
        // repeat n times
        for (int j = 0; j < n; j++)
        { 
            // iterate over pixels in scanline
            for (int k = 0; k < bi.biWidth; k++)
            {
                // temporary storage
                RGBTRIPLE triple;

                // read RGB triple from infile
                fread(&triple, sizeof(RGBTRIPLE), 1, inptr);

                // write RGB triple to outfile, multiplied by factor
                for (int l = 0; l < n; l++)
                    fwrite(&triple, sizeof(RGBTRIPLE), 1, outptr);    
            }
            
            // add padding if necessary
            for (int m = 0; m < outPadding; m++)
                fputc(0x00, outptr);
                
            if (j < n-1)
                fseek(inptr, (-bi.biWidth * sizeof(RGBTRIPLE)), SEEK_CUR);
        }

        // Skip over padding, if any
        fseek(inptr, inPadding, SEEK_CUR);
    }

    // close infile
    fclose(inptr);

    // close outfile
    fclose(outptr);

    // that's all folks
    return 0;
}