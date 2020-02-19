# node-vscp-type

<img src="https://vscp.org/images/logo.png" width="100">

VSCP type constants for the node.js package **node-vscp-type**

## Install
Install with

```bash
npm install node-vscp-type
```

optionally with '--save' to save dependency in the package.json file.

## Usage

```javascript
const vscp_type = require('node-vscp-type');
...
// To get numerical value for type
console.log(vscp_type.VSCP_TYPE_MEASUREMENT_PRESSURE);

// Ti get symbolic value of  class/type pair
// vscp_type(vscpClass,vscpType)
console.log(vscp_type(65535,12));
```

## Events
Available events are [here](https://grodansparadis.gitbooks.io/the-vscp-specification/?id=start/)

---

This package is part of the [VSCP(Very Simple Control Protocol)](https://www.vscp.org) IoT framework.