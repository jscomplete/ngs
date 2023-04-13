
const myfunc = delay => setInterval( ()=>{
    console.log("Hello World. "+delay);
    myfunc(delay+1)
}, delay * 1000)

myfunc(1);