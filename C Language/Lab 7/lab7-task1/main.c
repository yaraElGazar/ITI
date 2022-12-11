#include <stdio.h>
#include <stdlib.h>


//Lab 7 - Task 1 (Array of numbers using dynamic allocation)

int main() {

int sum=0, *ptr, *last, i, Size, *pcurrent;

// Takes size of the array from user
printf("Please enter size of the array: \n");
scanf("%d", &Size);

//Reserve area in heap memory
ptr=(int*)malloc(Size*sizeof(int));
last=&ptr[Size-1]; //Adress of last element

// Check if there is availbale area in memory
if(!ptr) {
    printf("Out of memory locations");
    exit(1);
}else{
for(pcurrent=ptr, i=0; i<Size; pcurrent++, i++) {
    printf("Please enter integer %d: \n", i+1);
    scanf("%d", pcurrent);
    sum+= *pcurrent;
}
printf("The sum is: %d \n", sum);
printf("The average is: %f \n", sum/(float)Size);

printf("The array is: \n");
for(pcurrent=ptr, i=0; i<Size; pcurrent++, i++) {
        printf("%d  ", *pcurrent);
}

printf("\n The reversed array is: \n");
for(pcurrent=ptr, i=0; i<Size/2; i++) {
    int temp;
    temp=*pcurrent;
    *pcurrent=*last;
    *last=temp;

    pcurrent++;
    last--;
}

for(pcurrent=ptr, i=0; i<Size; pcurrent++, i++) {
        printf("%d  ", *pcurrent);
}


}

free(ptr);

return 0;


}
