//Reverse each word separately from the given string sentence .
Input: str = "Practice makes a man perfect."
Output: "ecitcarP sekam a nam tcefrep"

function reverseWords(str) {
    let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
}
console.log(reverseWords('Practice makes a man perfect'));

// the given string are revrerseing the string
var arr = "prashant hardas";
console.log(arr.split("").reverse("").join(""))

// Write a JavaScript function that reverse a number.
Input: x = 32243;
Output: y = 34223;

function reverseNumber(x) {
    let result = Number(String(x).split('').reverse().join(''));
    return result;
}
console.log(reverseNumber(32243))






// the given arr find the index of 11
var linear = [9, 8, 7, 91, 11];
var n = 11;
var output = 4;
for (let i = 0; i < linear.length; i++) {
    if (linear[i] === n) {
        console.log(i)
    }
}

// the given arr find the index of 3
var global = [1, 2, 3, 7, 3, 2, 3];
var n = 3;
var output = [2, 4, 6];
for (let i = 0; i < global.length; i++) {
    if (global[i] === n) {
        console.log(i)
    }
}

//the given arr find the index of 5
var arr = [1, 2, 3, 4, 5, 6, 7];
var n = 4;
var output = 6;
for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(i) === n) {
        console.log(i)
    }
}


//sorting algorithum
var number = [10, 9, 2, 20, 1, 3];
var n = 3;
for (let i = 0; i < number.length; i++) {
    if (number[i] === n) {
        console.log(i)
    }
}




function ParenthesisChecker(str) {
    let stack = [];
    openingBracket = ['{', '(', '[']
    closingBracket = ['}', ')', ']']

    for (let i = 0; i < str.length; i++) {
        let currentBracket = str[i]
        if (openingBracket.includes(currentBracket)) {
            stack.push(currentBracket)
        }
        else if (closingBracket.includes(currentBracket)) {
            let lastBracket = stack.pop()
            if (!lastBracket || openingBracket[lastBracket] !== closingBracket[currentBracket]) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}
console.log(ParenthesisChecker('{([])}'))
console.log(ParenthesisChecker('([]'))



// Push zero to the en of array
function pushZerotoEnd(arr) {
    var n = arr.length;
    var count = 0;
    for (var i = 0; i < n; i++) {
        if (arr[i] != 0) {
            arr[count] = arr[i];
            count++;
        }
    }

    for (var j = count; j < n; j++) {
        arr[count] = 0;
        count++;
    }
}

let arr = [1, 0, 4, 0, 2, 2, 0, 3, 0];
pushZerotoEnd(arr);
console.log(arr);



function reverse(arr, s, e) {
    while (s < e) {
        let temp = arr[s];
        arr[s] = arr[e]
        arr[e] = temp
        s++;
        e--;
    }
}

function roate(arr, k) {
    if (k == 0 || arr.length == 1) {
        return arr;
    }
    reverse(arr, 0, arr.length - 1)
    reverse(arr, 0, k - 1)
    reverse(arr, k, arr.length - 1)
}

let arr1 = [1, 2, 3, 4, 5];
let k = 3;
roate(arr1, k);
console.log(arr1);



var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9, 10];

var newarr = array1.concat(array2);
console.log(newarr.reverse())




