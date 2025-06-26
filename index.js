
// // customForEach with seperate collback------------------------------


// // function fn(item,index){
// //     console.log(`index: ${index} -- item ${item}`)
// // }

// // function customForEach(arr,callback){
// //     for(let i = 0; i < arr.length; i ++){
// //         callback(arr[i],i,arr);
// //     }
// // }

// // const arr = [3,5,6,7,78,8];
// // customForEach(arr,fn);


// // custom Map with separate callback --------------------------
// // element * index

// // function fn(num,i){
// //     return num * i
// // }

// // function customMap(arr,callback){
// //     let result = [];
// //     for(let i = 0 ; i < arr.length; ++i){
// //         result.push(callback(arr[i],i,arr));
// //     }
// //     return result;
// // }


// // const arr = [2,3,4,56,6];
// // const bazm = customMap(arr,fn);
// // console.log(bazm);


// // custom filter with separate callback --------------------------

// // function fn(num){
// //     return num % 2 === 0;
// // }

// // function customFilter(arr,callback){
// //     let result = [];
// //     for(let i = 0; i < arr.length;++i){
// //         if(callback(arr[i],i,arr)){
// //             result.push(arr[i]);
// //         }
// //     }
// //     return result;
// // }

// // const arr = [2,3,4,5,6];
// // const isEven = customFilter(arr,fn);
// // console.log(isEven);


// // custom SOME with separate callback --------------------------

// // function fn(num){
// //     return num % 2 === 0;
// // }

// // function customSome(arr,callback){
// //     for(let i = 0; i < arr.length;++i){
// //         if(callback(arr[i],i,arr)){
// //             return true;
// //         }
// //     }
// //     return false;
// // }

// // const arr = [2,3,4,5,6,7];
// // const isEven= customSome(arr,fn);
// // console.log(isEven);


// // custom EVERY with separate callback --------------------------


// // function fn(num){
// //     return num % 2 === 0;
// // }

// // function customEvery(arr,callback){
// //     for(let i = 0; i < arr.length;++i){
// //         if(!callback(arr[i],i,arr)){
// //             return false;
// //         }
// //     }
// //     return true;
// // }


// // const arr = [2,3,4,5,6,7];
// // const isEvery = customEvery(arr,fn);
// // console.log(isEvery);

// // custom indexOf with separate callback --------------------------


// // function fn(value,target){
// //     return value === target;
// // }

// // function customIndexOf(arr,target,callback){
// //     for(let i = 0; i < arr.length; ++i){
// //         if(callback(arr[i],target)){
// //             return i;
// //         }
// //     }
// //     return -1;
// // }

// // const arr = [2,3,4,5,6,];
// // const find = customIndexOf(arr,3,fn);
// // console.log(find);


// // --------------------------

// // function fn(item){
// //     return  item === 'hello';
// // }

// // function customFilter(arr,callback){
// //     let result = [];
// //     for(let i = 0; i < arr.length;++i){
// //         if(callback(arr[i],i)){
// //             result.push(arr[i]);
// //         }
// //     }
// //     return result;
// // }

// // const arr = [3,4,5,'hello','hi','hello'];
// // isHello = customFilter(arr,fn);
// // console.log(isHello);

// // function fn(item){
// //     return item * 2;
// // }

// // function customMap(arr,callback){
// //     let result = [];
// //     for(let i = 0; i < arr.length;++i){
// //         if(callback(arr[i],i)){
// //             result.push(callback(arr[i],i));
// //         }
// //     }
// //     return result;
// // }


// // const arr = [2,3,4,5];
// // const bazm = customMap(arr,fn);
// // console.log(bazm);

// // function fn(item){
// //     return item % 2 === 0;
// // }

// // function customSome(arr,callback){
// //     for(let i = 0; i < arr.length; ++i){
// //         if(callback(arr[i],i)){
// //             return true;
// //         }
// //     }
// //     return false;
// // }

// // const arr = [5,3,7,5];
// // const isEven = customSome(arr,fn);
// // console.log(isEven);


// // function fn(item){
// //     return item % 2 === 0;
// // }

