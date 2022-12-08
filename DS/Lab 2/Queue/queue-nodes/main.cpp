#include <iostream>
#include<Queue.h>
using namespace std;

int main()
{
    Queue myQueue;

    myQueue.Enqueue(3);
    myQueue.Enqueue(5);
    myQueue.Enqueue(7);
    myQueue.Enqueue(11);
    myQueue.Enqueue(13);

    myQueue.Display();
cout<<"----------------"<<endl;
    int num;

    myQueue.Dequeue(num);
    cout<<num<<" was deleted from the Stack"<<endl;
    myQueue.Dequeue(num);
    cout<<num<<" was deleted from the Stack"<<endl;

    cout<<"----------------"<<endl;
    myQueue.Display();

   /* while(myQueue.Dequeue(num))
    {
        cout<<num<<" was deleted from the Queue"<<endl;
    }*/

    return 0;
}
