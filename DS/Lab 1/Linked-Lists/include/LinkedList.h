#ifndef LINKEDLIST_H
#define LINKEDLIST_H

#include <iostream>
#include<Node.h>

using namespace std;


class LinkedList
{

        Node *head, *tail;

    public:
        // Constructor
        LinkedList()
        {
            head = tail = NULL; // LinkedList is empty
        }

        // Methods

        /////////////////////////////////////////////////////////////////  Add method (append)  /////////////////////////////////////////////////////////////
        void Add(int data)
        {
            // Create new node with pointer so that when the function finishes the node will not be destroyed
            Node *node = new Node(data);

            // Check if the LinkedList is empty
            if (head == NULL)
            {
                // The added node is the first element so the head and the tail will point to it
                head = tail = node;
            }
            else
            {
                // Set next of first element to the new node
                tail -> Next = node;
                // Set previous of new node to the first element (tail)
                node -> Prev = tail;
                // Set tail to the new node
                tail = node;
            }
        }

        /////////////////////////////////////////////////////////////////  Display method  //////////////////////////////////////////////////////////////////
        void Display()
        {
            // Create current pointer which starts from head and moves along the items
            Node *current = head;

            // Next of tail is NULL, so we want to display Nodes until we reach the tail then stop
            while (current != NULL)
            {
                // Display Data of current
                cout<<current -> Data<<endl;

                // Go to the next node (set current to Next of current element)
                current = current -> Next;
            }
        }

        /////////////////////////////////////////////////////////////////  Search method  ///////////////////////////////////////////////////////////////////
        int Search(int data)
        {
            // Use the GetNodeByData function and save the return value in a pointer
            Node *node = GetNodeByData(data);

            return node != NULL; // returns true if the data exists and false if it does not exist
        }

        /////////////////////////////////////////////////////////////////  Remove method  ///////////////////////////////////////////////////////////////////
        void Remove(int data)
        {
            // Check if the data exists
            Node *node = GetNodeByData(data);

            if (node == NULL)
            {
                return; // Data does not exist so exit the function
            }
            else
            {
                // Case 1: data is in the head
                if (node == head)
                {
                    // Case 1-a: only one element exists
                    if (node == tail)
                    {
                        // Cut the link between the node and the list
                        head = tail = NULL;
                    }
                    else
                    {
                        // Case 1-b: data is the first element
                        head = head -> Next; // Move the head pointer to the second element
                        head -> Prev = NULL; // Set Previous of the new head to NULL (Previous of first element in the list is always NULL)
                    }
                }
                // Case 2: data is in tail
                else if (node == tail)
                {
                    tail = tail -> Prev;
                    tail -> Next = NULL;
                }
                // Case 3: data in middle
                else
                {
                    /*Node *A = node -> Prev;
                    Node *B = node -> Next;

                    A -> Next = B;
                    B -> Prev = A;

                    */

                    node -> Prev -> Next = node -> Next;
                    node -> Next -> Prev = node -> Prev;
                }
                delete node; // After cutting its relationship with the List I should delete the node
            }

        }

//**************************************************************************  Assignment  ********************************************************************

        /////////////////////////////////////////////////////////////////  GetCount method  /////////////////////////////////////////////////////////////////
        int GetCount()
        {
            // Create pointer to current
            Node *current = head;

            // Create counter
            int counter = 0;

            // Count until you reach the end of the List
            while (current != NULL)
            {
                counter++;
                // Go to the next node (set current to Next of current element)
                current = current -> Next;
            }

            return counter;
        }

        /////////////////////////////////////////////////////////////////  GetDataByIndex method  /////////////////////////////////////////////////////////////////
        int GetDataByIndex (int index)
        {
            // Create pointer to current
            Node *current = head;

            // Create a variable to store the data
            int data = NULL;

            // Get the length of the list
            int length = GetCount();

            // Check if the index is inside the LinkedList
            if (index < length) {
                // Loop on the linked List until reaching the specified index
                for (int i = 0; i < index + 1; i++)
                {
                    data = current -> Data;

                    // Move to next element
                    current = current -> Next;
                }
            }
            else
            {
                return data;
            }

            return data;
        }
        /////////////////////////////////////////////////////////////////  InsertAfter method  /////////////////////////////////////////////////////////////////
        void insertAfter (int data, int afterData)
        {
            // Create new node
            Node *node = new Node(data);

            // Create pointer to current
            Node *current = head;

            while (current != NULL)
            {
                if (current -> Data == afterData)
                {
                    // Add to the end of the List
                    if (current -> Next == NULL)
                    {
                        Add(data);
                        current = current -> Next;
                    }
                    else{
                    // Set previous of the inserted node to the current
                    node -> Prev = current;
                    // Set next of the inserted node to the next of the current
                    node -> Next = current -> Next;
                    // Set prev of next of current to node
                    (current -> Next) -> Prev = node;
                    // Set next of current to node
                    current -> Next = node;
                    // Change current to node (without this step it will enter infinity loop)
                    current = node;
                    }
                }
                else
                {
                    current = current -> Next;
                }
            }

        }

        /////////////////////////////////////////////////////////////////  Reverse method  /////////////////////////////////////////////////////////////////
        LinkedList* Reverse()
        {
            LinkedList *newListptr;
            LinkedList newList;
            newListptr = &newList;
            // Pointer to current (starts from tail)
            Node *current = tail;

            while (current != NULL)
            {
                // Add node to the new List
                newList.Add(current -> Data);
                // Go backward
                current = current -> Prev;
            }

            return newListptr;

        }

        /////////////////////////////////////////////////////////////////  InPlaceReverse method  /////////////////////////////////////////////////////////////////
        void InPlaceReverse()
        {
            // Get length of the LinkedList
            int length = GetCount();

            // Pointer to last Element
            Node *left = head;

            // Pointer to last Element
            Node *right = tail;

            // For loop for reversing
            for (int i = 0; i < length/2; i++)
            {
                int temp = left -> Data;
                left -> Data = right -> Data;
                right -> Data = temp;

                // Move to next element
                left = left -> Next;

                // Move to previous element
                right = right -> Prev;
            }
        }

         /////////////////////////////////////////////////////////////////  GetNodeByData method  ////////////////////////////////////////////////////////////
    private: // We don't want the user to have access to the node and have the ability to change it
        Node* GetNodeByData (int data)
        {
            // Create current pointer which starts from head and moves along the items
            Node *current = head;

            // Next of tail is NULL, so we want to search Nodes until we reach the tail then stop
            while (current != NULL)
            {
                if (current -> Data == data)
                {
                    return current;
                }
                else
                {
                    // Go to the next node (set current to Next of current element)
                    current = current -> Next;
                }
            }
            // If data does not exist return NULL
            return NULL;
        }




};

#endif // LINKEDLIST_H
