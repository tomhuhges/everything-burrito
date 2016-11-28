#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>

int main (int argc, string argv[]) {
    
    if ( argc != 2 ) {
        printf("ERROR: No argument detected\n");
        return 1;
    } else {
        char* str = GetString();
        int len = strlen(str);
        int k = atoi(argv[1]);
        k = k%26;
        int p;
        
        for (int i=0;i<len;i++) {
            if ( isalpha(str[i]) ) {
                p = str[i];
                if ( p >= 65 && p <= 90 ){
                    p += k;
                    if ( p > 90) {
                        p -= 26;
                    }
                } else if ( p >= 97 && p <= 122 ){
                    p += k;
                    if ( p > 122) {
                        p -= 26;
                    }
                }
                printf("%c", (char)p);
            } else {
                printf("%c", str[i]);
            }
        }
        printf("\n");
        return 0;
    }
    
}