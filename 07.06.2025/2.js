Array.prototype.customMap = function(myMap){
    const result = [];
    for(let i = 0; i < this.length; i++){
        const mapValue = myMap(this[i],i,this);
        result.push(mapValue);
    }
    return result;
}

const nums = [2,4,6,8];

const art = nums.customMap(function(value){
    return value * 2;
})
console.log(art)


