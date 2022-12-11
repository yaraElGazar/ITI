#include <stdio.h>
#include <stdlib.h>
#include<Windows.h>
#include <conio.h>

//Lab6 - Task 3 (Employee Highlighted menu with pointers)

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

void textattr(int i)
{SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), i);}

// Struct Employee
struct Employee {
  int code, age;
  char fname[11], lname[11];
  float salary, tax, bonus;
};

// Functions Signature
void newEmp(struct Employee *, int[], int);
void dispEmp(struct Employee *, int[], int);
void dispAll(struct Employee *, int[]);
void search(struct Employee *, int[], float);

int main()
{
char menu[5][15] = {"New", "Display", "Display all", "Search", "Exit"};
int i, selected = 0, index, employee_i[10]={0};
struct Employee empArr[10], *pemps;
pemps= empArr;
char key;
float minSalary;

while(key!=27) {
/*Draw menu and select first one*/
gotoxy(10,0);
textattr(0x07);
printf("Menu \n");
for(i =0; i<5; i++) {
    if(i==selected) {
    textattr(0x03);
    printf("%s \n", menu[i]);
    }else{
    textattr(0x07);
    printf("%s \n", menu[i]);
    }
}
/*Take input from  user*/
key=getch();
if(key==-32) {
        key=getch();
            if(key==80 && selected<4) {
            selected+=1;
            }else if(key==80 && selected==4){
            selected=0;
            }else if(key==72 && selected>0) {
            selected-=1;
            }else if(key==72 && selected==0){
            selected=4;
            }else if(key==71){
            selected=0;
            }else if(key==79){
            selected=4;
            }
}else{
            if(key==13 && selected==0) {
            system("cls");
            system("cls");
            printf("Please enter index of employee to add: \n");
            scanf("%d", &index);
            newEmp(pemps, employee_i, index);
            system("cls");
            }else if(key==13 && selected==1){
            system("cls");
            printf("Please enter index of employee to display: \n");
            scanf("%d", &index);
            dispEmp(pemps, employee_i, index);
            getch();
            system("cls");
            }else if(key==13 && selected==2){
            system("cls");
            dispAll(pemps, employee_i);
            system("cls");
            }else if(key==13 && selected==3){
            system("cls");
            printf("Please enter minimum salary: \n");
            scanf("%f", &minSalary);
            printf("Employees with salary greater than %f are: \n", minSalary);
            search(pemps, employee_i, minSalary);
            getch();
            system("cls");
            }else if(key==13 && selected==4){
            system("cls");
            key=27;
            }
}

}
    return 0;
}

//Functions implementation
void newEmp(struct Employee *pemps, int employee_i[], int i) {
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
    scanf("%d", &pemps -> code);
    gotoxy(25,1);
    scanf("%d", &pemps -> age);
    gotoxy(11,2);
    scanf("%s", pemps ->fname);
    gotoxy(30,2);
    scanf("%s", pemps ->lname);
    gotoxy(7,3);
    scanf("%f", &pemps ->salary);
    gotoxy(26,3);
    scanf("%f", &pemps ->bonus);
    gotoxy(5,4);
    scanf("%f", &pemps ->tax);

    printf("To continue press any key>>");
    getch();
    employee_i[x] = i;
    pemps++;
    x++;
    system("cls");
    printf("Please enter index of employee to add: \n");
    scanf("%d", &i);
    }while(i!=0);
}

void dispEmp(struct Employee *pemps, int employee_i[], int i) {
    char fullname[5][22];
    int chosen;

    for(int y=0; y<10; y++) {
        if(employee_i[y]==i){
            chosen=y;
        }
    }
    system("cls");
    printf("-----Employee %d Information----- \n", employee_i[chosen]);
    strcpy(fullname[chosen], (pemps+chosen)->fname);
    strcat(fullname[chosen], " ");
    strcat(fullname[chosen], (pemps+chosen)->lname);

    printf("Code: %d \n", (pemps+chosen)->code);
    printf("Full name: %s \n", fullname[chosen]);
    printf("Age: %d \n", (pemps+chosen)->age);
    printf("Net Salary: %f \n", ((pemps+chosen)->salary)+((pemps+chosen)->bonus)-((pemps+chosen)->tax));
}

void dispAll(struct Employee *pemps, int employee_i[]) {
    char fullname[5][22];

    system("cls");
    for (int i=0; i<10; i++) {
    if(employee_i[i]!=0){
    printf("-----Employee %d Information----- \n", employee_i[i]);
    strcpy(fullname[i], (pemps+i)->fname);
    strcat(fullname[i], " ");
    strcat(fullname[i], (pemps+i)->lname);

    printf("Code: %d \n", (pemps+i)->code);
    printf("Full name: %s \n", fullname[i]);
    printf("Age: %d \n", (pemps+i)->age);
    printf("Net Salary: %f \n", ((pemps+i)->salary)+((pemps+i)->bonus)-((pemps+i)->tax));
    }

    }
    getch();
}

void search(struct Employee *pemps, int employee_i[], float minSalary) {
    char fullname[5][22];

    system("cls");
    for (int i=0; i<10; i++) {
    if(employee_i[i]!=0){
    if(((pemps+i)->salary)+((pemps+i)->bonus)-((pemps+i)->tax) >= minSalary){
    printf("-----Employee %d Information----- \n", employee_i[i]);
    strcpy(fullname[i], (pemps+i)->fname);
    strcat(fullname[i], " ");
    strcat(fullname[i], (pemps+i)->lname);

    printf("Code: %d \n", (pemps+i)->code);
    printf("Full name: %s \n", fullname[i]);
    printf("Age: %d \n", (pemps+i)->age);
    printf("Net Salary: %f \n", ((pemps+i)->salary)+((pemps+i)->bonus)-((pemps+i)->tax));
    }}

    }
    getch();
}


