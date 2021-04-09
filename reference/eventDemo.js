const EventEmitter=require("events");

// Init Obj

const myEmitter=new EventEmitter();

// Event Listener

myEmitter.on("event",(data)=>console.log(data));

// INit event
myEmitter.emit("event","Event Emitted");