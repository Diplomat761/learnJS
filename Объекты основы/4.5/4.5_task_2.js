class Calculator {
   constructor(a, b) {}

      read = function () {
         this.a = 5
         this.b = 2
      };

      sum = function () {
         return this.a + this.b;
      };

      mul = function () {
         return this.a * this.b;
      };
   
}
 
 let calculator = new Calculator();
 calculator.read();
 
 console.log( "Sum = " + calculator.sum() );
 console.log( "Mul = " + calculator.mul() );