// // function customEvery(arr,callback){
// //     for(let i = 0; i < arr.length;++i){
// //         if(!callback(arr[i],i)){
// //             return false;
// //         }
// //     }
// //     return true;
// // }

// // const arr = [2,6,4,8,6];
// // const isAllEven = customEvery(arr,fn);
// // console.log(isAllEven);



// // function fn(item,target){
// //     return item === target;
// // }

// // function customIndexOf(arr,target,callback){
// //     for(let i = 0; i < arr.length;++i){
// //         if(callback(arr[i],target)){
// //             return i;
// //         };
// //     }
// // }

// // const arr = [2,3,4,5,6];
// // const isTarget = customIndexOf(arr,5,fn);
// // console.log(isTarget);


// // function fn(item,index){
// //     console.log(`index: ${index} -- item: ${item}`)
// // }


// // function customForEach(arr,callback){
// //     for(let i = 0; i < arr.length;++i){
// //         callback(arr[i],i);
// //     }
// // }

// // const arr = [2,3,4,5,6];
// // customForEach(arr,fn);


// // function fn(num,index){
// //     return index * num;
// // }

// // function customMap(arr,callback){
// //     let result = [];
// //     for(let i = 0; i < arr.length;++i){
// //       result.push(callback(arr[i],i));
        
// //     }
// //     return result
// // }

// // const arr = [2,3,4,5,6];
// // const bazm = customMap(arr,fn);
// // console.log(bazm);



// // function fn(item){
// //     console.log(`item: ${item}`)
// // }

// // function customForEach(arr,callback){
// //     for(let i = 0; i < arr.length;++i){
// //         callback(arr[i],i);
// //     }
// // }

// // const arr = [2,3,4,5];
// // customForEach(arr,fn);





// // function fn(item){
// //     return  item % 2 === 0;
// // }

// // function customFilter(arr,callback){
// //     let result = [];
// //     for(let i = 0; i < arr.length;++i){
// //         if(callback(arr[i],i)){
// //             result.push(arr[i])
// //         }
// //     }
// //     return result; 
// // }

// // const arr = [2,3,4,5,6];
// // const isEven = customFilter(arr,fn);
// // console.log(isEven);


// // function fn(item){
// //     return item * 2 === 24;
// // }

// // function customSome(arr,callback){
// //     for(let i = 0; i < arr.length; ++i){
// //         if(callback(arr[i])){
// //             return true;
// //         }
// //     }
// //     return false;
// // }

// // const arr = [2,3,4,123];
// // const sm = customSome(arr,fn);
// // console.log(sm);


// // function fn(item,index){
// //     console.log(`index: ${index} -- item ${item}`);
// // }


// // function customForEach(arr,callback){
// //     for(let i = 0; i < arr.length; ++i){
// //         callback(arr[i],i);
// //     }
// // }

// // const arr = [2,3,4,5,6];
// // customForEach(arr,fn);


// // function fn(item,index){
// //     return index * item;
// // }



// // function customMap(arr,callback){
// //     let result = [];
// //     for(let i = 0; i < arr.length; ++i){
// //         result.push(callback(arr[i],i));
// //     }
// //     return result;
// // }

// // const arr = [2,3,4,5,6];
// // const bazm = customMap(arr,fn);
// // console.log(bazm)


// // function fn(item){
// //     return item % 2 === 1;
// // }

// // function customSome(arr,callback){
// //     for(let i = 0; i <arr.length;++i){
// //         if(callback(arr[i])){
// //             return true;
// //         }
// //     }
// //     return false;
// // }

// // const arr = [2,2,4,8,6,8];
// // const isOdd = customSome(arr,fn);
// // console.log(isOdd);


// //--------------------------------------------------------------

// // let result = ''
// // function fn(item){
// //     result += item.toUpperCase();
// // }

// // function customForEach(arr,callback){
// //     for(let i = 0; i < arr.length;++i){
// //         callback(arr[i],i);
// //     }
// //         console.log(result);
// // }

// // const arr = 'hello world';
// // customForEach(arr,fn);



// //---------

// // function fn(item,index){
// //     return index * item;
// // }

