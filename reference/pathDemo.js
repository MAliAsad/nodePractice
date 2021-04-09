const path=require("path");

// base name
console.log(path.basename(__filename));

// DIR name
console.log(path.dirname(__filename));

// File Extension name
console.log(path.extname(__filename));

// object with all info
console.log(path.parse(__filename));

// Concatenate path
console.log(path.join(__dirname,"test","hello.js"));