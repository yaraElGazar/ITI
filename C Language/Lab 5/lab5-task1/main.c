#include <stdio.h>
#include <stdlib.h>

// Lab 5 - Task 1

void fillArray(int[], int);
void sortArray(int[], int);
void reverseArray(int[], int);
int sumArray(int[], int);
int getMin(int[], int);
int getMax(int[], int);


int main()
{
int numbers[10], x, size, sum;

while (x!=7) {
    printf("\n Select an option: \n 1- Fill array \n 2- Sort array \n 3- Reverse Array \n 4- Sum and Average \n 5- Get minimum value \n 6- Get maximum value \n 7- exit \n");
    scanf("%d", &x);
    switch (x) {
    case 1:
        printf("Enter the size of the array: \n");
        scanf("%d", &size);
        fillArray(numbers, size);
        break;
    case 2:
        printf("The sorted array is: \n");
        sortArray(numbers, size);
        break;
    case 3:
        printf("The reversed array is: \n");
        reverseArray(numbers, size);
        break;
    case 4:
        sum = sumArray(numbers, size);
        printf("The sum is: %d \n", sum);
        printf("The avaerage is: %f", sum/(float)size);

        break;
    case 5:
        printf("The minimum value is: %d \n", getMin(numbers, size));
        break;
    case 6:
        printf("The maximum value is: %d \n", getMax(numbers, size));
        break;
    default:
        system("cls");
        break;

    }

}
return 0;

}

void fillArray(int arr[], int size) {
        for (int i=0; i<size; i++) {
            printf("Enter integer %d \n", i+1);
            scanf("%d", &arr[i]);
        }
        printf("The array is: \n");
        for (int i=0; i<size; i++) {
            printf("%d", arr[i]);
        }
}

void sortArray(int arr[], int size) {
    int i, j, a;
        for (i=0; i<size; i++) {
            for (j=i+1; j<size; j++) {
                if (arr[i] > arr[j]) {
                   a = arr[i];
                   arr[i] = arr[j];
                   arr[j] = a;
                }
            }
        }
        for (i=0; i<size; i++) {
            printf("%d", arr[i]);
        }
}

void reverseArray(int arr[], int size) {
int i, a;
    for (i=0; i<size/2; i++) {
            a=arr[size-i-1];
            arr[size-i-1] = arr[i];
            arr[i] = a;
        }
        for (i=0; i<size; i++) {
            printf("%d", arr[i]);
        }
}

int sumArray(int arr[], int size) {
    int sum=0, i;
        for(i=0; i<size; i++) {
            sum += arr[i];
        }
        return sum;
}

int getMin(int arr[], int size) {
    int min, i;
        min=arr[0];
        for(i=1; i<size; i++) {
              if (arr[i]<min) {
                min = arr[i];
              }
        }
    return min;
}

int getMax(int arr[], int size) {
    int max, i;
        max=arr[0];
        for(i=1; i<size; i++) {
              if (arr[i]>max) {
                max = arr[i];
              }
        }
    return max;
}

