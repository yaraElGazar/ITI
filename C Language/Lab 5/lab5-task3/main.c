#include <stdio.h>
#include <stdlib.h>

// Lab 5- task 3

getPower(int, int);
getBinary(int);

int main()
{
    int number, power, result, decimal;
    printf("----------Power Function----------\n");
    printf("Please enter a number: \n");
    scanf("%d", &number);
    printf("Please enter the power: \n");
    scanf("%d", &power);
    result = getPower(number, power);
    printf("The result is: %d \n", result);
    printf("----------Decimal to Binary Function----------\n");
    printf("Please enter a decimal number: \n");
    scanf("%d", &decimal);
    printf("The binary representation is: %d \n", getBinary(decimal));

    return 0;
}

int getPower(int number, int power) {
    if(power==0) {
        return 1;
    }else{
        return (number*getPower(number, power-1));
    }
}

int getBinary(int decimal) {
    if(decimal==0){
        return 0;
    }else{
    return( (decimal%2) + 10 * getBinary(decimal/2) );
    }
}
