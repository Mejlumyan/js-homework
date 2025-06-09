Array.prototype.customForEach = function(myForEach){
    for(let i  = 0; i < this.length; i++ ){
        myForEach(this[i], i , this);
    }
}


const numbers = [54,6,43,434,23,67,89];
numbers.customForEach(function(numbers,index){
    console.log(`index: ${index}  number: ${numbers}`)
})