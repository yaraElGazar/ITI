#include <iostream>

// Lab 8 - Task 2 (Rule 1, 2, and 3 - Virtual functions)

using namespace std;

class Geoshape {
protected:
    float dim1, dim2;
public:
    int x;
    // Default constructor
    Geoshape(){
    dim1=0;
    dim2=0;
    }
    // Overload Constructor
    Geoshape(float n){
    dim1=n;
    dim2=n;
    }
    Geoshape(float x, float y){
    dim1=x;
    dim2=y;
    }
    // Methods
    void setdim1(float d) {
        dim1 = d;
    }
    void setdim2(float d) {
        dim2 = d;
    }
    float getdim1() {
        return dim1;
    }
    float getdim2() {
        return dim2;
    }
    virtual float calcArea(){//********************************************     Virtual Function    ***********************************************
                            // Call the derived function, if we did not use virtual, compiler will call the calcArea function of the pointer type
                            // which is Geoshape in this case -- If we don't use virtual keyword the result will be 0 (return 0) from calcArea of Geoshape
        return 0.0;
    }
    void f() {
    cout<<"I'm F in Base !"<<endl;
    }
    virtual void v() {
    cout<<"I'm v in Base !"<<endl;
    }
    void my_method() {
    cout<<"I'm my_method in Base !"<<endl;
    }

};

class Circle:public Geoshape {
    public:
    // Default Constructor
    Circle(){}
    Circle(float r):Geoshape(r) {}

    float calcArea() {
    return 3.14*dim1*dim2;
    }

};

class Rect:public Geoshape {
    public:
    // Default Constructor
    Rect(){}
    Rect(float l, float w):Geoshape(l,w) {}

    float calcArea() {
    return dim1*dim2;
    }

};

class Triangle:public Geoshape {
    int y;
    public:
    // Default Constructor
    Triangle(){}
    Triangle(float b, float h):Geoshape(b,h) {}

    float calcArea() {
    return 0.5*dim1*dim2;
    }
    void f() {
    cout<<"I'm F in derived !"<<endl;
    }
    void v() {
    cout<<"I'm v in derived !"<<endl;
    }
    void t() {
    cout<<"I'm t in derived !"<<endl;
    }


};

class Square:public Rect {
    public:
    // Default Constructor
    Square(){}
    Square(float s):Rect(s,s) {}
};

class absClass {//**************************************************     Abstract Class    *****************************************************
public:
    virtual float f() = 0; // Pure virtual
};
class absClassChild {//**************************************************     Abstract Class    *****************************************************
public:
    virtual float f(){
        cout<<"I am child of abstract class"<<endl;
    }
};

float SumofGeoAreas(Geoshape *, Geoshape *, Geoshape *);

int main()
{
    Geoshape *p;
    Circle c(10);
    Rect r(3,5);
    Square s(7);
    Triangle t(10, 20);

    // Rule 1: A pointer of a base class can point to the address of an object of derived class.
    cout<<"____________________________________ Rule 1 ____________________________________ "<<endl;
    p = &c; // Saves the address of the circle object (c) in the Geoshape pointer (p)
    cout<<"The area of circle is: "<<p -> calcArea()<<endl; // Calls calcArea of circle, result = 314
    p = &r;// Saves the address of the rectangle object (r) in the Geoshape pointer (p)
    cout<<"The area of rectangle is: "<<p -> calcArea()<<endl; // Calls calcArea of rectangle, result = 15
    p = &s;// Saves the address of the square object (s) in the Geoshape pointer (p)
    cout<<"The area of square is: "<<p -> calcArea()<<endl; // Calls calcArea of square, result = 49

    // Rule 2: A pointer of a base class can call overriden methods of derived class if the original method in Base class was declared virtual
    // Generic function (Dynamic Binding)
    cout<<"____________________________________ Rule 2 ____________________________________ "<<endl;
    cout<<"The total area of the 3 shapes is: "<<SumofGeoAreas(&c, &r, &s)<<endl;

    // Rule 3: A pointer of base class can access only the variables and methods that were originally declared in the base class and then inherited
    // and overriden by derived class
    cout<<"____________________________________ Rule 3 ____________________________________ "<<endl;
    p = &t; // Savs the address of triangle object (t) in the Geoshape pointer (p)
    p -> x=3; // Changes in base (does not exist in triangle class)
    int vx = p -> x;
    cout<<"The value of x in base class is: "<<vx<<endl;
    //p -> y=7; // Error: class Geoshape has no member named y
    p -> f(); // Calls f() function from base class (not virtual)
    p -> v(); // Calls v() function from triangle class (virtual keyword is used)
    //p -> t(); // Error: class Geoshape has no member named t
    p -> my_method(); // Calls my_method() in base because it does not exist in derived class

    cout<<"____________________________________ Abstract class ____________________________________ "<<endl;
    //absClass ac; // Error: Can not declare variable ac to be of abstract type 'absClass'
    absClass *ac;
    absClassChild acc;
    acc.f(); // Overriden pure virtual function




    return 0;
}

// Standalone function that calculates the sum of shapes' area
float SumofGeoAreas(Geoshape *g1, Geoshape *g2, Geoshape *g3) {
    return g1 -> calcArea() + g2 -> calcArea() + g3 -> calcArea();
}
