function twoSum(nums: number[], target: number): number[] | undefined {
  const complements = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    const foundIndex = complements.get(complement);

    if (foundIndex !== undefined) {
      return [foundIndex, i];
    }

    complements.set(nums[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
