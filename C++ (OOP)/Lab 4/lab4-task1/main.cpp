#include <iostream>

using namespace std;

//Lab 4 - Task 1

class Complex {
    float img;
    float real;

public:

    //Default Constructor
    Complex() {
    img=0;
    real=0;
    }

    //Overloaded Constructors
    Complex(float k, float m) {
    real=k;
    img=m;
    }

    Complex(float y) {
    img=y;
    real=y;
    }

    //Methods Prototype
    void setreal(float);
    float getreal();
    void setimg(float);
    float getimg();
    void print();

    //Operators Prototype
    // Operator +
    Complex operator + (Complex);
    Complex operator + (float);
    friend Complex operator + (float, Complex);
    Complex operator ++();
    Complex operator ++(int);
    Complex operator +=(Complex);
    //Operator -
    Complex operator - (Complex);
    Complex operator - (float);
    friend Complex operator - (float, Complex);
    Complex operator --();
    Complex operator --(int);
    Complex operator -=(Complex);
    //Operator =
    Complex operator = (Complex);
    int operator == (Complex);
    int operator != (Complex);
    int operator > (Complex);
    int operator < (Complex);
    Complex operator * (Complex);
    operator float();


    //Destructor
    /*~Complex(){
    cout<<"I am Destructor! "<<endl;
    }*/
};

int main()
{
    Complex c1(2.2,3.3), c2(4.4,5.5), c3;
    float number = 5;

    cout<<"C1 is: "<<endl;
    c1.print();
    cout<<"C2 is: "<<endl;
    c2.print();


    /* Operator +
    cout<<"********************************** Operator + **********************************"<<endl;
    c3 = c1 + c2;
    cout<<"Sum of C1 and C2: "<<endl;
    c3.print();

    cout<<"********************************** Operator + ( Complex + float )**********************************"<<endl;
    c3 = c1 + number;
    cout<<"Sum of C1 and 5: "<<endl;
    c3.print();

    cout<<"********************************** Operator + ( float + Complex )**********************************"<<endl;
    c3 = number + c1;
    cout<<"Sum of 5 and C1: "<<endl;
    c3.print();

    cout<<"********************************** Operator ++ (Prefix) **********************************"<<endl;
    c3 = ++c1;
    cout<<"C3 = ++C1: "<<endl;
    c3.print();

    cout<<"********************************** Operator ++ (Postfix) **********************************"<<endl;
    c3 = c1++;
    cout<<"C3 = C1++: "<<endl;
    c3.print();
    c3 = c1++;
    c3.print();

    cout<<"********************************** Operator += **********************************"<<endl;
    c3 += c2;
    cout<<"C3 += C2: "<<endl;
    c3.print();



    // Operator -
    cout<<"------------------------------------ Operator - ------------------------------------"<<endl;
    c3 = c2 - c1;
    cout<<"Subtraction of C2 - C1: "<<endl;
    c3.print();

    cout<<"------------------------------------ Operator - ( Complex - float )------------------------------------"<<endl;
    c3 = c2 - number;
    cout<<"Subtraction of C2 - 5: "<<endl;
    c3.print();

    cout<<"------------------------------------ Operator - ( float - Complex )------------------------------------"<<endl;
    c3 = number - c2;
    cout<<"Subtraction of 5 - C2: "<<endl;
    c3.print();

    cout<<"------------------------------------ Operator -- (Prefix) ------------------------------------"<<endl;
    c3 = --c1;
    cout<<"C3 = --C1: "<<endl;
    c3.print();

    cout<<"------------------------------------ Operator -- (Postfix) ------------------------------------"<<endl;
    c3 = c1--;
    cout<<"C3 = C1--: "<<endl;
    c3.print();
    c3 = c1--;
    c3.print();

    cout<<"------------------------------------ Operator -= ------------------------------------"<<endl;
    c3 -= c2;
    cout<<"C3 -= C2: "<<endl;
    c3.print();
*/


    // Operator =
    cout<<"====================================== Operator = ======================================"<<endl;
    c3 = c1;
    cout<<"C3 = C1: "<<endl;
    c3.print();

    cout<<"====================================== Operator == ======================================"<<endl;
    cout<<"C3 == C1: "<<endl;
    if(c3 == c1) {
        cout<<"The 2 complex are equal"<<endl;
    }else{cout<<"The 2 complex are not equal"<<endl;}

    cout<<"====================================== Operator != ======================================"<<endl;
    cout<<"C3 != C1: "<<endl;
    if(c3 != c1) {
        cout<<"The 2 complex are not equal"<<endl;
    }else{cout<<"The 2 complex are  equal"<<endl;}

    cout<<"====================================== Operator > ======================================"<<endl;
    cout<<"C3 > C2: "<<endl;
    if(c3 > c2) {
        cout<<"C3 is greater than C2"<<endl;
    }else{cout<<"C3 is less than C2"<<endl;}

    cout<<"====================================== Operator < ======================================"<<endl;
    cout<<"C3 < C2: "<<endl;
    if(c3 < c2) {
        cout<<"C3 is less than C2"<<endl;
    }else{cout<<"C3 is greater than C2"<<endl;}

    cout<<"====================================== Operator * ======================================"<<endl;
    cout<<"C1 * C2: "<<endl;
    c3 = c1 * c2;
    c3.print();

    cout<<"====================================== Cast float ======================================"<<endl;
    cout<<"(int)C1: "<<endl;
    float z;
    z=(float)c1;
    cout<<z<<endl;



    return 0;
}

