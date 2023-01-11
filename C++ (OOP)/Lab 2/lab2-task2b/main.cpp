#include <iostream>

using namespace std;

// Lab 2 - Task 2b(Simulation of stack memory with dynamic allocation)

class Stack {
    int *stptr;
    int top;
    int size;

public:
    Stack() {
    top=0;
    size=10;
    stptr=new int[size];
    cout<<"*********I am a default constructor!*********"<<endl;
    }

    Stack(int s) {
    top=0;
    size=s;
    stptr=new int[size];
    cout<<"*********I am a parameterized constructor!*********"<<endl;
    }

    ~Stack() {
    delete stptr;
    cout<<"*********I am a destructor!*********"<<endl;
    }

    void push(int, int);
    int pop();
};

int main()
{
    int n, i, length;
    Stack s1;

    cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"<<endl;
    cout<<"Enter items for stack 1 (size = 5): "<<endl;
    for(i=0; i<6; i++){
        cout<<"Enter item: "<<(i+1)<<endl;
        cin>>n;
        s1.push(n, 5);
    }

    cout<<"The popping numbers are: "<<endl;
    for(i=0; i<6; i++){
        cout<<s1.pop()<<endl;
    }

    cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"<<endl;
    cout<<"Enter the size of stack 2: "<<endl;
    cin>>length;
    Stack s2(length);

    for(i=0; i<(length+1); i++){
        cout<<"Enter item: "<<(i+1)<<endl;
        cin>>n;
        s2.push(n, length);
    }

    cout<<"The popping numbers are: "<<endl;
    for(i=0; i<(length+1); i++){
        cout<<s2.pop()<<endl;
    }




    return 0;
}

void Stack::push(int n, int size) {
    if(top==size) {
        cout<<"The stack is full!"<<endl;
    }else{
        *stptr = n;
        top++;
        stptr++;
    }
}

int Stack::pop() {
    int returnValue=0;
    if(top==0) {
        cout<<"Stack is empty!"<<endl;
    }else{
    top--;
    stptr--;
    returnValue=*stptr;
    }
    return returnValue;
}

