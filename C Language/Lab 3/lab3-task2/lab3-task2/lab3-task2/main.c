#include <stdio.h>
#include <stdlib.h>
#define COL 4
#define ROW 5



int main()
{
    float grades[ROW][COL], grade;
    int c,r, sum=0, sumg=0, sums[ROW][2], i, j, a, b;
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
         sums[r][0]=r;
         sums[r][1]=sum;
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
/*Print the average of each course*/
        for(c=0; c<COL; c++) {
        for(r=0; r<ROW; r++) {
         sumg += grades[r][c];
        }
        printf("The average of course %d is %f.\n", c+1, sumg/(float)ROW);
        sumg = 0;
        }
/*Print the sequence of students sorted desc*/
        for(i=0; i<ROW; i++) {
            for(j=i+1; j<ROW; j++) {
                if (sums[i][1] < sums[j][1]) {
                    a = sums[i][1];
                    sums[i][1]=sums[j][1];
                    sums[j][1]=a;
                    b = sums[i][0];
                    sums[i][0]=sums[j][0];
                    sums[j][0]=b;
                }
            }
        }
        printf("The student sequence in descending order is: \n");
        for(r=0; r<ROW; r++) {
            printf("Student %d \t", sums[r][0]+1);
        }

    return 0;
}
