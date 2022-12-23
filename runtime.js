const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);





// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results

perf.start();   
doublerAppend(tinyArray);
let resultsAppendTwo = perf.stop(); 

perf.start();   
doublerAppend(smallArray);
let resultsAppendThree = perf.stop(); 

perf.start();   
doublerAppend(mediumArray);
let resultsAppendFour = perf.stop(); 

perf.start();   
doublerAppend(largeArray);
let resultsAppendFive = perf.stop();




// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

perf.start();
doublerInsert(tinyArray);
let resultsInsertTwo = perf.stop();

perf.start();
doublerInsert(smallArray);
let resultsInsertThree = perf.stop();

perf.start();
doublerInsert(mediumArray);
let resultsInsertFour = perf.stop();

perf.start();
doublerInsert(largeArray);
let resultsInsertFive = perf.stop();





console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords); 
console.log("append", resultsAppend.preciseWords);

console.log('Results for the tinyArray')
console.log("insert", resultsInsertTwo.preciseWords);
console.log("append", resultsAppendTwo.preciseWords);

console.log('Results for smallArray')
console.log("insert", resultsInsertThree.preciseWords);
console.log("append", resultsAppendThree.preciseWords);

console.log('Results for the mediumArray')
console.log("insert", resultsInsertFour.preciseWords);
console.log("append", resultsAppendFour.preciseWords);

console.log('Results for the largeArray');
console.log("insert", resultsInsertFive.preciseWords);
console.log("append", resultsAppendFive.preciseWords);




