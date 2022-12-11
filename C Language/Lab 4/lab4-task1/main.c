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
    struct Employee emp;
    char fullname[22];

    gotoxy(10,0);
    printf("Employee Form: \n");
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
    scanf("%d", &emp.code);
    gotoxy(25,1);
    scanf("%d", &emp.age);
    gotoxy(11,2);
    scanf("%s", &emp.fname);
    gotoxy(30,2);
    scanf("%s", &emp.lname);
    gotoxy(7,3);
    scanf("%f", &emp.salary);
    gotoxy(26,3);
    scanf("%f", &emp.bonus);
    gotoxy(5,4);
    scanf("%f", &emp.tax);
    printf("To print enter any key >>\n");
    getch();
    system("cls");

    strcpy(fullname, emp.fname);
    strcat(fullname, " ");
    strcat(fullname, emp.lname);

    printf("Code: %d \n", emp.code);
    printf("Full name: %s \n", fullname);
    printf("Age: %d \n", emp.age);
    printf("Net Salary: %f \n", emp.salary+emp.bonus-emp.tax);

    return 0;
}
