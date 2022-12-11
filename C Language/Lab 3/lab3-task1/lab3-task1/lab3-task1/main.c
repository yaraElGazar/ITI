#include <stdio.h>
#include <stdlib.h>

/* Task 1: Array Menu*/
int main()
{
    int numbers[10];
    int x, size, i, a, j, min, max;
    int sum = 0;
    float avg;
while (x!=7) {
    printf("\n Select an option: \n 1- Fill array \n 2- Sort array \n 3- Reverse Array \n 4- Sum and Average \n 5- Get minimum value \n 6- Get maximum value \n 7- exit \n");
    scanf("%d", &x);
    switch (x) {
    case 1:
        printf("Enter the size of the array: \n");
        scanf("%d", &size);
        for (i=0; i<size; i++) {
            printf("Enter integer %d \n", i+1);
            scanf("%d", &numbers[i]);
        }
        printf("The array is: \n");
        for (i=0; i<size; i++) {
            printf("%d", numbers[i]);
        }

        break;
    case 2:
        printf("The sorted array is: \n");
        for (i=0; i<size; i++) {
            for (j=i+1; j<size; j++) {
                if (numbers[i] > numbers[j]) {
                   a = numbers[i];
                   numbers[i] = numbers[j];
                   numbers[j] = a;
                }
            }
        }
        for (i=0; i<size; i++) {
            printf("%d", numbers[i]);
        }
        break;
    case 3:
        printf("The reversed array is: \n");
        for (i=0; i<size/2; i++) {
            a=numbers[size-i-1];
            numbers[size-i-1] = numbers[i];
            numbers[i] = a;
        }
        for (i=0; i<size; i++) {
            printf("%d", numbers[i]);
        }
        break;
    case 4:
        for(i=0; i<size; i++) {
            sum += numbers[i];
        }
        printf("The sum is: %d \n", sum);
        printf("The avaerage is: %f", sum/(float)size);

        break;
    case 5:
        min=numbers[0];
        for(i=1; i<size; i++) {
              if (numbers[i]<min) {
                min = numbers[i];
              }
        }
        printf("The minimum value is: %d \n", min);
        break;
    case 6:
        max=numbers[0];
        for(i=1; i<size; i++) {
              if (numbers[i]>max) {
                max = numbers[i];
              }
        }
        printf("The maximum value is: %d \n", max);
        break;
    default:
        system("cls");
        break;

    }

    }
    return 0;
}
