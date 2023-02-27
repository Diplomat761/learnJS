let messages = [
   {text: "Hello", from: "John"},
   {text: "How goes?", from: "John"},
   {text: "See you soon", from: "Alice"}
 ];
 
 let readMap = new WeakMap();
 
 readMap.set(messages[1], new Date(2023, 12, 12));