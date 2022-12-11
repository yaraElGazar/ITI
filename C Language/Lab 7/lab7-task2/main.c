#include <stdio.h>
#include <stdlib.h>
#include <string.h>


//Lab 7 - Task 2 (Students and their names using dynamic allocation)
// 3 students each has a name with different size (Array of pointers)

void main() {
char *arrPtr[3]; //array of 3 pointers to chars
int i, s;

// For 3 students
for (i=0; i<3; i++) {
    printf("Enter size for student %d name: \n", i+1);
    scanf("%d", &s);
    //Reserve size in memory
    arrPtr[i] = (char*)malloc(sizeof(char)*(s+1));

    printf("Enter name of student %d: \n", i+1);
    scanf("%s", arrPtr[i]);
}
//Print names of students
for(i=0; i<3; i++) {
    printf("Name of student %d: \n", i+1);
    printf("%s \n", arrPtr[i]);
}


//Free the memory
for(i=0; i<3; i++) {
    free(arrPtr[i]);
}
    return 0;
}

