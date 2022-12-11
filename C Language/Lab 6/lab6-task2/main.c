#include <stdio.h>
#include <stdlib.h>


//Lab 6 - Task 2

int main() {

int numbers[10], sum=0, *ptr, *last, i;
ptr=numbers; //Adress of first element
last=&numbers[10-1]; //Adress of last element

for(ptr=numbers, i=0; i<10; ptr++, i++) {
    printf("Please enter integer %d: \n", i+1);
    scanf("%d", ptr);
    sum+= *ptr;
}
printf("The sum is: %d \n", sum);
printf("The average is: %f \n", sum/(float)10);

printf("The array is: \n");
for(ptr=numbers, i=0; i<10; ptr++, i++) {
        printf("%d  ", *ptr);
}

printf("\n The reversed array is: \n");
for(ptr=numbers, i=0; i<10/2; i++) {
    int temp;
    temp=*ptr;
    *ptr=*last;
    *last=temp;

    ptr++;
    last--;
}

for(ptr=numbers, i=0; i<10; ptr++, i++) {
        printf("%d  ", *ptr);
}

return 0;


}
