function fn(num,target){
    return num === target;
}


function customIndexOf(arr,target,callback){
    for(let i = 0; i < arr.length; ++i){
        if((callback(arr[i],target))){
                return i;
        }
    }
    return -1;
}


const arr = [1,2,3,4,5];
const find = customIndexOf(arr,5,fn)
console.log(find);


// Array.prototype.customIndexOf = function(searchElement, fromIndex = 0) {
//   for (let i = fromIndex; i < this.length; i++) {
//     if (this[i] === searchElement) {
//       return i;
//     }
//   }
//   return -1;
// }

// const chars = ['a', 'b', 'c', 'd', 'b'];

// console.log(chars.customIndexOf('b')); // 1
// console.log(chars.customIndexOf('b', 2)); // search from 2-nd index and search b 
// console.log(chars.customIndexOf('x')); // haven't... so return -1
