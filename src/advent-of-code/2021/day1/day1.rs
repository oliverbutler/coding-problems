use std::fs;

fn main() {
  let contents = fs::read_to_string("./test.txt").expect("Something went wrong reading the file");

  println!("{}", contents)
  panic()
}
