// import EventEmitter from 'events';
// Streams are Event Emitters
// process.stdin, process.stdout

const EventEmitter = require('events');

const myEmitter = new EventEmitter();
// the setImmediate uses the Event Loop
setImmediate(() =>{
    myEmitter.emit('TEST_EVENT');
});

// these are listeners
myEmitter.on('TEST_EVENT', ()=>{
    console.log('TEST_EVENT was fired');
});
myEmitter.on('TEST_EVENT', ()=>{
    console.log('TEST_EVENT was fired');
});
myEmitter.on('TEST_EVENT', ()=>{
    console.log('TEST_EVENT was fired');
});

//myEmitter.emit('TEST_EVENT');