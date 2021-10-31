// const arrayNum = [1,2,3];
//  #1

// const arrNum = [4,5,6];

// arrayNum.concat(arrNum);
// console.log(arrayNum);

// #2

// arrayNum.reverse();
// console.log(arrayNum);

// #3

// arrayNum.push(4,5,6);
// console.log(arrayNum);

// #4

// arrayNum.unshift(4,5,6);
// console.log(arrayNum);

// #5 #6

// const arr = ['js','css','jq'];

// console.log(arr[0]);
// console.log(arr[arr.length-1]);

// #7-12

// const arr = [1,2,3,4,5];

// console.log(arr.slice(0,3));

// console.log(arr.slice(3,5));

// arr.splice(0,3,1)
// console.log(arr);

// console.log(arr.slice(1,4));


// arr.splice(3,0,'a','b','c');
// console.log(arr);

// 12 version 1
// arr.splice(1,0,'a','b');
// arr.splice(6,0,'c');
// arr.splice(8,0,'e');
// console.log(arr);

// 12 version 2
// arr.splice(0,5,1,'a','b',2,3,4,'c',5,'e')
// console.log(arr);

// #13

// function compareNumeric(a,b){
//     if (a > b) return 1;
//     if (a === b) return 0;
//     if (a < b) return -1;
// }

// const arr = [3,4,1,2,7];

// console.log(arr.sort(compareNumeric));
// console.log(arr);

// #14 & #15
// const arr = [5,6,7,8,9];

// const result = arr.reduce((sum,current) => sum + current,0);
// alert(result);

// const result = arr.forEach(function(item,index,array){
//     array[index] = item ** 2;
// })

// const result = arr.forEach((item,index,array) => array[index] = item ** 2);
// console.log(arr);

// #16 & #17
// const arr = [1,-3,5,6,-7,8,9,-11];

// const result = arr.filter(item => item < 0);
// const result = arr.filter(item => item % 2 === 0);
// console.log(result);

// #18
// const arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// const result = arr.filter(item => item.length > 5);
// console.log(result);

// #19
// const arr = [1, 2, [3, 4], 5, [6, 7]];

// const result = arr.filter(item => item = Array.isArray(item));
// console.log(result);

//  #20

const arr = [5,-3, 6,-5, 0,-7, 8, 9];

// const result = arr.filter(item => item < 0);
// console.log(result.length);

const result = arr.reduce(function(accum,item,index,array){
    if (array[index] < 0) {
        item = 1;
    }
    if (array[index] > 0) {
        item = 0;
    }
    return accum + item;
},0);

console.log(result);


















