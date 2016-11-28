/**
 * dictionary.c
 *
 * Computer Science 50
 * Problem Set 5
 *
 * Implements a dictionary's functionality.
 */

#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#include "dictionary.h"

/**
 * Returns true if word is in dictionary else false.
 */
bool check(const char* word)
{
    
    trie* ptr = ROOT;
    
    for ( int i=0; i<strlen(word)+1; i++ ){
        
        int c = tolower((int)word[i]); // get ascii value + ensure lowercase
        
        if ( c == 0 && ROOT->is_word == true ) {
            ROOT = ptr;
            return true;
        }
        
        if ( c == 39 ) c = 26; // make apostrophe last index (26)
            else c -= (int)'a'; // make relative to ascii a (so a is 0, etc...)
                
        if ( ROOT->charset[c] != NULL) ROOT = ROOT->charset[c];
        else {
            ROOT = ptr;
            return false;
        }
        
    }
    
    return false;
}

/**
 * Loads dictionary into memory.  Returns true if successful else false.
 */
bool load(const char* dictionary) {
    
    FILE* dict = fopen(dictionary, "r");
    char word[LENGTH+1];
    ROOT = calloc(sizeof(trie), 1);
    trie* ptr = ROOT;
    WORDCOUNT = 0;
    
    //check if file exists
    if ( dict == NULL ) {
        printf("File does not exist.\n");
        return 1;
    }
    
    while(!feof(dict)) {
        
        fscanf(dict, "%s\n", word);
        
        for ( int i=0; i<strlen(word); i++ ) {
            
            int c = (int)word[i]; // get ascii value
            
            if ( c == 39 ) c = 26; // make apostrophe last index (26)
            else c -= (int)'a'; // make relative to ascii a (so a is 0, etc...)
            
            if ( ROOT->charset[c] == NULL ) {
                
                trie* level = calloc(sizeof(trie), 1);
                if ( i == strlen(word)-1) level->is_word = true;
                ROOT->charset[c] = level;
            
            }
            
            if ( i == strlen(word)-1) ROOT = ptr;
            else ROOT = ROOT->charset[c];
    
        }
        
        WORDCOUNT++;
    
    }
    
    fclose(dict);
    
    return true;
}

/**
 * Returns number of words in dictionary if loaded else 0 if not yet loaded.
 */
unsigned int size(void)
{
    
    return WORDCOUNT;
}

/**
 * Unloads dictionary from memory.  Returns true if successful else false.
 */
bool unload(void)
{
    
    free_all(ROOT);
    return true;
    
}

void free_all(trie* ROOT)
{

    for( int i=0; i < CHARSETLENGTH; i++)
    {
        
        //printf("%i: %p\n", i, ROOT->charset[i]);
        if(ROOT->charset[i] != NULL) free_all(ROOT->charset[i]);
        
    }
    
    free(ROOT);
    
    return;
}
