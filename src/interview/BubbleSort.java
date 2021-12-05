package interview;

import java.util.Arrays;

/**
 * https://javarevisited.blogspot.com/2014/08/bubble-sort-algorithm-in-java-with.html#axzz5ArdIFI7y
 * 
 * https://codeburst.io/100-coding-interview-questions-for-programmers-b1cf74885fb7
 */

class BubbleSort {
    public static void main(String[] args) {
        int intArray[] = new int[] { 7, 9, 6, 8, 5, 3, 2, 4, 1 };

        bubbleSort(intArray);

    }

    public static void bubbleSort(int[] numbers) {
        System.out.printf("Unsorted Array: %s\n", Arrays.toString(numbers));

        for (int i = 0; i < numbers.length; i++) {
            for (int j = 0; j < numbers.length - i - 1; j++) {

                if (numbers[j] > numbers[j + 1]) {
                    swap(numbers, j, j + 1);
                }

            }

            System.out.printf("Step %s Array: %s\n", i, Arrays.toString(numbers));
        }

    }

    /**
     * Swap ints based upon 2 indexes
     * 
     * @param numbers
     * @param index1
     * @param index2
     */
    public static void swap(int[] numbers, int index1, int index2) {
        int temp = numbers[index1];
        numbers[index1] = numbers[index2];
        numbers[index2] = temp;
    }
}