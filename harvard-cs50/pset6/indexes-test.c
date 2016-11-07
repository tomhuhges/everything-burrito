// header files
#include <arpa/inet.h>
#include <dirent.h>
#include <errno.h>
#include <limits.h>
#include <math.h>
#include <signal.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <strings.h>
#include <sys/socket.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <unistd.h>

/**
 * Checks, in order, whether index.php or index.html exists inside of path.
 * Returns path to first match if so, else NULL.
 */
char* indexes(const char* path)
{
    
    // get length of path
    int path_size = strlen(path);
    
    // create new string as path + index.php
    char* php_path = malloc(path_size + 11);
    strcpy(php_path, path);
    strcat(php_path, "index.php");
    
    // if index.php exists, return path
    if (access(php_path, F_OK) == 0) return php_path;
    
    // if not, create new string as path + index.html
    char* html_path = malloc(path_size + 12);
    strcpy(html_path, path);
    strcat(html_path, "index.html");
    
    // if index.html exists, return path
    if (access(html_path, F_OK) == 0) return html_path;
    
    // else
    return NULL;
}

int main(void)
{

    char* result = indexes("public/test/");
    printf("%s\n", result);
    return 0;

}