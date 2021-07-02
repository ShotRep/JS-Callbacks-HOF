// a higher-order function - function that takes in a function as an argument.
// a callback function - function that you pass into another function.

// //our callback function
// function identity(cb) {
//   return cb
// }
// //our higher order function
// identity(console.log)('MARMOT')
//(console.log is the callback) its being passed into a callback function.
//identity is the higher order function.  it is the function that is doing the recieving.
//The outer function is the higher order function. and the function being passed in is the callback.
//higher-order function(callback function)

/*
   why would we use higher order functions with callbacks?
                                    S P E E D
   1.) asynchronous programming: when using JS for webdev load time is very important.
   a technique devs use to make sure our pages are loading as efficient as possible.
                                    TECHNIQUE
   2.) functional programming: a style of programming that is really function oriented.
                                    DRY CODING
   3.) Do Not Repeat Yourself(DRY): shorter, cleaner, less repetitive code.
*/

//array methods - higher order functions
//forEach = built in for-loop.
//map = returns a mapped array
//reduce = take a collection and reduce it down to 1 element.

// //our callback function
// function logNegative(x){
//   console.log(-x)
// }
// function logPlusTwo(x){
//   console.log(x+2)
// }

// const numbers = [1,3,5,7,9,11]

// //our higher order function
// numbers.forEach(logNegative)
// numbers.forEach(logPlusTwo)

// //our callback function
// function mapNegative(x) {
//   return -x
// }
// function mapPlusTwo(x) {
//   return x + 2
// }

// //our array
// const numbers = [1.1, 3.6, 5.2, 7.8, 9.2, 11.4]

// //our higher order function

// //1.) write them out and name them.
// console.log(numbers.map(mapNegative))
// console.log(numbers.map(mapPlusTwo))

// //2.) we can use existing functions or methods.
// console.log(numbers.map(Math.round))
// console.log(numbers.map(Math.round))

// //3a.) we can use an anonymous function. good if we are only using once.
// console.log(numbers.map(function(x){
//   return x * -1
// }))
// console.log(numbers.map(function(x){
//   return x + 2
// }))
// //3b.) anonymous function. reduce()
// console.log(numbers.reduce(function(currentTotal, x){
//   return currentTotal + x  //<=just adding up each element.
// }))

//more exercises

// //forEach
// const words = ['yarg', 'blarg', 'blargity']

// words.forEach(function(item){ //<=item,index,array
//  console.log(item)  //<=item,index,array
// })

// //map   sooooo much nicer than a for loop.
// console.log(words.map(function(item){
//   return item.toUpperCase()
// }))

//write our own higher order function

// function compliment(){
//   console.log("Hey,there's something I want to tell you: ")  //<=repetitive
//   console.log("You have really nice teeth, like so nice")
// }

// function insult(){
//    console.log("Hey,there's something I want to tell you: ")  //<=repetitive
//    console.log("Like, your elbows are so gnarly")
// }

//create a higher order function for this repetitive code.

//callback function
function giveFeedback(cb) {
  console.log("Hey,there's something I want to tell you: ")
  return cb()
}

function compliment() {
  console.log("You have really nice teeth, like so nice")
}

function insult() {
  console.log("Like, your elbows are so gnarly")
}

//higher-order function
giveFeedback(compliment)
giveFeedback(insult)
