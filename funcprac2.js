// var obj = new Object();
// obj.name = "Christian";
// obj.age = 34;
// obj.gender = "male";
// console.log(obj)

// var getName = function(object){
// 	return object.name;
// }

// var totalLetters = function(arr){
// 	var letters = 0
// 	for(var i=0; i<arr.length; i++){
// 		letters += arr[i].length;
// 	}
// 	return letters
// }

// var keyValue = function(a, b){
// 	var obj = {};
// 		obj[a]= b;
// 	return obj
// }


// var negativeIndex = function(arr, b){

// 	return arr[arr.length + b]
// }

// var removeM = function(str){
// 	indexM = [];
// 	for (var i=0; i<str.length; i++){
// 		if (str[i] === "M" || str[i] === "m"){

// 		}
// 	}
// }

// var removeM = function(str){
// 	str = str.split("m").join("")
// 	str = str.split("M").join("")
// 	return str
// }

function printObject(o) {
  var out = '';
  for (var p in o) {
    out += p + ' is ' + o[p] + '\n';
  }
  return out;
}


// var vowels = function(str){
// 	vowelArray = []
// 	for(var i=0; i<str.length; i++){
// 		if (str[i] === "a"){
// 			vowelArray.push("a")
// 		}
// 		else if (str[i] === "e"){
// 			vowelArray.push("e")
// 		}
// 		else if (str[i] === "i"){
// 			vowelArray.push("i")
// 		}
// 		else if (str[i] === "o"){
// 			vowelArray.push("o")
// 		}
// 		else if (str[i] === "u"){
// 			vowelArray.push("u")
// 		}

// 	}
// 	console.log(vowelArray)
// }

// var twins = function(arr){
// 	var firstArray = []
// 	var secondArray = []
// 	for (var i=0; i<arr.length; i+=2){
// 		firstArray.push(arr[i])

// 	}
// 	for (var j=1; j<arr.length; j+=2){
// 		secondArray.push(arr[j])
// 	}
// 	if (firstArray.join("") === secondArray.join("")){
// 		return true
// 	}
// 	else{
// 		return false
// 	}
// }
// var or = function(arr){
// 	var check
// 	for (var i =0; i<arr.length; i++){
// 		if (arr[i] === true){
// 			check = true
// 		}
// 	}
// 	if(check === undefined){
// 		check = false
// 	}
// 	return check 
// }
// var unique = function(namesArray){
//     var namesObj = {}
//     namesArray.forEach(function(element){
//         namesObj[element] = element
//     })
//     // console.log(namesObj)
//     var output = []
//     // this creates a variable called key. be sure to use var!
//     for ( var key in namesObj ) {
//         output.push(key)
//     }
//     return output
// }
