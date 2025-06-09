Array.prototype.customFilter = function(filter){
    const result  = [];
    for(let i = 0; i < this.length; i++){
        if(filter(this[i],i, this)){
            result.push(this[i]);
        }
    }
    return result;
}


const numbers = [1, 2, 3, 4, 5,6];

const even = numbers.customFilter(function(num) {
  return num % 2 === 0;
})

console.log(even);
