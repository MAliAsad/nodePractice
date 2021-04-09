
const myUrl=new URL("http://mywebsite.com:8000/hello.html?id=100&status=active");

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// host
console.log(myUrl.host);

// hostname
console.log(myUrl.hostname);

// pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// params object
console.log(myUrl.searchParams);
// add params 
myUrl.searchParams.append("abc","123");
console.log(myUrl.search);

// loop through params
myUrl.searchParams.forEach((value,name)=>{
    console.log(`${name}: ${value}`);
});