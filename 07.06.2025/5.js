function fn(item){
    return item > 5;
}

function customEvery(arr,callback){
    for(let i = 0; i < arr.length; ++i){
        if(!callback(arr[i])){
            return false;
        }
    }
    return true;
}

const arr = [3,4,6,7,8,9]; 
const isBigger = customEvery(arr,fn);
console.log(isBigger); // false 3,4 < 5;

// Array.prototype.customEvery = function(every) { // եթե գոնե մեկը false-  է, ուրեմն մեթոդը կվերադարձնի false;
//   for (let i = 0; i < this.length; i++) {
//     if (!every(this[i], i, this)) {
//       return false;
//     }
//   }
//   return true;
// }

// const nums = [2, 4, 6];

// const allEven = nums.customEvery(n => n % 2 === 0);
// console.log(allEven);
