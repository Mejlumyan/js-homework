Array.prototype.customIndexOf = function(searchElement, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
}

const chars = ['a', 'b', 'c', 'd', 'b'];

console.log(chars.customIndexOf('b')); // 1
console.log(chars.customIndexOf('b', 2)); // search from 2-nd index and search b 
console.log(chars.customIndexOf('x')); // haven't... so return -1
