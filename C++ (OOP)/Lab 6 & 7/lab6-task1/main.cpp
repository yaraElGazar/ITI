#include <iostream>
#include "graphics.h"

// Lab 6 - Task 1 (Draw Picture)

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
        setcolor(10);
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
    setcolor(11);
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
    setcolor(12);
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

class Picture {
int cnum;
int rnum;
int lnum;
Circle *pcircles;
Rec *precs;
Line *plines;

public:
    Picture() {
        cnum = rnum = lnum = 0;
        pcircles = NULL;
        precs = NULL;
        plines = NULL;
        };
    Picture(Circle *pc, Rec *pr, Line *pl, int cn, int rn, int ln) {
        cnum = cn;
        rnum = rn;
        lnum = ln;
        pcircles = pc;
        precs = pr;
        plines = pl;
    }

        // Methods
        void setRecs(Rec *pr, int m) {
        precs = pr;
        rnum = m;
        }
        void setCircles(Circle *pc, int m) {
        pcircles = pc;
        cnum = m;
        }
        void setLines(Line *pl, int m) {
        plines = pl;
        lnum = m;
        }
        void paint();

};

int main()
{
initgraph();

Picture myPic;

Circle c1(50, 50, 50), c2(200,100,50), c3(420, 50, 50);
Rec r1(50, 50, 50, 50), r2(200,100,50, 50), r3(420, 50, 50, 50);
Line l1(420, 50, 300, 200), l2(420,50,50, 300), l3(40, 400, 50, 500);

Circle cArr[3] = {c1, c2, c3};
Rec rArr[3] = {r1, r2, r3};
Line lArr[3] = {l1, l2, l3};

myPic.setCircles(cArr, 3);
myPic.setRecs(rArr, 3);
myPic.setLines(lArr, 3);
myPic.paint();



    return 0;
}

void Picture::paint() {
    int i;
    for (i=0; i<cnum; i++) {
        pcircles[i].draw();
    }
    for (i=0; i<rnum; i++) {
        precs[i].draw();
    }
    for (i=0; i<lnum; i++) {
        plines[i].draw();
    }
}
