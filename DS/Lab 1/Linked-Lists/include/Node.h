#ifndef NODE_H
#define NODE_H


class Node
{
    public:
        int Data; // Elements in Node is of type int
        Node *Next, *Prev;
        // Constructor
        Node(int data)
        {
            Data = data;
            Next = Prev = NULL;
        }

    protected:

    private:
};

#endif // NODE_H
