#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

int main (int argc, string argv[]) {
    
    if ( argc != 2 ) {
        printf("ERROR: Must have 1 argument\n");
        return 1;
    } else {
        
        string k = argv[1];
        int klen = strlen(k);
        
        for (int i=0;i<klen;i++){
            if (!isalpha(argv[1][i])){
                printf("ERROR: Argument must only contain alphabetical characters\n");
                return 1;
            }
        }
        
        // get alphabet positions of each k char, store in cipher
        char* alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        char l;
        string kpos;
        int cipher[klen];
        
        for (int i=0;i<klen;i++){
            l = (toupper(k[i]));
            kpos = strchr(alphabet,l);
            int g = (26 - strlen(kpos));
            //printf("%i", g);
            cipher[i] = g;
        }
        
        string p = GetString();
        int j = 0; // only increment when isalpha = true
        
        for ( int i=0; i<strlen(p) ; i++ ) {
            
            if ( isalpha(p[i]) ) {
                int q = (int)p[i];
                
                if ( isupper(p[i]) ){
                    q += cipher[j%klen];
                    
                    if ( q > 90) {
                        q -= 26;
                    }
                    
                } else if ( islower(p[i]) ){
                    q += cipher[j%klen];
                    
                    if ( q > 122) {
                        q -= 26; 
                    }
                    
                }
                
                printf("%c", (char)q);
                j++;
                
            } else {
                
                printf("%c", p[i]);
                
            }
            
        }
        
        printf("\n");
        
        return 0;
        
    }
}