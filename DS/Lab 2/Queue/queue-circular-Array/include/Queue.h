#ifndef QUEUE_H
#define QUEUE_H

using namespace std;

// Queue using Circular Array

class Queue
{
    int Front, Rear, Size;
    int *items;

    public:
        Queue(int Size)
        {
            this -> Size = Size;
            Front = Rear = -1;
            items = new int[Size];
        }

        void Enqueue(int data)
        {
            // The Queue is full
            if(Front == Rear + 1 || Rear == Size - 1)
            {
                //Go back to the start of the Queue
                Rear = 0;
                items[Rear] = data;
            }
            // Queue is empty
            else if (Front == -1 && Rear == -1)
            {
                Front++;
                Rear++;
                items[Rear] = data;
            }
            else
            {
                Rear++;
                items[Rear] = data;
            }
        }

        int Dequeue(int &num)
        {
            // If the Queue is empty
            if (Front == -1 && Rear == -1)
            {
                return 0; //Failure
            }
            // Last element in the Queue
            else if (Front == Rear)
            {
                num = items[Front]; // Saving the value of the popped element
                Front = Rear = -1; // Queue is empty now
            }
            else
            {
                num = items[Front]; // Saving the value of the popped element
                if(Front == Size - 1)
                {
                    Front = 0;
                }
                else
                {
                    Front++;
                }
            }
        }

        void Display()
        {
            if (Front <= Rear)
            {
                for (int i = Front; i < Rear+1; i++)
                {
                    cout<<items[i]<<" ";
                }
            cout<<endl;
            }
            else
            {
                int i = Front;
                while (i < Size)
                {
                    cout<<items[i]<<" ";
                    i++;

                }
                i = 0;
                while (i <= Rear)
                {
                    cout<<items[i]<<" ";
                    i++;

                }
            }

        }

    protected:

    private:
};

#endif // QUEUE_H
