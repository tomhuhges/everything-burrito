/**
 * dictionary.h
 *
 * Computer Science 50
 * Problem Set 5
 *
 * Declares a dictionary's functionality.
 */

#ifndef DICTIONARY_H
#define DICTIONARY_H

#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

// maximum length for a word
// (e.g., pneumonoultramicroscopicsilicovolcanoconiosis)
#define LENGTH 45
// length of valid charset
// (a-z, '\'')
#define CHARSETLENGTH 27


/**
 * Defines the trie struct
 */
typedef struct trie {
    bool is_word;
    struct trie* charset[CHARSETLENGTH];
} trie;

/**
 * Global ROOT variable that maintains the root of the trie
 */
trie* ROOT;

/**
 * Global WORDCOUNT variable to cheat for size
 */
int WORDCOUNT;

/**
 * Returns true if word is in dictionary else false.
 */
bool check(const char* word);

/**
 * Loads dictionary into memory.  Returns true if successful else false.
 */
bool load(const char* dictionary);

/**
 * Returns number of words in dictionary if loaded else 0 if not yet loaded.
 */
unsigned int size(void);

/**
 * Unloads dictionary from memory.  Returns true if successful else false.
 */
bool unload(void);

/**
 * Recursively frees tries from memory.
 */
void free_all(trie* ptr);


#endif // DICTIONARY_H
