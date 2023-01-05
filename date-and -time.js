// let unix_timestamp = 1671883193
// // Create a new JavaScript Date object based on the timestamp
// // multiplied by 1000 so that the argument is in milliseconds, not seconds.
// var date = new Date(unix_timestamp * 1000);
// // Hours part from the timestamp
// var hours = date.getHours();
// // Minutes part from the timestamp
// var minutes = "0" + date.getMinutes();
// // Seconds part from the timestamp
// var seconds = "0" + date.getSeconds();

// // Will display time in 10:30:23 format
// var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

// console.log(formattedTime);

let unix_timestamp = 1671846062;

var date = new Date(unix_timestamp * 1000);

var hours = date.getHours();

var minutes = "0" + date.getMinutes();

var seconds = "0" + date.getSeconds();

var formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

console.log(formattedTime);
