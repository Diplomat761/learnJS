class Clock {
   render() {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = "0" + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = "0" + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = "0" + secs;

      let output = `${hours}:${mins}:${secs}`;

      console.log(output);
   }
   stop(timer) {
      this.timer = timer;
      clearInterval(this.timer);
   }
   start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
   }
}

class ExtendedClock extends Clock {
   constructor(options) {
      super(options);
      let { precision = 1000 } = options;
      this.precision = precision;
   }

   start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
   }
};

let slowСlock = new ExtendedClock({
   template: 'h:m:s',
   precision: 10000
});

slowСlock.start();