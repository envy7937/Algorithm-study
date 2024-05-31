#include <iostream>

using namespace std;

template <typename T>
class DynamicArray
{
private:
    unsigned int sz;
    T* arr;

public:
    explicit DynamicArray(int n): sz(n) {
        arr = new T[sz] {};
    }

    ~DynamicArray() {
        delete [] arr;
        arr = nullptr;
        cout << "memory deleted!" << endl;
    }

    unsigned int size() { return sz; }

    T& operator[] (const int i) { return arr[i]; }
    const T& operator[] (const int i) const { return arr[i]; }
};

int main()
{
    DynamicArray<float> da(5);
    da[0] = 1.1;
    da[1] = 2.2;
    da[2] = 3.3;

    for (int i = 0; i < da.size(); i++) {
        cout << da[i] << endl;
    }
}