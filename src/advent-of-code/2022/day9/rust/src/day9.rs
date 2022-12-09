
use std::fs;

fn main() {
  // read in test.txt
  let input = fs::read_to_string("../test.txt").expect("Unable to read file");

}
