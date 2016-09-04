#include <stdio.h>
#include <cs50.h>

int main (void) {
    printf("How high is the pyramid? : ");
    int ph = GetInt();
    while ( ph > 23 || ph < 0 ) {
        printf("Retry: ");
        ph = GetInt();
    }
    
    for ( int i = 0; i < ph; i++ ) {
        int s = ph - i - 1;
        int b = i + 2;
        for ( int j = 0; j < s; j++ ){
            printf(" ");
        }
        for ( int k = 0; k < b; k++ ) {
            printf("#");
        }
        printf("\n");
    }
    
}