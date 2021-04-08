package interview;

class CountOccurences {
    public static void main(String[] args) {

        String str = "catsies";
        char c = 's';

        System.out.println(countOccurences(str, c));
    }

    public static int countOccurences(String str, char c) {
        int total = 0;
        for (char strChar : str.toCharArray()) {
            if (strChar == c)
                total++;
        }
        return total;
    }

}
