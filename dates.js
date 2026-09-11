let myDate = new Date ();
// console.log(myDate.toDateString()   );
// console.log(myDate.toTimeString()   );
// console.log(myDate.toLocaleString()   );
// console.log(myDate.toLocaleDateString()   );
// console.log(myDate.toLocaleTimeString()   );
// console.log(myDate.toUTCString()   );
// console.log(myDate.toJSON()   );
// console.log(typeof myDate   );


//########################################

let myDate2 = new Date(2024, 5, 20, 10, 30, 0);
console.log(myDate2.toDateString());
console.log(myDate2.toTimeString());

console.log(myDate2.toLocaleString(
    'default', { 
weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }
));








