// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// get the command-lines arguments
const args = process.argv.slice(2);
console.log('args:', args);
// Edge case: We need at least 2 arguments => ouput an error message, exit
if (args.length < 2) {
  console.log(`Error: please enter at least 2 args`);
  process.exit();
}

// Iterate throught the args
// c-style for (let i = 0; i < args.lenght; i++) (index, value: args[i])
// forEach((element) => {}) => both value and index
// for of => only the value
// for in => only the index (loop through keys in objects)

let total = 0;

for (let arg of args) {
  // validate the type of input args
  // Add the arguments
  // Edge case: If any argument is not a whole number, skip it.
  // modulo
  // const isInteger = Number(arg) % 1 === 0

  const convertedNum = Number(arg);

  if (Number.isInteger(convertedNum)) {
    total += convertedNum;
  }
  console.log('arg:', arg, 'type:', typeof convertedNum, 'total:', total);

  // Edge case If any argument is not a number, output an error message.
  if (isNaN(convertedNum)) {
    console.log(`Error: please enter only numbers`);
    // stop the execution
    // throw new Error(`Error: please enter only numbers`);
    process.exit();
  }
}
// print out the sum
console.log('Total:', total);
