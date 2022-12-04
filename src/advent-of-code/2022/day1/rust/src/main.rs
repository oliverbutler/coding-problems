use std::fs;

fn main() {
  // read in test.txt
  let input = fs::read_to_string("../test.txt").expect("Unable to read file");

  // split by double newline
  let elfs = input.split("\n\n")
    .map(|elf|
      elf.split_whitespace().map(|num| num.parse::<i32>().unwrap()).collect::<Vec<i32>>()
    )
    .map(|elfs| elfs.iter().sum()).collect::<Vec<i32>>();

  // part 1 - max i32 in elfs
  println!("Part 1: {}", elfs.iter().max().unwrap());

  // part 2 - top 3 elfs
  let mut top_3 = elfs.clone();
  top_3.sort();
  top_3.reverse();
  top_3.truncate(3);
  println!("Part 2: {}", top_3.iter().sum::<i32>());
}
