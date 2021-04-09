const fs=require("fs");
const path=require("path");

// // make folder
fs.mkdir(path.join(__dirname,"test"),{},(err)=>{
    if(err) throw err;
    console.log("Folder Created")
});

// write to a file
fs.writeFile(path.join(__dirname,"test","Hello.txt"),"Hello World!",(err)=>{
    if(err) throw err;
    console.log("File Written")

    // Appending a file
    fs.appendFile(path.join(__dirname,"test","Hello.txt"),"I am Alpha",(err)=>{
        if(err) throw err;
        console.log("File appended")
    });
});

// // read file
fs.readFile(path.join(__dirname,"test","Hello.txt"),"utf8",(err,data)=>{
    if(err) throw err;
    console.log(data)
});

// rename file
fs.rename(path.join(__dirname,"test","Hellow.txt"),path.join(__dirname,"test","Hello.txt"),(err)=>{
    if(err) throw err;
    console.log("File Rename")
});