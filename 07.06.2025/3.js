function foo(item){
    if(item % 2 == 0){
        return item;
    }
}

function customFilter(arr,callback){
    let result = [];
    for(let i = 0; i < arr.length;++i){
        if(callback(arr[i])){
            result.push(callback(arr[i]))
        }
    } 
    return result;
}

const arr = [2,3,4,5,6,7,8,9];

const zuyg =customFilter(arr,foo);
console.log(zuyg);


// Array.prototype.customFilter = function(filter){
//     const result  = [];
//     for(let i = 0; i < this.length; i++){
//         if(filter(this[i],i, this)){
//             result.push(this[i]);
//         }
//     }
//     return result;
// }


// const numbers = [1, 2, 3, 4, 5,6];

// const even = numbers.customFilter(function(num) {
//   return num % 2 === 0;
// })

// console.log(even);
