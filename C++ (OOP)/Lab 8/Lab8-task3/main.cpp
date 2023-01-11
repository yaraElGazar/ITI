#include <iostream>

// Lab 8 - Task 3 (Complex overload cin and cout)

using namespace std;

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

    friend ostream& operator << (ostream&, Complex);
    friend istream& operator >> (istream&, Complex&);

    void print();

    ~Complex(){
    //cout<<"I am Destructor! "<<endl;
    }
};


int main()
{
    Complex c1(5, 7.1);
    Complex c2;

    cout<<"C1 is: "<<c1<<endl;
    cout<<"Enter the parts for c2: "<<endl;
    cin>>c2;
    cout<<"C2 is: "<<c2<<endl;

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
    cout<<"The complex number is: "<<endl;
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

// Cout overload
ostream& operator << (ostream &myStream, Complex c) {
    myStream<<"("<<c.real<<" + i"<<c.img<<")";
    return myStream;
}

// Cin overload
istream& operator >> (istream &myStream, Complex &c) {
    cout<<"Enter the real part: ";
    myStream>>c.real;
    cout<<"Enter the imaginary part: ";
    myStream>>c.img;
    return myStream;
}

