#include <iostream>
#include <Queue.h>
using namespace std;

// Queue using Circular Array

int main()
{
    Queue myQueue(6); // Queue object of size 6

    myQueue.Enqueue(3);
    myQueue.Enqueue(5);
    myQueue.Enqueue(7);
    myQueue.Enqueue(11);
    myQueue.Enqueue(13);
    myQueue.Enqueue(15);


    myQueue.Display();
cout<<"----------------"<<endl;
    int num;

    myQueue.Dequeue(num);
    cout<<num <<" is deleted"<<endl;
    myQueue.Dequeue(num);
    cout<<num <<" is deleted"<<endl;
    myQueue.Dequeue(num);
    cout<<num <<" is deleted"<<endl;

    myQueue.Display();

    myQueue.Enqueue(1);
    myQueue.Enqueue(2);
    myQueue.Enqueue(3);

    myQueue.Display();

    cout<<endl;
    myQueue.Dequeue(num);
    cout<<num <<" is deleted"<<endl;

    myQueue.Display();
    return 0;
}
