package interview;

public class StringToInt {
    public static void main(String[] args) {
        String str = "123";
        System.out.println(parseStringToInt(str));
    }

    public static int parseStringToInt(String s) {
        int foo;
        try {
            foo = Integer.parseInt(s);
        } catch (NumberFormatException e) {
            foo = 0;
        }

        return foo;
    }

}
