Array.prototype.customSome = function(mySome) {   // եթե true գոնե մեկ տարրի համար, 
                                                  // ապա մեթոդը return կանի true
  for (let i = 0; i < this.length; i++) {
    if (mySome(this[i], i, this)) {
      return true;
    }
  }
  return false;
}


const nums = [1, 3, 5, 6];

const hasEven = nums.customSome(n => n % 2 === 0);
console.log(hasEven);