// // function customMap(arr,callback){
// //     let result = [];
// //     for(let i = 0; i < arr.length;++i){
// //         result.push(callback(arr[i],i));
// //     }
// //      return result;
// // }

// // const arr = [2,3,4,5,6];
// // const bzm = customMap(arr,fn);
// // console.log(bzm);


// // function fn(item){
// //     return typeof item === "number" && item > 10;
// // }

// // function customFilter(arr,callback){
// //     let result = [];
// //     for(let i  = 0; i < arr.length;++i){
// //         if(callback(arr[i])){
// //             result.push(arr[i]);
// //         }
// //     }
// //     return result;
// // }


// // const arr = [5, 'a', 15, 9, 22, 'hello', 11];
// // const fnd = customFilter(arr,fn)
// // console.log(fnd);



// // function fn(item){
// //     return item >= 18;
// // }

// // function customSome(arr,callback){
// //     for(let i = 0; i < arr.length; ++i){
// //         if(callback(arr[i])){
// //             return true;
// //         }
// //     }
// //     return false;
// // }

// // const arr = [2,3,8,9];
// // const age = customSome(arr,fn);
// // console.log(age);



// //--------------------------------

// // function fn(item){
// //     return typeof item === "string" && item.length > 3;
// // }

// // function customEvery(arr,callback){
// //     for(let i = 0; i < arr.length;++i){
// //         if(!callback(arr[i])){
// //             return false;
// //         }
// //     }
// //     return true;
// // }

// // const arr = ['h', 'world', 'openai'];
// // const evn = customEvery(arr,fn);
// // console.log(evn);




// //--------------------------------------------------------------

// // function fn(item,target){
// //     return item === target;
// // }

// // function customIndexOf(arr,target,callback){
// //     for(let i = 0; i < arr.length;++i){
// //         if(callback(arr[i],target)){
// //         return i;
// // }
// //     }
// //     return -1;
// // }

// // const arr = ['js', 'react', 'node', 'react'];
// // const idx = customIndexOf(arr, 'react',fn);
// // console.log(idx); 


// // function fn(item){
// //     return item.toUpperCase();
// // }

// // function customMap(arr,callback){
// //     let res = [];
// //     for(let i = 0; i < arr.length;++i){
// //             res.push(callback(arr[i]));
// //        } 
// //        return res;
// //     }

// // const arr = ['js', 'react', 'node'];
// // const mec = customMap(arr,fn);
// // console.log(mec);


// // function fn(item,index){
// //     console.log(`index: ${index} -- item:${item}`)
// // }

// // function customForEach(arr,callback){
// //     for(let i = 0; i < arr.length;++i){
// //         callback(arr[i],i);
// //     }
// // }

// // const arr = [2,3,4,5,6];
// // customForEach(arr,fn);


// // function fn(item){
// //     return item * 2;
// // }

// // function customMap(arr,callback){
// //     let result = [];
// // for(let i = 0; i < arr.length;++i){
// //     callback(arr[i])
// //         result.push(callback(arr[i]));
    
// // }
// //     return result;
// // }

// // const arr = [2,34,4,5,6];
// // const isEven = customMap(arr,fn);
// // console.log(isEven)


// // function fn(item,target){
// //     return item === target;
// // }

// // function customIndexOf(arr,target,callback){
// //     for(let i = 0; i < arr.length;++i){
// //         if(callback(arr[i],target)){
// //             return i;
// //         }
// //     }
// //     return -1;
// // }

// // const arr = [2,3,4,5,6];
// // const find = customIndexOf(arr,4,fn);
// // console.log(find);

// // function fn(item){
// //     return item * 2 === 12;
// // }

// // function customFilter(array,callback){
// //     let result = [];
// //     for(let i = 0; i < array.length;++i){
// //         if(callback(arr[i],i)){
// //             result.push(arr[i]);
// //         }
// //     }
// //     return result;
// // }

// // const arr = [2,3,4,5,6,7,6,8];
// // const isEven= customFilter(arr,fn);
// // console.log(isEven)


