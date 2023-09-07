/*
------   1   -------
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

SOLUTION

stringToArray = (string) => string.split(" ")

------   2   -------

Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"

SOLUTION

noSpace = (x) => x.split(" ").join("");

------   3   -------

A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! 
Each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. 
Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)

SOLUTION

hero = (bullets, dragon) => bullets >= dragon * 2 ? true : false;

------   4   -------

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

SOLUTION 

/*function maps(x){
  let newArr = []
 for (let i = 0; i < x.length; i++){
   newArr.push(x[i]*2)
 }
  return newArr
}*/

maps = (x) => x.map(a => a * 2);

------   5   -------

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

SOLUTION

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a,b)=>a + b);
}

*/