const arrListOne = [1,2,3,4,5,6,7,8,9,10]
const arrListTwo = [2, -2]
const arrListThree = [1, 2, 3, 4, 77, 55, 103, -101, -55]

// for (let i = arrListOne.length - 1; i >= 0; i--){
//     console.log(arrListOne[i])
// }

// for (let i = 0; i < arrListOne.length; i++){
//     console.log(arrListOne[i])
// }

// Sum Zero
function addThemUp (arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = arr.length - 1; j >= 0; j--){
            if (arr[j] + arr[i] == 0){
                return console.log("true")
            }
        }
    }
    return console.log("false");
};

addThemUp(arrListOne)
addThemUp(arrListTwo)
addThemUp(arrListThree)
// this should be an O(n^2)


console.log("----------------------")

// Unique Characters
// function modifyString(str) {
//     return str.toLowerCase()
// }

// function hasUniqueChars(str) {
//     str = modifyString(str);
// }
function hasUniqueChars(str){
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            return false;
        }
    }
    return true;
}

hasUniqueChars("Garrett");
hasUniqueChars("Trina");
hasUniqueChars("Robert")
hasUniqueChars("Sphinx of black quartz judge my vow")