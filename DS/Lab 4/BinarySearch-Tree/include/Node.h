#ifndef NODE_H
#define NODE_H

template<class T>
class Node
{
    public:
        // Data of type T
        T Data;

        // Pointers to node
        Node<T> *Left, *Right;

        // Constructor
        Node(T data)
        {
            Data = data;
            Left = Right = NULL;
        }

    protected:

    private:
};

#endif // NODE_H
