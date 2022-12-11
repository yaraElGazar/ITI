#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int main()
{
    char strings[5][10], substring[10];
    int i, counter=0;
    for (i=0; i<5; i++) {
        printf("Enter string %d: \n", i+1);
        gets(strings[i]);
    }

        printf("Enter substring: \n");
        gets(substring);
    for(i=0; i<5; i++) {
        if(strstr(strings[i], substring)!=NULL) {
            counter+=1;
        }
    }
    printf("The number of occurences is %d \n", counter);

    return 0;
}
