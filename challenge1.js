// Given an array of strings, return only the strings that have exactly 4 characters.
// Overall Goal: To print elements with only 4 characters. 
//Psuedocode: After defining a variable to an array, we'll have to make a for statement loop to check each element
// in the array. Then we use an "if" statement to set the access to the array, and also to set the condition to 4 characters.
// Finally we then print the variables with 4 characters. 

var words = ["car", "bike", "bus", "van", "scooter", "truck", "rv"]

for (var i = 0; i < words.length; i++)
 if (words[i].length === 4) {
   console.log(words[i])

