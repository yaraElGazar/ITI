#include <stdio.h>
#include <stdlib.h>
#include<Windows.h>
#include <conio.h>

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

int main()
{
char menu[3][10] = {"New", "Display", "Exit"};
int i, selected = 0;
char key;

while(key!=27) {
/*Draw menu and select first one*/
gotoxy(10,0);
printf("Menu \n");
for(i =0; i<3; i++) {
    if(i==selected) {
    textattr(0x70);
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
            if(key==80 && selected<2) {
            selected+=1;
            }else if(key==80 && selected==2){
            selected=0;
            }else if(key==72 && selected>0) {
            selected-=1;
            }else if(key==72 && selected==0){
            selected=2;
            }else if(key==71){
            selected=0;
            }else if(key==79){
            selected=2;
            }
}else{
            if(key==13 && selected==0) {
            system("cls");
            printf("\n New Message! \n");
            getch();
            }else if(key==13 && selected==1){
            system("cls");
            printf("\n Display Message! \n");
            getch();
            }else if(key==13 && selected==2){
            system("cls");
            printf("\n Bye Bye! \n");
            getch();
            key=27;
            }
}
//system("cls");

}
    return 0;
}
