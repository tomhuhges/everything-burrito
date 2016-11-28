
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


bool parse(const char* line, char* abs_path, char* query)
{
    
    // check if line is the correct format
    
    // has 3 elements?
    int length = strlen(line);
    int elements = 0;
    for (int i=0;i<=length;i++){
        if (line[i] == ' ' || line[i] == '\0') elements++;
    }
    if (elements != 3) {
        printf("400 Bad request\n");
        return false;
    }
    
    // ends in \r\n?
    if ( strcmp( &line[length-2], "\r\n") != 0 ) {
        printf("400 Bad request (rn)\n");
        return false;
    }
    
    // make a copy of the line so we can work with it
    
    char linecopy[length];                // -2 because we don't need to copy the \r\n
    memset(linecopy, '\0', sizeof(linecopy));
    strncpy(linecopy, line, length-2);
    
    // split line into method, request-target and HTTP version
    // by replacing whitespace with null bytes
    
    char* method = linecopy;                // simple enough, sets method pointer to the start of our line copy
    
    char* target = strchr(linecopy, ' ');   // sets target pointer to first whitespace
    *target = '\0';                         // replace value at pointer (whitespace) with a null byte
    target++;                               // increment pointer address to char after whitespace
    
    char* version = strchr(target, ' ');    // repeat for HTTP version
    *version = '\0';
    version++;
    
    // check if elements are correct format
    
    // method = GET?
    if (strcmp( method, "GET" ) != 0) {
        printf("405 Method Not Allowed\n");
        return false;
    }
    // target begins with /?
    if (strncmp( target, "/", 1 ) != 0) {
        printf("501 Not Implemented\n");
        return false;
    }
    // target does not contain '"'?
    if (strstr( target, "\"" ) != NULL) {
        printf("400 Bad Request\n");
        return false;
    }
    // version = HTTP/1.1?
    if (strcmp( version, "HTTP/1.1" )) {
        printf("505 HTTP Version Not Supported\n");
        return false;
    }
    
    // check for query
    char* q = strchr( target, '?' );
    
    // has question mark?
    if ( q == NULL ) strcpy(query, "\0");
    
    else {
        
        // anything after the question mark?
        if ( !*(q+1) ) strcpy(query, "\0");
        
        else {
            // replace ? with null byte
            *q = '\0';
            q++;
            
            // save abs_path + query
            strcpy(query, q);
        }
            
    }
    
    strcpy(abs_path, target);
    
    return true;
}

int main(void)
{
    // tests                                                                            // expects

    //parse("GET /login.php? user=skroob HTTP/1.1\r\n", "", "");                          // 400 Bad request
    //parse("GET HTTP/1.1\r\n", "", "");                                                  // 400 Bad request
    //parse("GET /login.php?user=skroob HTTP/1.1", "", "");                               // 400 Bad request
    //parse("POST /login.php?user=skroob HTTP/1.1\r\n", "", "");                          // 405 Method Not Allowed
    //parse("GET http://www.tomhughes.com/login.php?user=skroob HTTP/1.1\r\n", "", "");   // 501 Not Implemented
    //parse("GET /login.php?user=\"skroob\" HTTP/1.1\r\n", "", "");                       // 400 Bad Request
    //parse("GET /login.php?user=skroob HTTP/2\r\n", "", "");                             // 505 HTTP Version Not Supported
    parse("GET /hello.php?name=Alice HTTP/1.1\r\n", "", "");                           // abs_path

    return 0;
}