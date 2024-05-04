const EventEmitter = require('events'); // Import the EventEmitter class

const emitter = new EventEmitter(); // Create an event emitter instance

// Define a listener for the 'greet' event
emitter.on('greet', () => {
    console.log("Hello, Event!");
});

// Emit the 'greet' event
emitter.emit('greet');
