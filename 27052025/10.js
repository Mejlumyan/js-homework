function sumOfArrEll(arr){
	let sum = 0;
	for(let i = 0; arr[i] !== undefined; ++i){
		sum += arr[i];
		}
		return sum;
	}


let arr = [34,56,77];
console.log(sumOfArrEll(arr));

/*
when we have another type expect number


function sumOfArrEl(arr)
{
    let sum = 0;
    for(let i = 0; arr[i] !== undefined; ++i)
    {
        let num = arr[i];
        if(typeof(num) === "number"){
            sum += num;
        }
    }
    return sum;
}

let arr = ["World", 0, 2, 4];


console.log(sumOfArrEll(arr)); 


--------------------------------
by this case i bring only numbers
---------------------------------
*/
