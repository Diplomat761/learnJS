let n = 50;

nextPrime:
for (let i = 2; i <= n; i++) {

   for (let x = 2; x < i; x++) {
      if (i % x == 0) continue nextPrime;
   }

   console.log(i);

}