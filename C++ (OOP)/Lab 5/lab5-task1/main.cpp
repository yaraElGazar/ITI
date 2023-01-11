#include <iostream>
#include "graphics.h"

using namespace std;

class Point {
    int x;
    int y;

public:
    // Default Constructor
    Point() {
    x=y=0;
    }
    // Overloaded Constructor
    Point(int m, int n) {
    x=m;
    y=n;
    }
    Point(int v) {
    x=y=v;
    }
    // Copy Constructor
    Point (Point &myPoint) {
    x=myPoint.x;
    y=myPoint.y;
    }

    // Methods
    void setx(int m) {
        x=m;
    }
    void sety(int n) {
        y=n;
    }
    int getx() {
        return x;
    }
    int gety() {
        return y;
    }
};

class Circle {
    Point center;
    int rad;

public:
    // Default Constructor
    Circle() {
    rad = 0;
    }

    // Overloaded Constructor
    Circle(int x, int y, int r):center(x, y) {
        rad = r;
    }
    // Takes Point as parameter
    Circle(Point p, int r):center(p) {
        rad = r;
    }
    // Methods
    void draw() {
        circle(center.getx(), center.gety(), rad);
    }
    void setrad(int r) {
        rad = r;
    }
    int getrad() {
        return rad;
    }
    void setcenter(int x1, int y1) {
        center.setx(x1);
        center.sety(y1);
    }
    Point getcenter() {
        Point p = center;
        return p;
    }

};

class Rec {
    Point UL;
    Point LR;

public:
    // Default Constructor
    Rec(){};
    // Overloaded Constructor
    Rec(int x1, int y1, int x2, int y2):UL(x1, y1), LR(x2, y2){};
    // Takes Point as parameter
    Rec(Point p1, Point p2):UL(p1), LR(p2){};
    // Methods
    void draw() {
    rectangle(UL.getx(), UL.gety(), LR.getx(), LR.gety());
    }
    void setUL(int x1, int y1) {
    UL.setx(x1);
    UL.sety(y1);
    }
    void setLR(int x1, int y1) {
    LR.setx(x1);
    LR.sety(y1);
    }
    Point getULp() {
    Point p = UL;
    return p;
    }
    Point getLRp() {
    Point p = LR;
    return p;
    }
    // Another way (By Reference)
    void getUL(int &x, int &y) {
    x = UL.getx();
    y= UL.gety();
    }
    void getLR(int &x, int &y) {
    x = LR.getx();
    y= LR.gety();
    }

};

class Line {
    Point pa;
    Point pb;

public:
    // Default Constructor
    Line(){};
    // Overloaded Constructor
    Line(int x1, int y1, int x2, int y2):pa(x1, y1), pb(x2, y2){};
    // Takes Point as parameter
    Line(Point P1, Point P2):pa(P1), pb(P2){};
    // Methods
    void draw() {
    line(pa.getx(), pa.gety(), pb.getx(), pb.gety());
    }
    void setpa(int x1, int y1) {
    pa.setx(x1);
    pa.sety(y1);
    }
    void setpb(int x1, int y1) {
    pb.setx(x1);
    pb.sety(y1);
    }
    Point getpa() {
    Point p = pa;
    return p;
    }
    Point getpb() {
    Point p = pb;
    return p;
    }
    // Another way (By Reference)
    void getpa(int &x, int &y) {
    x = pa.getx();
    y= pa.gety();
    }
    void getpb(int &x, int &y) {
    x = pb.getx();
    y= pb.gety();
    }

};

int main()
{

initgraph();

// Circle
Circle c1, c2(500, 550, 40);
c2.draw();

// Rectangle
Rec r1, r2(200, 300, 150, 150);
r2.draw();

// Line
Line l1, l2(250, 250, 350, 350);
l2.draw();

// Case using Copy Constructor
Point p(100, 130);
Point k(200, 260);
Circle c3(p, 60);
Rec r3(p, k);
Line l3(p, k);

// Case setters and getters
c2.setcenter(100, 200);
cout<<"x of center c2 is "<<(c2.getcenter()).getx()<<" and y is "<<(c2.getcenter()).getx()<<endl; //100 & 200
r2.setUL(200, 400);
int n1, n2;
r2.getUL(n1, n2);
cout<<"x of UL is "<<n1<<" and y is "<<n2<<endl;//200 & 400

    return 0;
}


