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
