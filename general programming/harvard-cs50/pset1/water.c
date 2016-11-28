#include <stdio.h>
#include <cs50.h>

int main (void) {
    printf("How many minutes is your average shower?: ");
    int bw = GetInt();
    bw = bw * 12;
    printf("That's %i bottles of water!!\n", bw);
}