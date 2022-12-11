#include <stdio.h>
#include <stdlib.h>

int main()
{
/*Task 4: Count length of the string*/
    char letter;
    char word[6];
    int sum=0;
    do{
    printf("Please enter a character \n");
    letter = getche();
    word[sum] = letter;
    printf("\n");
    sum+=1;
    }while(letter!='\0' && letter!=13 &&sum<5);
    printf("The word is %s \n", word);
    return 0;
}
