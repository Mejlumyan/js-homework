function strSize(str){
	let count = 0;
	while(str[count] !== undefined){
			count++;
		}
		return count;
	}


let str = "Hello World!";
console.log(str.length);
console.log(strSize(str));
