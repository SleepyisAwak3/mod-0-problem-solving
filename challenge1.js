// Given an array of strings, return only the strings that have exactly 4 characters.
// Overall Goal: To print elements with only 4 characters. 
//Psuedocode: After defining a variable to an array, we'll have to make a for statement loop to check each element
// in the array. Then we use an "if" statement to set the access to the array, and also to set the condition to 4 characters.
// Finally we then print the variables with 4 characters. 

var wheels = ["car", "bike", "bus", "van", "scooter", "truck", "rv"]

for (var i = 0; i < wheels.length; i++)
 if (wheels[i].length === 4) {
   console.log(wheels[i])
  }

// Challenge:Start with an array of strings with a mix of uppercase and lowercase letters.
// Print every word in all lowercase letters.
// Overall Goal:Print the array with all lowercase letters.
// Psuedocode: First you define an array of strings with uppercase and lowercase characters. After trial and error, and
// and research I found a method to help run and check it the array. It then prints out the strings in lowercase.
var arr = ['PleaSe', 'dO', 'bE', 'kInD'];

var lower = arr.map(element => {
  return element.toLowerCase();
});

console.log(lower)

// Challenge:Start with an array of travel destinations. Print every travel destination in alphabetical 
// order embedded in a sentence using string interpolation. For example, if the destination is "New York City",
// print something like "The next place I want to visit is New York City!" 
// Overall Goal: Alphabetize an array of strings and prints them in with a message. 
// Psuedocode: First you set an array of strings. Following that you set a for statement that loops the whole array.
// it then pritns out each element and using string interpolation prints the destination and the message!

var destinations = ["New York", "Denver", "Las Vegas", "Tokyo", "London"]

for (var i = 0; i < destinations.length; i++) {
    destinations.sort()
    console.log(`The next place //I want to visit is //${destinations[i]}`)
} 