// // function fn(item){
// //     return item < 0;
// // }
// // function customSome(arr,callback){
// //     for(let i = 0; i < arr.length;++i){
// //         if(callback(arr[i])){
// //            return true
// //         }
// //     }
// //     return false;
// // }

// // const arr = [-2,3,4,5,-6];
// // const isNeg = customSome(arr,fn);
// // console.log(isNeg);

// // function fn(item){
// //     return item > 5;
// // }

// // function customEvery(arr,callback){
// //     for(let i = 0; i < arr.length; ++i){
// //         if(!callback(arr[i])){
// //             return false;
// //         }
// //     }
// //     return true;
// // }

// // const arr = [3,4,6,7,8,9]; 
// // const isMec = customEvery(arr,fn);
// // console.log(isMec); // false 3,4 < 5;

// // function fn(item,index){
// //     console.log(`index: ${index}  --- item: ${item}`)
// // }

// // function customForEach(arr,callback){
// //     for(let i = 0; i < arr.length;++i){
// //         callback(arr[i],i);
// //     }
// // }

// // const arr = [2,3,4,5,6];
// // customForEach(arr,fn);


// //-------------------------------------------------

// // function fn(item,target){
// //     return item === target;
// // }

// // function customIndexOf(arr,target,callback){
// //     for(let i = 0; i < arr.length;++i){
// //         if(callback(arr[i],target)){
// //                 return i;
// //         }
// //     }
// //     return -1;
// // }

// // const arr = [2,3,4,5,6];
// // const res = customIndexOf(arr,4,fn);
// // console.log(res);


// // let book = {
// //     "main tittle" : "JavaScript",
// //     "sub-title" : "The Definity JS",
// //     for: "all audiences",
// //     authors: [
// //         {name: "David", surname: "Flanagan"}, 
// //         {name: "Kyle", surname: "Simpson"}
// //     ]

// // };

// // for (let key in book.authors[0]) {
// //     let author = book.authors[0]
// //     console.log(author[key])
// // }
// // console.log(book.authors[0].name);


// // function fn(item,index){
// //     console.log(`index: ${index} -- item${item}`)
// // }

// // function customForEach(arr,callback){
// //     for(let i = 0; i < arr.length; ++i){
// //         callback(arr[i],i);
// //     }
// // }

// // const arr = [2,3,4,5,6];
// // customForEach(arr,fn);


// // function fn(num){
// //     return num * 2;
// // }


// // function customMap(arr,callback){
// //     let result = [];
// //     for(let i = 0; i < arr.length;++i){
// //         callback(arr[i]);
// //         result.push(callback(arr[i]));
// //     }
// //     return result;
// // }


// // const arr = [2,3,4,5,6];
// // const bazm  = customMap(arr,fn);
// // console.log(bazm);


// // function fn(item){
// //     console.log(`item ${item}`)
// // }

// // function customForEach(arr,callback){
// //     for(let i = 0; i < arr.length; ++i){
// //         callback(arr[i])
// //     }
// // }

// // const arr = [1,2,3,4,5];
// // customForEach(arr,fn)

// // const person = {
// //     name: "Gor",
// //     age : 32,
// //      foo(){
// //         return ("wtf")
// //     }
// // }

// // const woman = Object.create(person)
// // console.log(woman.foo());


// // function Car(model,year) {
// //     this.model =model;
// //     this.year= year;
// // }

// // const myCar = new Car("BMW", "1993");
// // console.log(myCar["model"]) // myCar.model


// // function fn(num){
// //     return num *  2;
// // }


// // function customMap(arr,callback){
// //     let result = [];
// //     for(let i = 0; i < arr.length; ++i){
// //         callback(arr[i]);
// //         result.push(callback(arr[i]));
// //     }
// //     return result
// // }

// // const arr = [2,3,4,5,6]

// // const bazm = customMap(arr,fn);
// // console.log(bazm);


// // const person1 = {
// //         name : 'Gor',
// //         age:  32
// // }
// // const person2 = {
// //         name: 'Ani',
// //         age:  33
// // }

// // const mergedOne = Object.assign({}, person1,person2);
// // console.log(mergedOne);

// // function deepCopy(obj){
// //     if(obj === null || typeof obj !== 'object'){
// //         return obj;
// //     }

