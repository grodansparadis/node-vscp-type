const vscp_type = require('./vscp_type.js');

console.log("Class = " + vscp_type.VSCP_TYPE_MEASUREMENT_FORCE);

console.log(vscp_type(0,5));
console.log(vscp_type(1,3));
console.log(vscp_type(10,6));
console.log(vscp_type(65535,12));