/**
 * recover.c
 *
 * Computer Science 50
 * Problem Set 4
 *
 * Recovers JPEGs from a forensic image.
 */
 
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[])
{
    
    FILE* data = fopen("card.raw", "r");
    if (data == NULL)
    {
        printf("Could not open 'card.raw'\n");
        return 1;
    }
    
    unsigned char buffer[512];
    char filename[8];
    FILE* newfile;
    int fileno = -1;
    
    while ( fread(buffer, 512, 1, data) == 1 ) {
        
        if ( buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff ) {
            
            fileno++;
            
            if ( fileno > 0 ) {
                fclose(newfile);
            }
            
            sprintf(filename, "%03d.jpg", fileno);
            
            newfile = fopen(filename, "a");
            if (newfile == NULL) {
                fclose(data);
                fprintf(stderr, "Could not create %s.\n", filename);
                return 2;
            }
            
        }
        
        if ( fileno > -1 ) fwrite(buffer, 512, 1, newfile);
        
    }
    
    fclose(newfile);

    fclose(data);

    return 0;
    
}
