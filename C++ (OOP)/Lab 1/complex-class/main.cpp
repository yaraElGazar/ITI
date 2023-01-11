#include <iostream>

using namespace std;

class Complex {
    float img;
    float real;

public:
    void setreal(float);
    float getreal();
    void setimg(float);
    float getimg();

    void print();
};

void add(Complex, Complex);

int main()
{
    Complex c1;
    Complex c2;
    float n;

    cout<<"Enter the real part for 1st complex: "<<endl;
    cin>>n;
    c1.setreal(n);
    cout<<"Enter the imagenary part for 1st complex: "<<endl;
    cin>>n;
    c1.setimg(n);
    c1.print();

    cout<<"Enter the real part for 2nd complex: "<<endl;
    cin>>n;
    c2.setreal(n);
    cout<<"Enter the imagenary part for 2nd complex: "<<endl;
    cin>>n;
    c2.setimg(n);
    c2.print();

    add(c1, c2);

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

void add(Complex x1, Complex x2) {
    Complex result;
    result.setreal(x1.getreal()+x2.getreal());
    result.setimg(x1.getimg()+x2.getimg());
    cout<<"The sum is: "<<endl;
    result.print();

}
