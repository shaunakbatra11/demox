// MAP , FILTER , REDUCE 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newarr = [];

// for (let i = 0; i < arr.length; i++) {
//     newarr.push(arr[i] * 2);
//     }
// console.log(newarr);

// map . can also put the function in the argument itself
function transform(item) {
    return item * 2;
} 

const ans = arr.map(transform);
console.log(ans);


// filter
function isEven(item) {
    return item % 2 === 0;
}

const even = arr.filter(isEven);
console.log(even);