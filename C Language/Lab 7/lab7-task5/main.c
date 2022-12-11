#include <stdio.h>
#include <stdlib.h>
#include<Windows.h>
#include <conio.h>

//Lab 7 - Task 5 (Multi - Line Editor using dynamic allocation)
//The text is printed when Esc is pressed
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
    char ch, **c, e=0, s=0;
    int start=0, current=0, end[10], rows=10, cols=31, row=0, col=0, cl, r, rowend=0;

    c = (char**)malloc(rows*sizeof(char*));

    for(i=0; i<rows; i++) {
        c[i]=(char*)malloc(cols*sizeof(char));
    }

    // Draw blue background
    gotoxy(39,5);
    textattr(0x30);
    for(int i =0; i<40; i++) {
        printf(" ");
    }

    gotoxy(current+40,5);
    do {
       ch=getch();
       switch(ch) {
        //Extended Keys
        case -32:
            ch=getch();
                switch(ch) {
                    //Arrow right
                    case 77:
                        if(current!=end[row]){
                            current++;
                            col++;
                        }
                        gotoxy(current+39,5+row);
                    break;
                    //Arrow up
                    case 72:
                        if(row!=0){
                        row--;
                        }
                        gotoxy(39+end[row],5+row);
                        break;
                    //Arrow down
                    case 80:
                        if(row!=rowend){
                        row++;
                        }
                        gotoxy(39+end[row],5+row);
                    break;
                    //Arrow left
                    case 75:
                        if(current!=start){
                            current--;
                            col--;
                        }
                        gotoxy(current+39,5+row);
                    break;
                        //Home
                        case 71:
                        current=0;
                        col=0;
                        gotoxy(39+current,5+row);
                    break;
                        //End
                        case 79:
                        current=end[row];
                        col=e;
                        gotoxy(end[row]+39,5+row);
                    }
        break;
        //Enter
        case 13:
        c[row][col] = '\0';
        row++;
        rowend++;
        textattr(0x30);
        gotoxy(39,5+row);
        for(int i =0; i<40; i++) {
        printf(" ");
        }
        gotoxy(39,5+row);
        col=s;
        break;
        default:
            printf("%c", ch);
            c[row][col]=ch;
            col++;
            current++;
            if(col!=e) {
            e++;
            end[row]++;
            }
        break;

       }

    }while(ch!=27);

        row++;
        gotoxy(0, 10);
        textattr(0x07);
        printf("\n");
        printf("TThe printed array is: \n");

    for(r=0; r<row; r++) {
        for(cl=0; cl<31; cl++){
            if(c[r][cl]=='\0'){
                break;
            }else{
            printf("%c", c[r][cl]);
            }
        }
        printf("\n");
    }
    return 0;
}
