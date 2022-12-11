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
int i, x=0, employee_i[5];
struct Employee empArr[5];
char fullname[5][22];

    printf("Please enter index of employee: \n");
    scanf("%d", &i);
    do {
    system("cls");
    gotoxy(10,0);
    printf("Employee %d Form: \n", i);
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
    scanf("%d", &empArr[x].code);
    gotoxy(25,1);
    scanf("%d", &empArr[x].age);
    gotoxy(11,2);
    scanf("%s", &empArr[x].fname);
    gotoxy(30,2);
    scanf("%s", &empArr[x].lname);
    gotoxy(7,3);
    scanf("%f", &empArr[x].salary);
    gotoxy(26,3);
    scanf("%f", &empArr[x].bonus);
    gotoxy(5,4);
    scanf("%f", &empArr[x].tax);

    printf("To continue press any key>>");
    getch();
    employee_i[x] = i;
    x++;
    system("cls");
    printf("Please enter index of employee: \n");
    scanf("%d", &i);
    }while(i!=0);

    system("cls");
    for (i=0; i<x; i++) {
    printf("-----Employee %d Information----- \n", employee_i[i]);
    strcpy(fullname[i], empArr[i].fname);
    strcat(fullname[i], " ");
    strcat(fullname[i], empArr[i].lname);

    printf("Code: %d \n", empArr[i].code);
    printf("Full name: %s \n", fullname[i]);
    printf("Age: %d \n", empArr[i].age);
    printf("Net Salary: %f \n", empArr[i].salary+empArr[i].bonus-empArr[i].tax);
    }
    printf("Thanks >>");
    getch();

    return 0;
}
