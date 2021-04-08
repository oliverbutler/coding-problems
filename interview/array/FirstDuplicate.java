package interview.array;

import java.util.HashSet;

public class FirstDuplicate {
    public static void main(String[] args) {
        int arr[] = new int[] { 5, 2, 3, 4, 1, 2, 3, 5 };

        System.out.println(firstDuplicate(arr));
    }

    public static int firstDuplicate(int[] arr) {

        HashSet<Integer> currentSet = new HashSet<>();

        for (int i : arr) {
            if (currentSet.contains(i)) {
                return i;
            }
            currentSet.add(i);
        }

        return -1;
    }
}
