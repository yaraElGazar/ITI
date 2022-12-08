#include <iostream>
#include<Stack.h>

using namespace std;

int main()
{
    Stack myStack;

    myStack.Push(3);
    myStack.Push(5);
    myStack.Push(7);
    myStack.Push(11);
    myStack.Push(13);

    myStack.Display();
cout<<"----------------"<<endl;
    int num;

    myStack.Pop(num);
    cout<<num<<" was deleted from the Stack"<<endl;
    myStack.Pop(num);
    cout<<num<<" was deleted from the Stack"<<endl;

    cout<<"----------------"<<endl;
    myStack.Display();

    /*while(myStack.Pop(num))
    {
        cout<<num<<" was deleted from the Stack"<<endl;
    }*/

    return 0;
}
