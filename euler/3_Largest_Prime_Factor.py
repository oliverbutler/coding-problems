"""
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

"""


def isPrime(n):
    for i in range(2, n):
        if n % i == 0:
            return False
    return True


def largestPrimeFactor(n):
    results = []
    for i in range(2, n):
        if isPrime(i) and n % i == 0:
            results.append(i)
    return results


print(largestPrimeFactor(600851475143))
