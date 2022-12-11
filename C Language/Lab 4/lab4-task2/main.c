#include <stdio.h>
#include <stdlib.h>
#include <windows.h>

void gotoxy( int column, int line )
  {
  COORD coord;
  coord.X = column;
  coord.Y = line;
  SetConsoleCursorPosition(
    GetStdHandle( STD_OUTPUT_HANDLE ),
    coord
    );
  }
struct Employee {
  int code, age;
  char fname[11], lname[11];
  float salary, tax, bonus;
};

int main()
{
int i;
struct Employee emp[5];
char fullname[5][22];

for(i=0; i<5; i++) {
    gotoxy(10,0);
    printf("Employee %d Form: \n", i+1);
    printf("Code: \n");
    gotoxy(20,1);
    printf("Age: \n");
    printf("First name: \n");
    gotoxy(20,2);
    printf("Last name: \n");
    printf("Salary: \n");
    gotoxy(20,3);
    printf("Bonus: \n");
    printf("Tax: \n");

    gotoxy(5,1);
    scanf("%d", &emp[i].code);
    gotoxy(25,1);
    scanf("%d", &emp[i].age);
    gotoxy(11,2);
    scanf("%s", &emp[i].fname);
    gotoxy(30,2);
    scanf("%s", &emp[i].lname);
    gotoxy(7,3);
    scanf("%f", &emp[i].salary);
    gotoxy(26,3);
    scanf("%f", &emp[i].bonus);
    gotoxy(5,4);
    scanf("%f", &emp[i].tax);
    if(i!=4) {
        printf("Next >>\n");
    }else{
        printf("To print press any key>>");
    }
    getch();
    system("cls");
}

for (i=0; i<5; i++) {
    printf("-----Employee %d Information----- \n", i+1);
    strcpy(fullname[i], emp[i].fname);
    strcat(fullname[i], " ");
    strcat(fullname[i], emp[i].lname);

    printf("Code: %d \n", emp[i].code);
    printf("Full name: %s \n", fullname[i]);
    printf("Age: %d \n", emp[i].age);
    printf("Net Salary: %f \n", emp[i].salary+emp[i].bonus-emp[i].tax);
    }
    printf("Thanks >>");
    getch();
    return 0;
}
