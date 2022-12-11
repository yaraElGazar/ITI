#include <stdio.h>
#include <stdlib.h>
#define ESC 27

int main()
{
    char key;
    printf("Press any key please \n");
    key=getch();
    while(key!=ESC){


    if(key==-32) {
        printf("Extended \n");
        key=getch();
        printf("The ASCII code is: %d \n", key);
    }else{
    printf("Normal key and ASCII code is %d \n", key);
    }
    printf("Press any key please \n");
    key=getch();
    }
    return 0;
}
