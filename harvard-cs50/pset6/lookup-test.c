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

const char* lookup(const char* path)
{
    char* ext;
    
    ext = strrchr(path, '.');
    
    if ( strcasecmp(ext, ".css") == 0) {
        return "text/css";
    } else if (  strcasecmp(ext, ".html") == 0) {
        return "text/html";
    } else if (  strcasecmp(ext, ".gif") == 0) {
        return "image/gif";
    } else if (  strcasecmp(ext, ".ico") == 0) {
        return "image/x-icon";
    } else if (  strcasecmp(ext, ".jpg") == 0) {
        return "image/jpeg";
    } else if (  strcasecmp(ext, ".js") == 0) {
        return "text/javascript";
    } else if (  strcasecmp(ext, ".php") == 0) {
        return "text/x-php";
    } else if (  strcasecmp(ext, ".png") == 0) {
        return "image/png";
    } else {
        return NULL;
    }
    
}

int main(void)
{

    const char* result = lookup("/src/css/style.css");
    printf("%s\n", result);
    return 0;

}