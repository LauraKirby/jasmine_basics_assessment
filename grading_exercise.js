module.exports = { 
	letterGrader: function (testScore){
		Math.floor(testScore); 
			if (testScore <= 59 && testScore > 60){
				return 'F'; 
			}
			else if (testScore <= 69 && testScore > 70) {
				return 'D'; 
			}
			else if (testScore <= 79 && testScore > 80) {
				return 'C'; 
			}
			else if (testScore <= 89 && testScore > 90) {
				return 'B'; 
			}
			else if (testScore <= 100 && testScore > 60) {
				return 'A'; 
			}
			else {
				return "Input a number between 0 and 100"
			}
	},
	averageScore: function(arr){
		sum = 0; 
		for (var i = 0; i<arr.length; i++) {
			sum += parseInt(arr[i], 10); 
		}
		return sum/arr.length; 
		}
}