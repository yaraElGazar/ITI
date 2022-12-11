#include <stdio.h>
#include <stdlib.h>

int main()
{
    char word[10];
    int i = 0;
    printf("Please enter a string: \n");
    scanf("%s", &word);
    while(word[i]!='\0') {
        i+=1;
    }
    printf("The length is %d \n", i);
    return 0;
}
