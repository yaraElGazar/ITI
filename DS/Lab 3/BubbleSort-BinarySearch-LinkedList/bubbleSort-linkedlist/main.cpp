#include <iostream>
#include<LinkedList.h>

// Bubble Sort and Binary Search for LinkedList

using namespace std;

int main()
{
    LinkedList List;
    LinkedList List2;

    // Add items to List
    List.Add(8);
    List.Add(7);
    List.Add(6);
    List.Add(9);
    List.Add(5);


    // Display items in the List
    cout<<"------------------"<<endl;
    List.Display();

    // Sort items
    cout<<"------------------"<<endl;
    List.BubbleSort();
    List.Display();

    // Binary Search
    cout<<"------------------"<<endl;
    List2.Add(8);
    List2.Add(7);
    List2.Add(6);
    List2.Add(9);
    List2.Add(5);

    cout<<"9 is in index "<<List2.BinarySearch(9)<<endl;
    cout<<"5 is in index "<<List2.BinarySearch(5)<<endl;
    cout<<"10 is in index "<<List2.BinarySearch(10)<<endl;


    return 0;
}
