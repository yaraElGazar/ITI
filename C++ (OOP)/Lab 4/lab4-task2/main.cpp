#include <iostream>

using namespace std;

//Lab 4 - Task 2


class Stack {
    int *stptr;
    int top;
    int Size;

public:
    Stack() {
    top=0;
    Size=5;
    stptr=new int[Size];
    //cout<<"*********I am a default constructor!*********"<<endl;
    }

    Stack(int s) {
    top=0;
    Size=s;
    stptr=new int[Size];
    //cout<<"*********I am a parameterized constructor!*********"<<endl;
    }

    void push(int);
    int pop();
    int getTop();
    friend void viewContent(Stack &);

    // Operators Methods
    Stack & operator = (Stack &);
    int & operator [] (int) ;

    ~Stack() {
    delete stptr;
    //cout<<"*********I am a destructor!*********"<<endl;
    }
};

int main()
{
    int i;
    Stack S1, S2;

    S1.push(1);
    S1.push(2);
    S1.push(3);
    S1.push(4);
    S1.push(5);

    S2 = S1;

    cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"<<endl;
    cout<<"S1:"<<endl;
    viewContent(S1);
    cout<<"S2:"<<endl;
    viewContent(S2);
    cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"<<endl;
    cout<<"S1[2]: "<<endl;
    int x = S1[2];
    cout<<x<<endl;
    cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"<<endl;
    cout<<"S1[2]=33 "<<endl;
    S1[2]=33;
    cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"<<endl;
    cout<<"S1:"<<endl;
    viewContent(S1);


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

void viewContent(Stack &s) {
    int n = s.top;
    for(int i =0; i<n; i++) {
        cout<<s.stptr[i]<<endl;
    }
}

// Overload = operator
Stack & Stack :: operator = (Stack &s) {
    delete(stptr);

    top = s.top;
    Size = s.Size;
    stptr = new int[Size];
    for (int i = 0; i<top; i++) {
        stptr[i] = s.stptr[i];
    }
    return *this;
}

// Overload [] operator
int& Stack :: operator [] (int n) {

    return stptr[n];
}

