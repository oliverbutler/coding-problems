package interview.array;

import java.util.HashMap;

public class FirstNonRepeat {
    public static void main(String[] args) {
        String s = "aa1aabb2bbcdd1dd";

        System.out.println(firstNonRepeatingCharacter(s));
    }

    /**
     * First none repeating character
     * 
     * HashMap
     * 
     * @param s
     */
    public static char firstNonRepeatingCharacter(String s) {
        HashMap<Character, Integer> charCounts = new HashMap<>();

        // Populate HashMap
        for (char c : s.toCharArray()) {
            if (charCounts.containsKey(c)) {
                charCounts.put(c, charCounts.get(c) + 1);
            } else {
                charCounts.put(c, 1);
            }
        }

        // Check which is first non repeating
        for (char c : s.toCharArray()) {
            if (charCounts.get(c) == 1) {
                return c;
            }
        }

        // charCounts.entrySet()

        return '_';
    }

}