//Methods Implementation

void Complex::setreal(float r) {
    real = r;
}

float Complex::getreal() {
    return real;
}

void Complex::setimg(float i) {
    img = i;
}
float Complex::getimg() {
    return img;
}

void Complex::print() {
    //cout<<"The complex number is: "<<endl;
    if(real==0 && img!=0){
        cout<<img<<"i"<<endl;
    }else if(img==0) {
        cout<<real<<endl;
    }else if(img==1) {
        cout<<real<<"+"<<"i"<<endl;
    }else if(img==-1) {
        cout<<real<<"-i"<<endl;
    }else if(real>0 && img>0){
        cout<<real<<"+"<<img<<"i"<<endl;
    }else if((real<0 || real>0) && img<0) {
        cout<<real<<img<<"i"<<endl;
    }else if(real<0 && img>0) {
        cout<<real<<"+"<<img<<"i"<<endl;
    }
}

//Operators Implementation

// Operator + (Complex + Complex)
Complex Complex::operator + (Complex c) {
    Complex result;
    result.real = real + c.real;
    result.img = img + c.img;

    return result;
}

// Operator + (Complex + number)
Complex Complex::operator + (float n) {
    Complex result;
    result.real = real + n;
    result.img = img;

    return result;
}

// Operator + (number + Complex)
Complex operator + (float n, Complex c) {
    Complex result;
    result.real = c.real + n;
    result.img = c.img;

    return result;
}

// Operator ++ Prefix
Complex Complex::operator ++ () {
    real++;
    return *this;
}

// Operator ++ Postfix
Complex Complex::operator ++ (int n) {
    Complex temp = *this;
    real++;
    return temp;
}

// Operator +=
Complex Complex::operator += (Complex c) {
    real = real + c.real;
    img = img + c.img;
    return *this;
}
//---------------------------------------------------------------------------------------------------------------
// Operator - (Complex - Complex)
Complex Complex::operator - (Complex c) {
    Complex result;
    result.real = real - c.real;
    result.img = img - c.img;

    return result;
}

// Operator - (Complex - number)
Complex Complex::operator - (float n) {
    Complex result;
    result.real = real - n;
    result.img = img;

    return result;
}

// Operator - (number - Complex)
Complex operator - (float n, Complex c) {
    Complex result;
    result.real = n - c.real;
    result.img = c.img;

    return result;
}

// Operator -- Prefix
Complex Complex::operator -- () {
    real--;
    return *this;
}

// Operator -- Postfix
Complex Complex::operator -- (int n) {
    Complex temp = *this;
    real--;
    return temp;
}

// Operator -=
Complex Complex::operator -= (Complex c) {
    real = real - c.real;
    img = img - c.img;
    return *this;
}

//=================================================================================================================
// Operator =
Complex Complex::operator = (Complex c) {
    real = c.real;
    img = c.img;
    return *this;
}
// Operator ==
int Complex::operator == (Complex c) {
    return ((real == c.real) && (img == c.img));
}
// Operator !=
int Complex::operator != (Complex c) {
    return ((real != c.real) && (img != c.img));
}
// Operator >
int Complex::operator > (Complex c) {
    if(real > c.real){
        return 1;
    }else if(real == c.real && img > c.img) {
        return 1;
    }else{
        return 0;
    }
}
// Operator <
int Complex::operator < (Complex c) {
    if(real < c.real){
        return 1;
    }else if(real == c.real && img < c.img) {
        return 1;
    }else{
        return 0;
    }
}
// Operator *
Complex Complex::operator * (Complex c) {
    Complex result;
    result.real = real*c.real - img*c.img;
    result.img = real*c.img + img*c.real;

    return result;
}

// Casting
    Complex::operator float() {
        return real;
    }
