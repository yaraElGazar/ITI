#include <iostream>

using namespace std;

//Lab 3 - Task 4b (View Content Pass by value - Friend Function)

class Stack {
    int *stptr;
    int top;
    int Size;

public:
    //Default Constructor
    Stack() {
    top=0;
    Size=5;
    stptr=new int[Size];
    cout<<"*********I am a default constructor!*********"<<endl;
    }

    //Parameterized Constructor
    Stack(int s) {
    top=0;
    Size=s;
    stptr=new int[Size];
    cout<<"*********I am a parameterized constructor!*********"<<endl;
    }

    //Destructor
    ~Stack() {
    delete stptr;
    cout<<"*********I am a destructor!*********"<<endl;
    }

    //Methods Signature
    void push(int);
    int pop();
    int getTop();
    friend void viewContent(Stack);

};


int main()
{
    int i, n;
    Stack s1;

    cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"<<endl;
    cout<<"Enter items for stack 1 (size = 5): "<<endl;
    for(i=0; i<6; i++){
        cout<<"Enter item: "<<(i+1)<<endl;
        cin>>n;
        s1.push(n);
    }


    cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"<<endl;
    cout<<"Calling view content:"<<endl;
    viewContent(s1);

    cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"<<endl;
    cout<<"The popping numbers after view content are: "<<endl;
    for(i=0; i<6; i++){
        cout<<s1.pop()<<endl;
    }

    return 0;
}

void Stack::push(int n) {
    if(top==Size) {
        cout<<"The stack is full!"<<endl;
    }else{
        stptr[top] = n;
        top++;
    }
}

int Stack::pop() {
    int returnValue=0;
    if(top==0) {
        cout<<"Stack is empty!"<<endl;
    }else{
    top--;
    returnValue=stptr[top];
    }
    return returnValue;
}

int Stack::getTop() {
    return top;
}

void viewContent(Stack s) {
    int n = s.top;
    for(int i =0; i<n; i++) {
        cout<<s.stptr[i]<<endl;
    }
}




