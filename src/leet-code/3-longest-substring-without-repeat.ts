function lengthOfLongestSubstring(s: string): number {
  const sequences: string[] = [];

  const longestChars = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    // if the curr character was just repeated
    if (longestChars.has(char)) {
      // add current longest string to sequences
      sequences.push(Array.from(longestChars.keys()).join(""));

      const firstCharToKeep = longestChars.get(char) as number;

      console.log(char);
      console.log(longestChars);

      // remove all chars from before that character in the map
      Array.from(longestChars.entries()).forEach(
        (char) => char[1] < firstCharToKeep && longestChars.delete(char[0])
      );

      console.log(longestChars);
    } else {
      longestChars.set(char, i);
    }
  }

  sequences.push(Array.from(longestChars.keys()).join(""));

  console.log(sequences);

  return sequences.reduce(
    (acc, curr) => (curr.length > acc ? curr.length : acc),
    0
  );
}

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("aabaab!bb"));
