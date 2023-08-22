// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// get the command-lines arguments
// Edge case: We need at least 2 arguments => ouput an error message, exit
const args = process.argv.slice(2);
console.log('args:', args);

// Iterate throught the args
// c-style for (let i = 0; i < args.lenght; i++) (index, value: args[i])
// forEach((element) => {}) => both value and index
// for of => only the value
// for in => only the index (loop through keys in objects)

let total = 0;

for (let arg of args) {
  // validate the type of input args
  // Add the arguments

  total += Number(arg);
  console.log('arg:', arg, "type:", typeof Number(arg), 'total:', total);
}

// Edge case: If any argument is not a whole number, skip it.

// Edge case If any argument is not a number, output an error message.

// print out the sum
console.log('Total:', total);
