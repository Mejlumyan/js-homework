
function foo(item,index){
    return item * index;
    
}function customMap(arr,callback){
    let result =[];
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] % 2 == 0){
        result.push(callback(arr[i],i));
    }
    }
    return result;
}

const arr = [2,4,5,7,8];
const bazm = customMap(arr,foo);
console.log(bazm);

// Array.prototype.customMap = function(myMap){
//     const result = [];
//     for(let i = 0; i < this.length; i++){
//         const mapValue = myMap(this[i],i,this);
//         result.push(mapValue);
//     }
//     return result;
// }

// const nums = [2,4,6,8];

// const art = nums.customMap(function(value){
//     return value * 2;
// })
// console.log(art)


