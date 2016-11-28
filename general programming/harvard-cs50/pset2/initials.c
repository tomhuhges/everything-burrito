#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>

int main (void) {
    
    char* name = GetString();

    printf("%c", (toupper(name[0])));
    
    name = strchr(name, ' ');
    
    while (name != NULL) {
        printf("%c", (toupper(name[1])));
        name = strchr(name+1, ' ');
    }
      
    printf("\n");
    
}