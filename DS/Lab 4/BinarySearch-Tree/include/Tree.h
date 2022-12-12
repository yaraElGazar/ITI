#ifndef TREE_H
#define TREE_H

#include<Node.h>

using namespace std;

template<class T>
class Tree
{
    Node<T> *root;
    public:
        // Constructor
        Tree()
        {
            root = NULL; // Tree is initially empty
        }

        // Add function
        void Add(T data)
        {
            // Create new node
            Node<T> *node = new Node<T>(data);

            // If tree is empty
            if (root == NULL)
            {
                root = node; // First node
            }
            else
            {
                // Move with it to know the place of the new node
                Node<T> *current = root;

                // Save the parent
                Node<T> *parent;

                // If NULL is reached then there is an empty place where you can insert the new node
                while(current != NULL)
                {
                    // Save the value of current before changing
                    parent = current;

                    if (data > current -> Data)
                    {
                        // Move right
                        current = current -> Right;
                    }
                    else
                    {
                        current = current -> Left;
                    }
                }
                // Now we want to know what is the parent node, that's why we saved its value previously
                // We want to know whether to insert the new node to the lift or to the right of its parent
                if(data > parent -> Data)
                {
                    parent -> Right = node;
                }
                else
                {
                    parent -> Left = node;
                }

            }
        }

        // Traverse method
        void Traverse()
        {
            Display (root);
        }

        // Remove method
        void Remove (T data)
        {
            // Get node that contains the data
            Node<T>* node = GetNodeByData(data);

            // If data does not exist exit the function
            if (node == NULL)
                return;

            // If the node is the root we have 4 cases
            if (node == root)
            {
                // root is the only element in the tree
                if (root -> Left == NULL && root -> Right == NULL)
                {
                    root = NULL;
                }
                // root only have items on the Left
                else if (root -> Right == NULL)
                {
                    // Set new root to the left side
                    root = root -> Left;
                }
                // root only have items on the Right
                else if (root -> Left == NULL)
                {
                    // Set new root to the Right side
                    root = root -> Right;
                }
                else
                {
                    // set new root to the left of the old root
                    Node<T> *newRoot = root -> Left;
                    Node<T> *maxRight = GetMaxRight(newRoot);

                    // Add all the right side of the old root to the maxRight
                    maxRight -> Right = root -> Right;
                    root = newRoot;
                }
            }
            // If node is not the root (parent and children are affected)
            else
            {
                Node<T> *parent = GetParent();
                Node<T> *newChild;

                if (node -> Left == NULL && node -> Right == NULL)
                {
                    newChild = NULL;
                }
                else if (node -> Right == NULL)
                {
                    newChild = node -> Left;
                }
                else if (node -> Left == NULL)
                {
                    newChild = node -> Right;
                }
                else
                {
                    Node<T> *newParent = node -> Left;
                    Node<T> *maxRight = GetMaxRight (newParent);

                    maxRight -> Right = node -> Right;
                    newChild = newParent;
                }

                // Here I want to know if the node is to the left or to the right of its parent
                if (parent -> Left == node)
                    parent -> Left = newChild;
                else
                    parent -> Right = newChild;
            }
             delete node;
        }

        // Get Max Depth function
        int GetMaxDepth()
        {
            return GetDepth(root);
        }

    protected:

    private:
        // GetNode By Data function
        Node<T>* GetNodeByData(T data)
        {
            // Set current node to root
            Node<T>* current = root;

            // Move inside the tree
            while (current != NULL)
            {
                if (data == current -> Data)
                {
                    return current;
                }
                else if (data > current -> Data)
                {
                    current = current -> Right;
                }
                else
                {
                    current = current -> Left;
                }
            }
        }

        // Get Parent function
        Node<T>* GetParent (Node<T> *node )
        {
            // Create parent node
            Node<T> *parent = root;

            while (parent != NULL)
            {
                if (parent -> Left == node || parent -> Right == node)
                {
                    return parent;
                }
                else if (node -> Data > parent -> Data)
                {
                    parent = parent -> Right;
                }
                else
                {
                    parent = parent -> Left;
                }
            }
            return NULL; // node does not exist or it is the root
        }

        // Get Max Right function
        Node<T>* GetMaxRight (Node<T> *node)
        {
            while (node -> Right != NULL)
            {
                node = node -> Right;
            }
            return node;
        }

        // Display function
        void Display (Node<T> *node)
        {
            if (node == NULL)
                return;

            // Recursion
            Display (node -> Left);
            cout << node -> Data << "  ";
            Display (node -> Right);

        }

        // Get Depth function
        int GetDepth(Node<T> *node)
        {
            if(node == NULL)
                return 0;

            int leftDepth = GetDepth(node->Left);
            int rightDepth = GetDepth(node->Right);

            int height;

            if (leftDepth > rightDepth)
            {
                height = leftDepth + 1;
            }
            else
            {
                height = rightDepth + 1;
            }
            return height;
        }
};

#endif // TREE_H
