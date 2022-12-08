#ifndef QUEUE_H
#define QUEUE_H

#include<Node.h>
using namespace std;

// Queue using Nodes

class Queue
{
    Node *Front, *Rear;
    public:
        Queue()
        {
            Front = Rear = NULL; // Queue is empty
        }

        void Enqueue (int data)
        {
            // If Queue is empty
            if(Front == NULL && Rear == NULL)
            {
                // Create new Node
                Node *newNode = new Node(data);
                Front = Rear = newNode; // First and last node
            }
            else
            {
                Node *newNode = new Node(data);
                // Add new Node to the Queue
                Rear -> Next = newNode;
                // Change tail to the new Node
                Rear = newNode;
            }


        }

        int Dequeue (int &num)
        {
            // Create pointer for deleting
            Node *deletePtr = Front;

            // If Queue is empty
            if (Front == NULL && Rear == NULL)
            {
                return 0; // Failure
            }
            // If only one element exists in the Queue
            else if (Front == Rear)
            {
                // Save the data of the element we want to pop for display
                num = Front -> Data;
                // Making the Queue is empty
                Front = Rear = NULL;
                // Delete the popped item
                delete deletePtr;
                return 1; // Success
            }
            else
            {
                // Save the data of the element we want to pop for display
                num = Front -> Data;
                // Cut the relationship between the element and the stack
                Front = Front -> Next;
                // Delete the poped item
                delete deletePtr;

                return 1; // Success
            }
        }

        void Display()
        {
            // Pointer to Front
            Node *current = Front;

            // Loop while inside the stack
            while(current != NULL)
            {
                cout<<current -> Data<<" ";
                // Move to the next element
                current = current -> Next;
            }
            cout<<endl;
        }

    protected:

    private:
};

#endif // QUEUE_H
