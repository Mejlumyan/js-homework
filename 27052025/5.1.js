function concatArr(arr1,arr2){
	let arr3 = [];
	for(let i = 0; arr1[i] !== undefined; ++i){
		arr3 += arr1[i];
		}
	for(let i  = 0; arr2[i] !== undefined; ++i){
		arr3 += arr2[i];
		}
		return arr3;
	}


let array1 = [1,2];
let array2 = [3,4];
let array3 = [];

array3 = concatArr(array1,array2);
console.log(array3);


