#ifndef STACK_H
#define STACK_H

#include<Node.h>
using namespace std;

class Stack
{
    Node *Top;
    public:
        Stack()
        {
            Top = NULL; // Stack is empty
        }

        void Push(int data) // No need to check for full, success or failure because linked list is dynamic
        {
            // Check if the stack is empty
            if(Top == NULL)
            {
                Node *newNode = new Node(data);
                Top = newNode;

            }
            // If there are items in the stack
            else
            {
                Node *newNode = new Node(data);
                newNode -> Next = Top;
                Top = newNode;
            }
        }

        int Pop(int &num)
        {
            // Create pointer for deleting
            Node *deletePtr = Top;

            // If Stack is empty
            if(Top == NULL)
            {
                return 0; // Failure
            }
            else
            {
                // Save the data of the element we want to pop for display
                num = Top -> Data;
                // Cut the relationship between the element and the stack
                Top = Top -> Next;
                // Delete the poped item
                delete deletePtr;

                return 1; // Success
            }
        }

        void Display()
        {
            // Pointer to Top
            Node *current = Top;

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

#endif // STACK_H
