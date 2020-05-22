inputArrays = [[1, 2, 1, 2, 3, 3], [2, 1, 3, 5, 3, 2], [1, 2, 3, 4, 5, 6]]

# Finds the first duplicate in an array
# Performance - O(N)


def findFistDuplicate(array):
    dict = {}
    for i in array:
        if i in dict.keys():
            return i
        else:
            dict[i] = 1
    return -1


for arr in inputArrays:
    print(findFistDuplicate(arr))