// //     if(Array.isArray(obj)){
// //         return obj.map(i => deepCopy(i));
// //     }

// //     const copy = {};
// //     for(let key in obj){
// //         if(obj.hasOwnProperty(key)){
// //             copy[key] = deepCopy(obj[key]);
// //         }
// //     }
// //         return copy;
// // }

// // const person = {
// //     name: "Gor",
// //     age: 32,
// //     sex: "male",
// //     hobbies : ['reading', 'gym', 'gaming']
// // }

// // const copy = deepCopy(person);

// // copy.hobbies.push('coding');

// // console.log(copy);// deep copy. I just add hobby for Gor for now.
// // copy.name = "Hayk";// Gor > Hayk
// // console.log(person);
// // console.log(copy);
// // console.log(Object.values(person));
// // console.log(Object.values(copy));


// // const student = {
// //     name : "Hayk",
// //     age : 23
// // }

// // Object.freeze(student);

// // delete student.name;
// // console.log(student);


// // const keys = ['name', 'age','gender'];
// // const values = ['Gor', 32, 'male'];

// // const obj = {};

// // keys.forEach((key, index) => {
// //   obj[key] = values[index];
// // });

// // console.log(obj);

// // const person1 = {
// //          name : 'Gor',
// //          age:  32
// // }

// // const person2 = {
// //     name: "Ann",
// //     age: 29
// // }

// // const mergedOne = Object.assign({},person1,person2);
// // console.log(mergedOne);


// // function deepCopy(obj){
// //     if(obj === null || typeof obj !== "object"){
// //         return obj;
// //     }

// //     if(Array.isArray(obj)){
// //         return obj.map(item => deepCopy(item));
// //     }

// //     const copy = {};
// //     for(key in obj){
// //         if(obj.hasOwnProperty(key)){
// //             copy[key] = deepCopy(obj[key]);
// //         }
// //     }
// //     return copy;
// // }

// // const person = {
// //     name: 'Gor',
// //     age : 32,
// //     sex: 'male'
// // }

// // const person3 = new Object(person);

// // console.log(person3);

// // person3.name = "Vladlen"
// // console.log(person3);


// // function Car(mark,model,year){
// //     this. mark = mark,
// //     this.model = model,
// //     this.year = year;
// // }

// // const myCar = new Car("BMW",'hz', 1993);
// // myCar.mark = 'Merc';
// // console.log(myCar)

// // const urCar = new Car('Eraz','hz',2931);
// // console.log(urCar);


// // const Person = {
// //     name: "Grno",
// //     age : 123
// // }

// // const man = Object.create(Person);
// // console.log(man['name']);// man.name
// // man.name = "zavgen";
// // console.log(man.name);
// // console.log(Person.name);

// // function fn(item){
// //     console.log(`item : ${item}`)
// // }

// // function customForEach(arr,callback){
// //     for(let i = 0; i < arr.length; ++i){
// //         callback(arr[i])
// //     }
// // }

// // const arr = [2,3,4,56,6];
// // customForEach(arr,fn);


// // function fn(num){
// //     return num * 2;
// // }

// // function customMap(arr,callback){
// //     let result = [];
// //     for(let i  = 0; i < arr.length;++i){
// //        result.push(callback(arr[i]));
// //     }
// //             return result;
// // }

// // const arr = [1,2,3,4,5,6];
// // const bazm = customMap(arr,fn);
// // console.log(bazm);


// // function fn(num,target){
// //     return num === target;
// // }


// // function customIndexOf(arr,target,callback){
// //     for(let i = 0; i < arr.length; ++i){
// //         if((callback(arr[i],target))){
// //                 return i;
// //         }
// //     }
// //     return -1;
// // }


// // const arr = [1,2,3,4,5];
// // const find = customIndexOf(arr,5,fn)
// // console.log(find);



// // const person = {
// //  name : "gor",
// //  age:  23
// // }

// // const p2 = Object.create(person);

