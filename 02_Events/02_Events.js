const events = require('events');
let eventEmitter = new events.EventEmitter();

eventEmitter.on('myCustomEvent', (arg1, arg2) => {
    // console.log(arg1, arg2, this); // --> String01 String02 {}
    console.log(arg1, arg2);
})

// document.querySelector('myTag').onclick = function() {...};
setTimeout(()=>{
    eventEmitter.emit('myCustomEvent', 'String01', 'String02');
}, 500)
