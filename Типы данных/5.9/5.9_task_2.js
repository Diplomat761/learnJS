let user = {
   id: 1,
   name: 'John',
   age: 30
}

function count(obj) {
   return Object.keys(obj).length;
}

console.log(count(user)); 