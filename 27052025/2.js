function customUpperCase(str) {
  let result = "";

  for (let i = 0; str[i] != undefined; i++) {
    const ascii  = str.charCodeAt(i);

    if (ascii >= 97 && ascii <= 122) {
      result += String.fromCharCode(ascii - 32);
    } else {
      result += str[i]; 
    }
  }

  return result;
}

let str = "Hello JavaScript!";

console.log(customUpperCase(str));

console.log(str.toUpperCase());
