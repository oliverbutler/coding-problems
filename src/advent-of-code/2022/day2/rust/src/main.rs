use std::fs;

#[derive(Debug, Copy, Clone, PartialEq)]
enum RockPaperScissors {
  Rock,
  Paper,
  Scissors,
}

fn string_to_rock_paper_scissors(s: &str) -> RockPaperScissors {
  match s {
    "A" | "X" => RockPaperScissors::Rock,
    "B" | "Y" => RockPaperScissors::Paper,
    "C" | "Z" => RockPaperScissors::Scissors,
    _ => panic!("Invalid input"),
  }
}

fn get_round_score(you: &RockPaperScissors, opponent: &RockPaperScissors) -> i32 {
  if you == opponent {
    return 3;
  }

  match (you, opponent) {
    (RockPaperScissors::Rock, RockPaperScissors::Paper) => 0,
    (RockPaperScissors::Rock, RockPaperScissors::Scissors) => 6,
    (RockPaperScissors::Paper, RockPaperScissors::Rock) => 6,
    (RockPaperScissors::Paper, RockPaperScissors::Scissors) => 0,
    (RockPaperScissors::Scissors, RockPaperScissors::Rock) => 0,
    (RockPaperScissors::Scissors, RockPaperScissors::Paper) => 6,
    _ => panic!("Invalid input"),
  }
}

fn get_shape_of_play(play: &RockPaperScissors) -> i32 {
  match play {
    RockPaperScissors::Rock => 1,
    RockPaperScissors::Paper => 2,
    RockPaperScissors::Scissors => 3,
  }
}


fn main() {
  // read in test.txt
  let input = fs::read_to_string("../input.txt").expect("Unable to read file");

  let input_without_trailing_new_line = input.trim_end();

  let plays = input_without_trailing_new_line
    .split("\n")
    .map(|s| {
      let round = s.split(" ")
        .map(|s| string_to_rock_paper_scissors(s))
        .collect::<Vec<RockPaperScissors>>();

      let round_as_tuple: (RockPaperScissors, RockPaperScissors) = (round[0].clone(), round[1].clone());

      round_as_tuple
    })
    .collect::<Vec<(RockPaperScissors, RockPaperScissors)>>();

  let total_score = plays.iter()
    .map(|(opponent, you)| {
      get_round_score(you, opponent) + get_shape_of_play(you)
    }
    )
    .sum::<i32>();

  let total_score_part_2 = plays.iter()
    .map(|(opponent, you)| {
      let target_win_score = match you {
        RockPaperScissors::Rock => 0,
        RockPaperScissors::Paper => 3,
        RockPaperScissors::Scissors => 6,
      };

      let mut ideal_play = you.clone();

      for potential_play in [RockPaperScissors::Rock, RockPaperScissors::Paper, RockPaperScissors::Scissors] {
        let potential_score = get_round_score(&potential_play, opponent);

        if potential_score == target_win_score {
          ideal_play = potential_play;
          break;
        }
      }

      get_round_score(&ideal_play, opponent) + get_shape_of_play(&ideal_play)
    }
    )
    .sum::<i32>();


  println!("Part 1: {:?}", total_score);
  println!("Part 2: {:?}", total_score_part_2);
}
