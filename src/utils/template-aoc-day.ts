// What does this script do?
// 1. Creates a new folder for the day (arg 1) if it doesn't exist
// 2. Creates a new file for dayX.ts, dayX.test.ts, test.txt, and input.txt
// 3. fetches the question from AoC website
// 3.1 puts the question in a README.md file
// 3.2 puts the example data in test.txt
// 3.3 puts the input data in input.txt

import * as fs from 'fs';
import {join} from "path"
import {execSync} from "child_process"
import * as dotenv from 'dotenv'

dotenv.config()

const day = process.argv[2];
const year = '2022';

const cookie = process.env.AOC_COOKIE;

console.log(cookie)


if (!day) {
  console.error('Please provide a day number');
  process.exit(1);
}

const dayFolder = join(__dirname, `../advent-of-code/${year}/day${day}`)

// Target Files
const dayFile = join(dayFolder, `./typescript/day${day}.ts`)
const testFile = join(dayFolder, `./typescript/day${day}.test.ts`)
const testInputFile = join(dayFolder, `./test.txt`)
const inputFile = join(dayFolder, `./input.txt`)
const readmeFile = join(dayFolder, `./README.md`)

// Make the day folder if it doesn't exist
fs.mkdirSync(dayFolder,)

// make the typescript folder
fs.mkdirSync(join(dayFolder, `./typescript`))

// Make the emptyDayFile

// Create the day file
fs.writeFileSync(dayFile, `
import {readAndFormatInputs} from "../../../../utils/file";

export const step1 = (rawData: typeof data) => {

};


export const step2 = (rawData: typeof data) => {

};

const {data, testData} = readAndFormatInputs(__dirname, (data) => data.split("\\n").map((x) => x));
export {data, testData};

`)

// Create the test file
fs.writeFileSync(testFile, `
import {step1, step2, testData, data} from "./day${day}";

describe("Day ${day}", () => {
  describe("Step 1", () => {
    it("should work with the example data", () => {
      expect(step1(testData)).toEqual(0);
    });
    it("should work with the real data", () => {
      expect(step1(data)).toEqual(0);
    });
  });
  describe("Step 2", () => {
    it("should work with the example data", () => {
      expect(step2(testData)).toEqual(0);
    });
    it("should work with the real data", () => {
      expect(step2(data)).toEqual(0);
    });
  });
});

`)

// Create the test input file
fs.writeFileSync(testInputFile, ``)

// Create the input file
fs.writeFileSync(inputFile, ``)

// Create the readme file
fs.writeFileSync(readmeFile, `# Day ${day}`)

// Run prettier against dayX and dayX's tests, exclude the input/test files
execSync(`prettier -w ${dayFile} ${testFile}`)

// Fetch the question from the AoC website
const dayPage = execSync(`curl https://adventofcode.com/${year}/day/${day}`).toString()

const dayDescArticle = dayPage.match(/<article class="day-desc">(.|\n)*?<\/article>/)?.[0]

// the first <pre><code> is the example data
const testInput = dayDescArticle?.match(/<pre><code>(.|\n)*?<\/code><\/pre>/)?.[0]
const testInputWithoutTags = testInput?.replace(/<pre><code>/, '').replace(/<\/code><\/pre>/, '')
//  remove trailing \n or whitespace
const testInputWithoutTagsTrimmed = testInputWithoutTags?.trim()


//  Write the test input to the test file
fs.writeFileSync(testInputFile, `${testInputWithoutTagsTrimmed}`)

// Get the real input
const realInput = execSync(`curl https://adventofcode.com/${year}/day/${day}/input \ -H 'cookie:${cookie}'`).toString()

// Trim the real input
const realInputTrimmed = realInput.trim()
// Write the real input to the input file
fs.writeFileSync(inputFile, `${realInputTrimmed}`)

// output all to README.md
fs.writeFileSync(readmeFile, `# Day ${day}
${dayDescArticle}
`)



