#include <stdio.h>
#include <stdlib.h>
#include<Windows.h>
#include <conio.h>

//Lab6 - Task 4 (Line Editor)
//Press Enter for print

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
{   int i;
    char ch, arr[31], *c, *e, *s;
    int start=0, current=0, end=0;
    s=c=e=arr;

    gotoxy(39,5);
    textattr(0x30);
    for(int i =0; i<40; i++) {
        printf(" ");
    }

    gotoxy(current+40,5);
    do {
       ch=getch();
       switch(ch) {
        case -32:
            ch=getch();
                switch(ch) {
                    case 77:
                        if(current!=end){
                            current++;
                            c++;
                        }
                        gotoxy(current+39,5);
                    break;
                        case 75:
                            if(current!=start){
                            current--;
                            c--;
                        }
                        gotoxy(current+39,5);
                    break;
                        case 71:
                        c=arr;
                        gotoxy(39,5);
                    break;
                        case 79:
                        current=end;
                        c=e;
                        gotoxy(end+39,5);
                    }
        break;
        case 13:

           ch=27;
        break;
        default:
            printf("%c", ch);
            *c=ch;
            c++;
            current++;
            if(c!=e) {
            e++;
            end++;
            }

       }

    }while(ch!=27);

    *e = '\0';
    c=arr;
        printf("\n\n\n\n\n\n");
        textattr(0x07);
        printf("The printed array is: \n");
    while(*c != '\0') {
        printf("%c", *c);
        c++;
    }
    printf("\n\n\n\n\n\n");
    return 0;
}
