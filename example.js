// save this file as argumentScript.js

// Check the number of arguments
const numArgs = process.argv.length - 2; // subtracting 2 to exclude 'node' and script filename

if (numArgs === 0) {
  console.log("No argument");
} else if (numArgs === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
