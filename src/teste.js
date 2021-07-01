class Main
{
    public static void main(String[] args)
    {
        String str = "Techie Delight";
        char ch = '_';
        int pos = 6;
 
        str = str.substring(0, pos) + ch + str.substring(pos + 1);
        System.out.println(str);
    }
}