let date = new Date(2023, 1, 27);

function getLocalDay(date) {

   let day = date.getDay();

   if (day == 0) { 
      day = 7;
   }

   return day;
}

console.log(getLocalDay(date));