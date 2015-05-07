//Write a function letterGrader which takes a test score and 
//returns the equivalent letter grade.

var grader = require("../grading_exercise.js")

//letterGrader
describe('the letterGrader function', function() {
	it ('takes a test score and returns the equivalent letter grade', function(){
		expect(grader.letterGrader(98)).toEqual('A');
	});
});

describe('the test score average function', function() {
	it ('should take test scores and return the average', function (){
	  expect(grader.averageScore([90, 95, 87, 60])).toEqual(83);
	}); 
});