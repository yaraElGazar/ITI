#include <iostream>

using namespace std;

// Lab 2 - Task 1(complex with constructor)

class Complex {
    float img;
    float real;

public:
    Complex() {
    img=0;
    real=0;
    }

    Complex(float k, float m) {
    real=k;
    img=m;
    }

    Complex(float y) {
    img=y;
    real=y;
    }

    void setreal(float);
    float getreal();
    void setimg(float);
    float getimg();

    void print();

    ~Complex(){
    cout<<"I am Destructor! "<<endl;
    }
};

void add(Complex, Complex);
void add(Complex, float);
void add(float, Complex);
void add(Complex, Complex, Complex);


int main()
{
    Complex c1;
    Complex c2(5.1, 7.2);
    Complex c3(3.3);

    float n;
    float j=7;

    cout<<"Enter the real part for 1st complex: "<<endl;
    cin>>n;
    c1.setreal(n);
    cout<<"Enter the imagenary part for 1st complex: "<<endl;
    cin>>n;
    c1.setimg(n);

    cout<<"The first complex number is: "<<endl;
    c1.print();
    cout<<"The second complex number is: "<<endl;
    c2.print();
    cout<<"The third complex number is: "<<endl;
    c3.print();

    cout<<"------------------------Addition------------------------"<<endl;
    cout<<"The sum of c1 + c2 is: "<<endl;
    add(c1, c2);
    cout<<"The sum of j(7) + c2 is: "<<endl;
    add(j, c2);
    cout<<"The sum of c1 + j(7) is: "<<endl;
    add(c1, j);
    cout<<"The sum of c1 + c2 + c3 is: "<<endl;
    add(c1, c2, c3);


    return 0;
}

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

void add(Complex x1, Complex x2) {
    Complex result;
    result.setreal(x1.getreal()+x2.getreal());
    result.setimg(x1.getimg()+x2.getimg());
    result.print();

}
void add(Complex x1, float x2) {
    Complex result;
    result.setreal(x1.getreal()+x2);
    result.setimg(x1.getimg());
    result.print();

}
void add(float x1, Complex x2) {
    Complex result;
    result.setreal(x1+x2.getreal());
    result.setimg(x2.getimg());
    result.print();

}
void add(Complex x1, Complex x2, Complex x3) {
    Complex result;
    result.setreal(x1.getreal()+x2.getreal()+x3.getreal());
    result.setimg(x1.getimg()+x2.getimg()+x3.getimg());
    result.print();

}
