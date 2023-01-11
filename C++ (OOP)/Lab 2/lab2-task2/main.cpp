#include <iostream>

using namespace std;

// Lab 2 - Task 2(Simulation of stack memory)

class Stack {
    int st[5];
    int top;

public:
    Stack() {
    top=0;
    }

    void push(int);
    int pop();
};

int main()
{
    int n;

    Stack s;
    cout<<"Enter the first item: "<<endl;
    cin>>n;
    s.push(n);
    cout<<"Enter the second item: "<<endl;
    cin>>n;
    s.push(n);
    cout<<"Enter the third item: "<<endl;
    cin>>n;
    s.push(n);
    cout<<"Enter the fourth item: "<<endl;
    cin>>n;
    s.push(n);
    cout<<"Enter the fifth item: "<<endl;
    cin>>n;
    s.push(n);
    cout<<"Enter the sixth item: "<<endl;
    cin>>n;
    s.push(n);

    cout<<s.pop()<<endl;
    cout<<s.pop()<<endl;
    cout<<s.pop()<<endl;
    cout<<s.pop()<<endl;
    cout<<s.pop()<<endl;
    cout<<s.pop()<<endl;

    return 0;
}

void Stack::push(int n) {
    if(top==5) {
        cout<<"The stack is full!"<<endl;
    }else{
        st[top] = n;
        top++;
    }
}

int Stack::pop() {
    int returnValue=0;
    if(top==0) {
        cout<<"Stack is empty!"<<endl;
    }else{
    top--;
    returnValue=st[top];
    }
    return returnValue;
}
