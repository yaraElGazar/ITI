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

int main()
{
    int s;
    int row = 1;
    int i;

    printf("Enter the size \n");
    scanf("%d", &s);
    int col = (s+1)/2;

    if (s%2 != 0) {
    for (i = 1; i <= (s*s); i++) {
        gotoxy(col*4, row*4);
        printf("%d", i);

        if (i%s == 0) {
           row++;
        }else{
            row--;
            col--;
        }

        if (col<=0) {
            col = s;
        }
        if (row<=0) {
            row = s;
        }
        if (row>s) {
            row = 1;
        }
        if (col>s) {
            col = 1;
        }
        }




    }else{printf("Please enter an odd number.");}
}
