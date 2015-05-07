//Write a function letterGrader which takes a test score and 
//returns the equivalent letter grade.

var grader = require("../grading_exercise.js")

describe('the test score average function', function() {
	it ('should take test scores and return the average', function (){
	  expect(grader.average([90, 95, 87, 60])).toEqual(83);
	}); 
});

//  will do this next, started on the average first by mistake 
//letterGrader
//describe('the letterGrader function',
// 	it ('takes a test score and returns the equivalent letter grade', function (){
// 	  expect(letterGrader.average(90).toEqual();
// 	}); 
// });