// // console.log(person.name)
// // console.log(Object.getPrototypeOf(p2));
// // console.log(Object.getOwnPropertyNames(p2));
// // p2.name = 'Vahe';
// // p2.age= 32;
// // p2.sex = 'male'
// // console.log(Object.getOwnPropertyNames(p2));

// // ------------------------------------------------------------------------------

// // function sum() {
// //     let a = 5;

// //     function sum1() {
// //         let a = 10;
// //         console.log("inner a:", a); 
// //     }

// //     sum1(); 
// //     console.log("outer a:", a);
// // }

// // sum();


// // ------------------------------------------------------------------------------

// // function sayHi(){
// //     console.log(this); 
// // }
// // sayHi(); undefined(useStrict) or window. this > window

// // ------------------------------------------------------------------------------

// // const person = {
// //     name : "Gor",
// //     sayHi(){
// //         console.log(this.name); // this > person
// //     }
// // }

// // person.sayHi();


// // ------------------------------------------------------------------------------



// // function Person(name) {
// //     this.name = name;
// // }

// // const p = new Person("Gor"); // Եթե ֆունկցիան կանչվում է new-ով, ապա this-ը նոր ստեղծված օբյեկտն է։
// // console.log(p.name);


// // ------------------------------------------------------------------------------

// // function greet(){
// //     console.log("Hello " + this.name);
// // }
// // const user  = {name : "lily"};

// // greet.call(user);
// // greet.apply(user);

// // class Animal {
// //     constructor(name){
// //         this.name = name;
// //     }

// //     speak(){
// //         console.log(this.name + " speaks");
// //     }
// // } 

// // const dog = new Animal("Rex");
// // dog.speak();


// // class Person {
// //     constructor(name,age,sex){
// //         this.name = name;
// //         this.age = age;
// //         this.sex = sex;
// //     }

// //     speak(){
// //         console.log(`${this.name} age is ${this.age} and sex ${this.sex}`);
// //     }
// // }

// // const men = new Person("Gor", 32, "male");
// // const wmen = new Person("Lily", 22, "fmale");

// // men.speak();
// // wmen.speak();


// // class Cats {
// //     constructor(mark,color){
// //         this.mark = mark;
// //         this.color = color;
// //     }
// //     catf(){
// //         console.log(`mark of cat is ${this.mark} and color is ${this.color}`);
// //     }
// // }

// // const cat1 = new Cats("Van","White");
// // cat1.catf();



// // class Person {
// //     constructor(name,age){
// //     this.name = name;
// //     this.age = age;
// // }

// // sayHi(){
// //     console.log(`Hello ${this.name}, u'r age is ${this.age}`);
// // }
// // }

// // const person1 = new Person("Ann", 32);
// // person1.sayHi();


// // function outer() {
// //   var a = 10;

// //   function inner() {
// //     console.log(a);
   
// //   }

// //   inner();
// // }

// // outer();


// // console.log(foo())  // TypeError: foo is not a function

// // var foo = function() {
// //   return 'foo expression'
// // }

// // function foo() {
// //   return 'foo declaration'
// // }

// //console.log(null === null);
// //console.log(typeof typeof 42)
// //console.log(null == 0)// false

// // x = 10; y = 20;
// // [x,y] = [y,x]; //swap
// // console.log(x,y); 20,10

// // let obj = {};
// // let res = obj?.prop?.nested;
// // console.log(res);  undefined

// // let obj = {};
// // let res = obj && obj.prop && obj.prop.nested;
// // console.log(res);անդեֆայնեդ


// // let a = 50;

// // {
// //     var b = a + 10;
// // }

// // console.log(a);
// // console.log(b);


// // let a = 25;

// // function foo(){
// //     console.log(a);
// //     var a = 25;
// // }
// // foo()

// // function foo(){
// //     return 15;
// // }
// // console.log(typeof foo())


// // function foo(item,index){
// //     console.log(`item is : ${item} -- index is: ${index}`)

// // }

// // function customForEach(arr,callback){
// //     for(let i = 0; i < arr.length; ++i){
// //         callback(arr[i],i);
// //     }
// // }
// // let arr = [2,3,4,5,6];
// // customForEach(arr,foo)

// // function foo(item,index){
// //     return item * index;
// // }

