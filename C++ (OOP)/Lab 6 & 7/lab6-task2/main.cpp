#include <iostream>

// Lab 6 - Task 2 (Template)

using namespace std;

template<class T>
class Stack {

int top;
int Size;

T*ptr;

static int counter;

public:
    // Default Constructor
    Stack(){
    top = 0;
    Size = 0;
    ptr = new T [Size];
    counter++;
    }
    // Overloaded Constructor
    Stack(int n){
    top = 0;
    Size = n;
    ptr = new T [Size];
    counter++;
    }
    // Destructor
    ~Stack() {
    delete []ptr;
    counter--;
    }
    // Methods
    static int getCounter() {
    return counter;
    }
    Stack(Stack&);
    void push(T);
    T pop();
    Stack& operator=(Stack&);
    friend void viewContent(Stack<T>);

};

int main()
{
Stack<int> s1(5);
s1.push(1);
s1.push(2);
s1.push(3);
s1.push(4);

int x = s1.pop();
cout<<"Last item in S1 is: "<<x<<endl;

Stack<char> s2(5);
s2.push('a');
s2.push('b');
s2.push('c');
s2.push('d');

char c = s2.pop();
cout<<"Last item in S2 is: "<<c<<endl;


    return 0;
}

// Methods Implementation

// Counter
template<class T>
int Stack<T>::counter=0;

// Copy Constructor
template<class T>
Stack<T>::Stack(Stack<T>&myS) {
    top = myS.top;
    Size = myS.Size;
    for (int i; i<top; i++) {
        ptr[i] = myS.ptr[i];
    }
    counter++;
}

// Push
template<class T>
void Stack<T>::push(T n) {
    if(top==Size) {
        cout<<"The stack is full!"<<endl;
    }else{
        ptr[top] = n;
        top++;
    }
}

template<class T>
T Stack<T>::pop() {
    T returnValue=0;
    if(top==0) {
        cout<<"Stack is empty!"<<endl;
    }else{
    top--;
    returnValue=ptr[top];
    }
    return returnValue;
}

template<class T>
void viewContent(Stack <T> s) {
    T n = s.top;
    for(int i =0; i<n; i++) {
        cout<<s.ptr[i]<<endl;
    }
}

// Overload = operator
template<class T>
Stack<T> & Stack<T> :: operator = (Stack &s) {
    delete(ptr);

    top = s.top;
    Size = s.Size;
    ptr = new T[Size];
    for (int i = 0; i<top; i++) {
        ptr[i] = s.ptr[i];
    }
    return *this;
}
