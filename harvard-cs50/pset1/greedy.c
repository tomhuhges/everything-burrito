#include <stdio.h>
#include <math.h>
#include <cs50.h>

int main (void) {
    
    float c;
    do {
        printf("how much change?\n");
        c = GetFloat();
    } while ( c < 0 );
    
    int cint = round( c * 100 );

    int coins = 0;
    
    while ( cint > 0 ) {
        
        for ( int i = cint; i >= 25; i-=25 ) {
            coins++;
            cint-=25;
        }
        for ( int i = cint; i >= 10; i-=10 ) {
            coins++;
            cint-=10;
        }
        for ( int i = cint; i >= 5; i-=5 ) {
            coins++;
            cint-=5;
        }
        for ( int i = cint; i >= 1; i-=1 ) {
            coins++;
            cint-=1;
        }
        
    }
    
    printf("%i\n", coins);
    
}
