const arrListOne = [1,2,3,4,5,6,7,8,9,10]
const arrListTwo = [2, -2]
const arrListThree = [1, 2, 3, 4, 77, 55, 103, -101, -55]
const arrFour = [1,2,3,0,6,7]

// Sum Zero
function addThemUp (arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = arr.length - 1; j >= 0; j--){
            if (arr[j] + arr[i] == 0 && i !== j){
                return console.log("true")
            }
        }
    }
    return console.log("false");
};

// addThemUp(arrListOne)
// addThemUp(arrListTwo)
// addThemUp(arrListThree)
// addThemUp(arrFour)
// this should be an O(n^2)


console.log("----------------------")

// Unique Characters

function mondifyString(str) {
    return str.toLowerCase().split("")
}

function hasUniqueChars (input) {
   const str = mondifyString(input)
    for (let i = 0; i < str.length; i++){
        for(let j = i+1; j < str.length; j++){
            if (str[j] === str[i]) {
                return console.log("false")
            } 
        }
    } return console.log("true")
}

// hasUniqueChars("Garrett");
// hasUniqueChars("Trina");
// hasUniqueChars("Robert")
// hasUniqueChars("Sphinx of black quartz judge my vow")
// this function should also be O(n^2)

// Pangram sentence

function isPangram (str) {

}