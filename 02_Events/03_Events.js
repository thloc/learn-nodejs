const events = require('events');
let eventEmitter = new events.EventEmitter();

// listener #1
let listner1 = function listner1() {
   console.log('Running my listener1');
}

// listener #2
let listner2 = function listner2() {
  console.log('Running my listener2');
}

eventEmitter.addListener('connection', listner1);
eventEmitter.on('connection', listner2);

let eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Event Listner connections");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("No Listner1 Connection");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Event Listner connections");

console.log("End.");