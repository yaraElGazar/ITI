#include <stdio.h>
#include <stdlib.h>

int main()
{
    while(1) {
    char x;
    printf("N-New \n");
    printf("D-Display \n");
    printf("E-Exit \n");
    x = getch();

    switch (x) {
    case 78: case 110:
        system("cls");
        printf("New! \n");
        break;
    case 68: case 100:
        system("cls");
        printf("Display! \n");
        break;
    case 69: case 101:
        exit(0);
        break;
    default:
        system("cls");
        break;

    }
    }
return 0;

}
