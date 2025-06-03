
function targetIndex(arr, target){
	for(let i = 0; i < arr[i]!== undefined; ++i){
		if(arr[i] === target){
			return i;
			}
		}
		return -1;
}

let arr = [1,2,4,6,8,9,24];

let target = 9;

console.log(targetIndex(arr,target));
console.log(arr.indexOf(target));
