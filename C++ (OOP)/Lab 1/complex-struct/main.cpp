#include <iostream>

using namespace std;

struct complex {
    float img;
    float real;

    void setreal(float);
    float getreal();
    void setimg(float);
    float getimg();

    void print();
};

int main()
{
    complex c1;
    complex c2;

    cout<<"Enter the real part for 1st complex: "<<endl;
    cin>>c1.real;
    cout<<"Enter the imagenary part for 1st complex: "<<endl;
    cin>>c1.img;
    c1.print();

    return 0;
}

void complex::setreal(float r) {
    real = r;
}

float complex::getreal() {
    return real;
}

void complex::setimg(float i) {
    img = i;
}
float complex::getimg() {
    return img;
}

void complex::print() {
    cout<<"The complex number is: "<<endl;
    if(real==0){
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
