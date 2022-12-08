#include <iostream>
#include<LinkedList.h>

// Lab 1 - Linked Lists

using namespace std;

int main()
{
    LinkedList List;

    // Add items to List
    List.Add(5);
    List.Add(7);
    List.Add(9);
    List.Add(11);

/*
    // Display items in the List
    cout<<"------------------------------------  Items in List  ------------------------------------"<<endl;
    List.Display();

    // Search if a data value exists or not in the List
    cout<<"------------------------------------  Search if data exists in the List  ------------------------------------"<<endl;
    if(List.Search(9))
        cout << "9 Found"<<endl;
    else
        cout << "9 Not Found"<<endl;


    cout<<"------------------------------------  Delete data from the list  ------------------------------------"<<endl;
    List.Remove(9);
    cout<<"The List after removing 9: "<<endl;
    List.Display();

    cout<<"------------------------------------  Count items in the list  ------------------------------------"<<endl;
    cout<<List.GetCount()<<endl;

    cout<<"------------------------------------  Get data at index 1 and 3  ------------------------------------"<<endl;
    if(List.GetDataByIndex(1) != -1)
        cout << "Data in index 1 is "<<List.GetDataByIndex(1)<<endl;
    else
        cout << "Index 1 does not exist!"<<endl;

    if(List.GetDataByIndex(3))
        cout << "Data in index 3 is "<<List.GetDataByIndex(3)<<endl;
    else
        cout << "Index 3 does not exist!"<<endl;

    cout<<"------------------------------------  Insert 6 after 5 ------------------------------------"<<endl;
    List.insertAfter(6, 5);
    List.Display();
    */



    cout<<"------------------------------------  Reverse List and return new List  ------------------------------------"<<endl;
    LinkedList *newListptr = List.Reverse();
    LinkedList newList = *newListptr;
    cout<<"The new Reversed List is: "<<endl;
    newList.Display();
    cout<<"The old List is: "<<endl;
    List.Display();

    cout<<"------------------------------------  Reverse the List itself  ------------------------------------"<<endl;
    cout<<"List before reversing: "<<endl;
    List.Display();
    cout<<"List after reversing: "<<endl;
    List.InPlaceReverse();
    List.Display();


    return 0;
}
