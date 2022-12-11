#include <stdio.h>
#include <stdlib.h>
#include <windows.h>


// Lab 5- task 2

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

void newEmp(struct Employee[], int[], int);
void dispEmp(struct Employee[], int[], int);
void dispAll(struct Employee[], int[]);
void search(struct Employee[], int[]);

int main()
{
int key, index, employee_i[10];
struct Employee empArr[10];

while (key!=5) {
    printf("\n Select an option: \n 1- New \n 2- Display \n 3- Display all \n 4- Search \n 5- exit \n");
    scanf("%d", &key);
    switch (key) {
    case 1:
        system("cls");
        printf("Please enter index of employee to add: \n");
        scanf("%d", &index);
        newEmp(empArr, employee_i, index);
        break;
    case 2:
        system("cls");
        printf("Please enter index of employee to display: \n");
        scanf("%d", &index);
        dispEmp(empArr, employee_i, index);
        break;
    case 3:
        system("cls");
        dispAll(empArr, employee_i);
        break;
    case 4:
        system("cls");
        printf("Employees with salary greater than 30,000 are: \n");
        search(empArr, employee_i);
        break;
    default:
        system("cls");
        break;
    }

}
    return 0;
}

void newEmp(struct Employee empArr[], int employee_i[], int i) {
    int x=0;
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
    printf("Please enter index of employee to add: \n");
    scanf("%d", &i);
    }while(i!=0);
}

void dispEmp(struct Employee empArr[], int employee_i[], int i) {
    char fullname[5][22];
    int chosen;

    for(int y=0; y<10; y++) {
        if(employee_i[y]==i){
            chosen=y;
        }
    }
    system("cls");
    printf("-----Employee %d Information----- \n", employee_i[chosen]);
    strcpy(fullname[chosen], empArr[chosen].fname);
    strcat(fullname[chosen], " ");
    strcat(fullname[chosen], empArr[chosen].lname);

    printf("Code: %d \n", empArr[chosen].code);
    printf("Full name: %s \n", fullname[chosen]);
    printf("Age: %d \n", empArr[chosen].age);
    printf("Net Salary: %f \n", empArr[chosen].salary+empArr[chosen].bonus-empArr[chosen].tax);
}

void dispAll(struct Employee empArr[], int employee_i[]) {
    int length = sizeof(employee_i) / sizeof(employee_i[0]);
    char fullname[5][22];

    system("cls");
    for (int i=0; i<length; i++) {
    printf("-----Employee %d Information----- \n", employee_i[i]);
    strcpy(fullname[i], empArr[i].fname);
    strcat(fullname[i], " ");
    strcat(fullname[i], empArr[i].lname);

    printf("Code: %d \n", empArr[i].code);
    printf("Full name: %s \n", fullname[i]);
    printf("Age: %d \n", empArr[i].age);
    printf("Net Salary: %f \n", empArr[i].salary+empArr[i].bonus-empArr[i].tax);
    }
    getch();
}

void search(struct Employee empArr[], int employee_i[]) {
    int length = sizeof(employee_i) / sizeof(employee_i[0]);
    char fullname[5][22];

    system("cls");
    for (int i=0; i<length; i++) {
    if(empArr[i].salary+empArr[i].bonus-empArr[i].tax >= 30000){
    printf("-----Employee %d Information----- \n", employee_i[i]);
    strcpy(fullname[i], empArr[i].fname);
    strcat(fullname[i], " ");
    strcat(fullname[i], empArr[i].lname);

    printf("Code: %d \n", empArr[i].code);
    printf("Full name: %s \n", fullname[i]);
    printf("Age: %d \n", empArr[i].age);
    printf("Net Salary: %f \n", empArr[i].salary+empArr[i].bonus-empArr[i].tax);
    }
    }
    getch();
}

