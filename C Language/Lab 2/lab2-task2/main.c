#include <stdio.h>
#include <stdlib.h>

int main()
{
    int sum = 0;
    int n;
    do {
        printf("Enter a number \n");
        scanf("%d", &n);
        sum+=n;
    } while (sum<=100);
    printf("The sum is %d", sum);
}
