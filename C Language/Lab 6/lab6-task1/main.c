#include <stdio.h>
#include <stdlib.h>

//Lab 6 - Task 1

void swapVal(int, int);
void swapAdd(int*, int*);

int main()
{
    int x = 5;
    int y = 7;
    printf("The value of x before swap by value: %d\n", x);
    printf("The value of y before swap by value: %d\n", y);
    swapVal(x, y);
    printf("The value of x after swap by value: %d\n", x);
    printf("The value of y after swap by value: %d\n", y);
    swapAdd(&x, &y);
    printf("The value of x after swap by address: %d\n", x);
    printf("The value of y after swap by address: %d\n", y);

    return 0;
}

void swapVal(int n1, int n2) {
    int temp;
    temp = n1;
    n1 = n2;
    n2 = temp;
}

void swapAdd(int *pn1, int *pn2) {
    int temp;
    temp = *pn1;
    *pn1 = *pn2;
    *pn2 = temp;
}

