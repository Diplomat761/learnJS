function getAverageAge(users) {
   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
 }
 
 let vasya = { name: "Вася", age: 24 };
 let petya = { name: "Петя", age: 27 };
 let masha = { name: "Маша", age: 27 };
 
 let arr = [ vasya, petya, masha ];
 
console.log( getAverageAge(arr) ); 