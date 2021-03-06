""" 
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

"""


def evenFibonacci(max=4e6):
    sum = 0
    t = 0
    p1 = 0
    p2 = 1
    while t < max:
        t = p1 + p2
        p1 = p2
        p2 = t
        if t % 2 == 0:
            sum += t
        t += 1

    return sum


print(evenFibonacci())
