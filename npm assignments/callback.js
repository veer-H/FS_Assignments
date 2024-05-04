function delayedMessage(callback) {
    setTimeout(() => {
        callback("Delayed message");
    }, 2000); // Delay execution for 2 seconds
}

// Call the delayedMessage function and provide a callback function
delayedMessage((message) => {
    console.log("Received message:", message);
});
