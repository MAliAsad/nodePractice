// const person=require("./person");

// const obj=new person("Ali",21);

// obj.greeting();
const Logger= require("./logger");

const logger=new Logger();

logger.on("message", (data)=>console.log("Called Listener",data));
logger.log("hellow world");