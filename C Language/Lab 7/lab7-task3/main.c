#include <stdio.h>
#include <stdlib.h>

//Lab 7 - Task 3 (Students and their grades using dynamic allocation)
// Unknown number of students each has different number of courses (pointer to pointer)

int main()
{
    float **grades, **pcurrent, grade;
    int nStd, nCourses, i, j, *numCourses, sum=0;
    char letter;

    // User enters number of students
    printf("Enter the number of students: \n");
    scanf("%d", &nStd);

    // Reserve pointer for each student
    grades = (float**)malloc(nStd*sizeof(float*));
    numCourses=(int*)malloc(nStd*sizeof(int));

    if(!grades || !numCourses){
    printf("Out of memory locations");
    exit(1);
    }else{
    for(i=0; i<nStd; i++) {
        printf("Enter number of courses for student %d: \n", i+1);
        scanf("%d", &nCourses);
        grades[i] = (float*)malloc(nCourses*sizeof(float));
        numCourses[i]=nCourses;
        for(j=0; j<nCourses; j++) {
            printf("Enter grade of student %d, Course #%d: \n", i+1, j+1);
            scanf("%f", grades[i]+j);
        }

    }
    printf("-------------------------------Display Grades-------------------------------\n");
    // Print grades for each student
    for(i=0; i<nStd; i++) {
        printf("Grades for student %d are: \n", i+1);
        for(j=0; j<numCourses[i]; j++) {
            printf("%f \n", *(grades[i]+j));
        }

    }
    printf("-------------------------------Display Sum, Average, and Letter-------------------------------\n");
    //Print sum and letter for each student
    for(i=0; i<nStd; i++) {
        for(j=0; j<numCourses[i]; j++) {
         sum += *(grades[i]+j);
         grade = sum/(float)numCourses[i];
        }
        if (grade <= 100 && grade >= 85){
            letter = 'A';
        }else if(grade<85 && grade>=75) {
            letter = 'B';
        }else if(grade<75 && grade>=65) {
            letter = 'C';
        }else if(grade<65 && grade>=60) {
            letter = 'D';
        }else if(grade<60) {
            letter= 'F';
        }else{letter='N';}
        printf("The total for student %d is %d \n",i+1, sum);
        printf("The average for student %d is %f \n",i+1, grade);
        printf("The grade for student %d is %c \n",i+1, letter);
        sum = 0;
        }

    }
free(numCourses);
for(i=0; i<nStd; i++) {
    free(grades[i]);
}
free(grades);


    return 0;
}

