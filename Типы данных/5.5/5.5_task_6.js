class Calculator {
   constructor() {
      this.methods = {
         "-": (a, b) => a - b,
         "+": (a, b) => a + b
      };
   }

   calculate(str) {
      let split = str.split(' '),
         a = +split[0],
         op = split[1],
         b = +split[2];

      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
         return NaN;
      }

      return this.methods[op](a, b);
   }

   addMethod(name, func) {
      this.methods[name] = func;
   }
}
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");

console.log(result);
console.log(powerCalc);

