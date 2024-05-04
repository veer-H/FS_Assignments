const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    console.log('Connected to server');
    ws.send('Hello from client!');
};

ws.onmessage = (message) => {
    console.log('Received message from server:', message.data);
};

ws.onclose = () => {
    console.log('Disconnected from server');
};
