# All values are 1 <= x <= length of array
# Find the number which is the first to repeat itself. E.g. [1,2,1,2,3,3] would be 1, Not 2.
# Return -1 if not found

inputArrays = [[1, 2, 1, 2, 3, 3], [2, 1, 3, 5, 3, 2], [1, 2, 3, 4, 5, 6]]


"""
Uses temporary hash map / dictionary to store values already seen
Performance - O(N)
Memory - 2N
"""


def findFistDuplicate(array):
    dict = {}
    for i in array:
        if i in dict.keys():
            return i
        else:
            dict[i] = 1
    return -1


"""
Uses the fact that all values are between 1 and the length of the array
Performance - O(N)
Memory - N

[1, 2, 1, 2, 3, 3] - [1] arr[0] = -arr[0]
[-1, 2, 1, 2, 3, 3] - [2] arr[1] = -arr[1]
[-1, -2, 1, 2, 3, 3] - [1] arr[0] < 0 return 1
1
[2, 1, 3, 5, 3, 2] - [2] arr[1] = -arr[1]
[2, -1, 3, 5, 3, 2] - [1] arr[0] = -arr[0]
[-2, -1, 3, 5, 3, 2] - [3] arr[2] = -arr[2]
[-2, -1, -3, 5, 3, 2] - [5] arr[4] = -arr[4]
[-2, -1, -3, 5, -3, 2] - [3] arr[2] < 0 return 3
3
[1, 2, 3, 4, 5, 6]
[-1, 2, 3, 4, 5, 6]
[-1, -2, 3, 4, 5, 6]
[-1, -2, -3, 4, 5, 6]
[-1, -2, -3, -4, 5, 6]
[-1, -2, -3, -4, -5, 6]
-1
"""


def findFirstDuplicateRefined(array):
    for i in array:
        if array[abs(i) - 1] < 0:
            return abs(i)
        else:
            array[abs(i) - 1] = -array[abs(i) - 1]
    return -1


for arr in inputArrays:
    print(findFirstDuplicateRefined(arr))
