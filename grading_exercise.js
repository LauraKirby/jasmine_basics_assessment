module.exports = { 
	average: function(arr){
		sum = 0; 
		for (var i = 0; i<arr.length; i++) {
			sum += parseInt(arr[i], 10); 
		}
		return sum/arr.length; 
		}
}