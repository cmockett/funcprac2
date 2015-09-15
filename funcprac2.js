// var obj = new Object();
// obj.name = "Christian";
// obj.age = 34;
// obj.gender = "male";
// console.log(obj)

// var getName = function(object){
// 	return object.name;
// }

var totalLetters = function(string){
	var myArray = [string];
	var newString = myArray.join("");
	return newString.length;
}
