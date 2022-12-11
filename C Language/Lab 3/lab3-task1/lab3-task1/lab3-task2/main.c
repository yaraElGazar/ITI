#include <stdio.h>
#include <stdlib.h>
#define COL 4
#define ROW 2



int main()
{
    float grades[ROW][COL], grade;
    int c,r, sum=0;
    char letter;
    for(r=0; r<ROW; r++) {
            printf("Enter the grades for student %d\n", r+1);
        for (c=0; c<COL; c++) {
            printf("Enter grade for course %d\n", c+1);
            scanf("%f", &grades[r][c]);
        }
    }
    for(r=0; r<ROW; r++) {
        for(c=0; c<COL; c++) {
            printf("%f \t", grades[r][c]);
        }
        printf("\n");
    }
    for(r=0; r<ROW; r++) {
        for(c=0; c<COL; c++) {
         sum += grades[r][c];
         grade = sum/(float)COL;
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
        printf("The total for student %d is %d \n",r+1, sum);
        printf("The grade for student %d is %c \n",r+1, letter);
        sum = 0;
    }
    return 0;
}
