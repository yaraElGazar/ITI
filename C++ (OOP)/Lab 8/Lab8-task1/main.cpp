#include <iostream>

// Lab 8 - Task 1 (Geoshape Protected and Private Inheritance)

using namespace std;

class Geoshape {
protected:
    float dim1, dim2;
public:
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
    float calcArea(){
        return 0.0;
    }

};

class Circle:private Geoshape {//***************************************************  Private  **********************************************
    public:
    // Default Constructor
    Circle(){}
    Circle(float r):Geoshape(r) {}

    float calcArea() {
    return 3.14*dim1*dim2;
    }

};
/*class Circlechild:public Circle {// ****************************** Child of Circle Cannot access Geoshape *************************************
    public:
    // Default Constructor
    Circlechild(){}
    Circlechild(float r):Geoshape(r) {} // Error can not access Geoshape

    float calcArea() {
    return 3.14*dim1*dim2;
    }

};*/

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
    public:
    // Default Constructor
    Triangle(){}
    Triangle(float b, float h):Geoshape(b,h) {}

    float calcArea() {
    return 0.5*dim1*dim2;
    }

};

class Square:protected Rect { //***************************************************  Protected  **********************************************
    public:
    // Default Constructor
    Square(){}
    Square(float s):Rect(s,s) {}
    // Override calcArea because of protected inheritance the compiler cannot access base members so we need to override it in the driven class
    float calcArea() {
    return dim1*dim2;
    }
};

int main()
{
    Triangle t(20, 10);
    float tArea = t.calcArea();//100
    cout<<"The area of triangle is: "<<tArea<<endl;
    Rect r(20, 10);
    float rArea = r.calcArea();//200
    cout<<"The area of rectangle is: "<<rArea<<endl;
    Circle c(20);
    float cArea = c.calcArea();//1256
    cout<<"The area of circle is: "<<cArea<<endl;
    Square s(20);
    float sArea = s.calcArea();//400
    cout<<"The area of square is: "<<sArea<<endl;

    /*Circlechild c2(20);
    float cAreachild = c2.calcArea();
    cout<<"The area of circle child is: "<<cAreachild<<endl;*/
    return 0;
}
