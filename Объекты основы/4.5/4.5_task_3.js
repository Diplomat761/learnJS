class Accumulator {
   constructor(startingValue) {
      this.value = startingValue;
   }
   read = function () {
      this.value += 5;
   }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);