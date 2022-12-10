#include <iostream>

using namespace std;

// Swap function
void Swap (int &a, int &b)
{
    int temp = a;
    a = b;
    b = temp;
}

// Display function
void Display (int *items, int Size)
{
    for (int i = 0; i < Size; i++)
    {
        cout << items[i] << "  ";
    }
    cout << endl;
}

// Bubble Sort function
void BubbleSort(int *items, int Size)
{
    // Setting flag
    int sorted = 0;

    for (int counter = 0; counter < Size - 1 && sorted == 0; counter++)
    {
        // Setting the flag as if it is the last iteration
        sorted = 1;

        for (int index = 0; index < Size - 1 - counter; index++)
        {
            if (items[index] > items[index + 1])
            {
                Swap(items[index], items[index + 1]);

                // Change the flag to continue iterating
                sorted = 0;
            }
        }
    }
}

// SelectionSort function
void SelectionSort(int* items, int Size)
{
    for (int counter = 0; counter < Size; counter++)
    {
        int minIndex = counter; // My prediction is that the first item is the minimum

        for (int index = minIndex + 1; index < Size; index++)
        {
            if (items[index] < items[minIndex])
            {
                minIndex = index;
            }
        }
        Swap(items[counter], items[minIndex]);
    }
}

// InsertionSort function
void InsertionSort(int *items, int Size)
{
    for (int counter = 1; counter < Size; counter++)
    {
        int key = items[counter];
        // index of number before key
        int index = counter - 1;

        // while still in the array and the number before key is bigger than the key shift to the right of the key
        while (index >= 0 && items[index] > key)
        {
            // Shift to right
            items[index + 1] = items[index];
            index--;
        }

        items[index + 1] = key;

    }
}

// Binary Search function (takes data and return index if found and -1 if does not exist)
int BinarySearch(int *items, int data, int Size)
{
    // Array must be sorted first
    BubbleSort(items, Size);

    int minIndex = 0, maxIndex = Size - 1, midIndex;
    while (minIndex <= maxIndex)
    {
        midIndex = (minIndex + maxIndex) / 2;

        // Return index if it is in the middle
        if (data == items[midIndex])
        {
            return midIndex;
        }

        // Right half
        if (data > midIndex)
        {
            minIndex = midIndex + 1;
        }
        // Left half
        else
        {
            maxIndex = midIndex - 1;
        }
    }
    // If not found return -1
    return -1;
}

int main()
{
    cout<<"-------Bubble Sort------"<<endl;
    int items1[] = {5, 2, 9, 4, 1};
    Display(items1, 5);
    BubbleSort(items1, 5);
    Display(items1, 5);

    cout<<"-------Selection Sort------"<<endl;
    int items2[] = {3, 2, 10, 4, 0};
    Display(items2, 5);
    SelectionSort(items2, 5);
    Display(items2, 5);

    cout<<"-------Insertion Sort------"<<endl;
    int items3[] = {7, 5, 1, 9, 1};
    Display(items3, 5);
    SelectionSort(items3, 5);
    Display(items3, 5);

    cout<<"-------Binary Search------"<<endl;
    int items4[] = {7, 5, 1, 9, 1};
    cout<<"7 is in index "<<BinarySearch(items4, 7, 5)<<endl;
    cout<<"10 is in index "<<BinarySearch(items4, 10, 5)<<endl;


    return 0;
}
