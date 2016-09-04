/**
 * helpers.c
 *
 * Computer Science 50
 * Problem Set 3
 *
 * Helper functions for Problem Set 3.
 */
       
#include <cs50.h>

#include "helpers.h"

/**
 * Recursive implementation of binary tree search.
 */
bool binary(int value, int values[], int start, int end)
{
    
    int middle = (start+end)/2;
    
    while ( end >= start ) {
        if ( values[middle] == value ) return true;
        else if ( value < values[middle] ) return binary( value, values, start, middle-1);
        else if ( value > values[middle] ) return binary( value, values, middle+1, end);
    }
    return false;
}

/**
 * Returns true if value is in array of n values, else false.
 */
bool search(int value, int values[], int n)
{
    
    return n < 0 ? false: binary( value, values, 0, n);
    
}


/**
 * Sorts array of n values.
 */
void sort(int values[], int n)
{
    
    int i, j, min, temp;
    
    for ( i=0; i<n-1; i++ ){
        min = i;
        for ( j=i+1; j<n; j++ ){
            if (values[j] < values[min]) min = j;
        }
        if (i != min) {
            temp = values[i];
            values[i] = values[min];
            values[min] = temp;
        }
    }
    
    return;
}