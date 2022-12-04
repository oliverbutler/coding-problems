use std::collections::HashSet;
use std::fs;

fn get_common_characters(s1: &str, s2: &str) -> Vec<char> {
  let mut character_set = HashSet::new();
  let mut common_characters = HashSet::new();

  for c in s1.chars() {
    character_set.insert(c);
  }

  for c in s2.chars() {
    if character_set.contains(&c) {
      common_characters.insert(c);
    }
  }

  return common_characters.into_iter().collect();
}


fn convert_char_to_int(c: &char) -> i32 {
  match c {
    lower if lower.is_lowercase() => *lower as i32 - 96,
    upper if upper.is_uppercase() => *upper as i32 - 38,
    _ => panic!("Invalid character"),
  }
}

fn split_string_in_half(s: &str) -> (String, String) {
  let half_length = s.len() / 2;

  let first_half = s.chars().take(half_length).collect::<String>();
  let second_half = s.chars().skip(half_length).collect::<String>();

  (first_half, second_half)
}


fn main() {
  // read in test.txt
  let input = fs::read_to_string("../test.txt").expect("Unable to read file");

  let input_without_trailing_new_line = input.trim_end();


  let common_chars = input_without_trailing_new_line.split("\n")
    .map(|s| {
      let (first_half, second_half) = split_string_in_half(s);

      get_common_characters(first_half.as_str(), second_half.as_str())
    })
    .collect::<Vec<char>>();

  let elf_not_grouped = input_without_trailing_new_line.split("\n").collect::<Vec<&str>>();


  let elf_groups_by_3 = elf_not_grouped.chunks(3).collect::<Vec<&[&str]>>();

  let part_2 = elf_groups_by_3.iter().map(|group| {
    let common_1_2 = get_common_characters(group[0], group[1]);
    let common_2_3 = get_common_characters(group[1], group[2]);
    let common = get_common_characters(common_1_2.join(""), common_2_3.join(""));

    println!("{:?}", common);


    return 'a';
  }).map(|c| convert_char_to_int(&c)).sum::<i32>();

  let part_1 = common_chars.iter()
    .map(|c| convert_char_to_int(c))
    .sum::<i32>();


  println!("{}", input);

  println!("Part 1: {:?}", part_1);
  println!("Part 2: {:?}", part_2);
}
