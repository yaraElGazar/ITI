#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void main() {
char fname[5][11], lname[5][11], fullname[5][22];
int i, r, c, len[5][2], min, max, min_i, max_i;

for (i=0; i<5; i++) {
    printf("Enter first name for student %d \n", i+1);
    gets(fname[i]);
    printf("Enter last name for student %d \n", i+1);
    gets(lname[i]);
    strcpy(fullname[i], fname[i]);
    strcat(fullname[i], " ");
    strcat(fullname[i], lname[i]);
}
for (r=0; r<5; r++) {
    printf("Full name of student %d is: \n", r+1);
    puts(strupr(fullname[r]));
    len[r][0]=r;
    len[r][1]=strlen(fullname[r]);
}

min=strlen(fullname[0]);
max=strlen(fullname[0]);

for (r=1; r<5; r++) {
    if(strlen(fullname[r])<min) {
        min=strlen(fullname[r]);
        min_i=r;
    }else if(strlen(fullname[r])>max){
        max=strlen(fullname[r]);
        max_i=r;
    }
}
printf("The largest name is student %d \n", max_i+1);
printf("The smallest name is student %d \n", min_i+1);


/*for(r=0; r<5; r++) {
    for(i=0; i<2; i++) {
        printf("%d", len[r][i]);
    }
    printf("\n");
}*/

    /*min=len[0][1];
    max=len[0][1];

    for(i=1; i<5; i++) {
        if (len[i][1]<min) {
            min = len[i][0];
        }else if (len[i][1]>max){
            max = len[i][0];
        }
    }*/
    /*printf("The smallest name is name %d \n", min+1);
    printf("The largest name is name %d \n", max+1);*/

    return 0;
}
