Array.prototype.customEvery = function(every) { // եթե գոնե մեկը false-  է, ուրեմն մեթոդը կվերադարձնի false;
  for (let i = 0; i < this.length; i++) {
    if (!every(this[i], i, this)) {
      return false;
    }
  }
  return true;
}

const nums = [2, 4, 6];

const allEven = nums.customEvery(n => n % 2 === 0);
console.log(allEven);