// // function customMap(arr,callback){
// //     let result =[];
// //     for(let i = 0; i < arr.length; ++i){
// //         result.push(callback(arr[i],i));
// //     }
// //     return result;
// // }

// // const arr = [2,4,5,7,8];
// // const bazm = customMap(arr,foo);
// // console.log(bazm);


// // function foo(item,index){
// //     return item * index;
// // }

// // function customMap(arr,callback){
// //     let result =[];
// //     for(let i = 0; i < arr.length; ++i){
// //         if(arr[i] % 2 == 0){
// //         result.push(callback(arr[i],i));
// //     }
// //     }
// //     return result;
// // }

// // const arr = [2,4,5,7,8];
// // const bazm = customMap(arr,foo);
// // console.log(bazm);


// // function Person(name,age){
// //     this.name = name;
// //     this.age = age;
// // }

// // const p1 = new Person("Vahe",32);
// // console.log(p1);
// // console.log(p1.age);
// // console.log(p1.name);
// // console.log(Object.values(p1));
// // console.log(Person.prototype.__proto__);


// // const obj = {
// //     name: "Gor",
// //     age : 32,
// //     hobbies: {
// //     read: true,
// //     games: true,
// //     football: false
// //   },
// //      foo(){
// //     console.log('hello');
// // }
// // }
// // console.log(obj);
// // const allHobbies = Object.keys(obj.hobbies)



// // const obj1 = Object.create(obj);
// // obj1.name = "Kar";
// // obj1.age = 23;
// // console.log(obj1);
// // console.log(obj1.foo());
// // console.log(obj)
// // console.log(allHobbies)


// //  function foo(){
// //     let y = 2;
// //     function bar(){
// //         let z = 3;
// //         console.log(x + y +z);
// //     }
// //     bar();
// //  }
// //  let x = 1;
// //  foo()
 

// // class Car {
// //     constructor(name,model){
// //         this.name = name;
// //         this.model = model;
// //     }

// //     sayHi(){
// //         console.log(`car name is ${this.name} , model is ${this.model}`)
// //     }
// // }

// //  const p = new Car("BMW","Esiminch");
// //  p.tiv = '2024'// just for this obj
// //  p.sayHi()
// //  console.log(p.tiv)



// // class Car {
// //     constructor(model,year,price){
// //         this.model = model;
// //         this.year = year;
// //         this.price = price;
// //     }
// // }


// // const car1 = new Car("BMW", "2024",150000);
// // const car2 = new Car("Mercedes", "2020",100000);
// // const car3 = new Car("Audi", "2025",120000);


// // class Person {
// //     constructor(name){
// //         this.name = name;
// //     }
// // }

// // const p1 = new Person("Hayk");
// // const p2 = new Person("Gor");
// // const p3 = new Person("Alen");



// // function chooseCar(person,car){
// //     console.log(`${person.name} choose ${car.model} what price is ${car.price}`)
// // }
// // chooseCar(p1,car3);

// // var x = 1;
// // let y = 2;
// // const z = 3;
// // d = 4 // globalThis  
// // console.log(globalThis.x);// undefined
// // console.log(globalThis.y); // undefined
// // console.log(globalThis.z); // undefined
// // console.log(globalThis.d); // 4


// // function foo(item){
// //     if(item % 2 == 0){
// //         return item;
// //     }
// // }

// // function customFilter(arr,callback){
// //     let result = [];
// //     for(let i = 0; i < arr.length;++i){
// //         if(callback(arr[i])){
// //             result.push(callback(arr[i]))
// //         }
// //     } 
// //     return result;
// // }

// // const arr = [2,3,4,5,6,7,8,9];

// // const zuyg =customFilter(arr,foo);
// // console.log(zuyg);


// function foo(item){  // callback function
//     return item * 2;
// }

// function customMap(arr,callback){
//     let result = [];
//     for(let i = 0; i < arr.length;++i){
//         callback(arr[i])
//         result.push(callback(arr[i]));
        
//     }
//     return result;
// }


// const arr = [2,3,4,5,6,7];
// const bzm = customMap(arr,foo);
// console.log(bzm);

