function getDateAgo(date, days) {
   let dateCopy = new Date(date);
 
   dateCopy.setDate(date.getDate() - days);
   return dateCopy.getDate();
 }
 
 let date = new Date(2023, 1, 27);
 
 console.log( getDateAgo(date, 2) ); // 1, (1 Jan 2015)