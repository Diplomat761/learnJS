function readNumber() {
   let num;
 
   do {
     num = 5;
   } while ( !isFinite(num) );
 
   if (num === null || num === '') return null;
 
   return +num;
 }
 
console.log(`Число: ${readNumber()}`);

