// Function expression called divide
const divide = function() {
  return 2000 / 100;
};

// Arrow function called square
const square = x => x * x;

// Arrow function called add
const add = (a, b) => a + b;

// Optional: Arrow function used in array map (not required by all labs, but good practice)
const nums = [1, 2, 3, 4];
const squares = nums.map(num => square(num)); // [1, 4, 9, 16]

const names = ["Alice", "Bob"];
const greetings = names.map(name => `Hello, ${name}!`); // ["Hello, Alice!", "Hello, Bob!"]

// Export functions for testing
module.exports = {
  divide,
  square,
  add,
  squares,
  greetings
};
