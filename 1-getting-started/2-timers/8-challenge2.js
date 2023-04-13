let counter  = 0
const myfunc =() =>{
    console.log("Hello World");
    counter++;
    console.log(counter)
    if(counter == 5){
        myClear();
    }
};

const tid = setInterval(myfunc,1000);
function myClear(){
    clearInterval(tid);
    console.log("Done")
}


// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
