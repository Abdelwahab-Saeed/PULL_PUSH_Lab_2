const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    const interval = setInterval(() => {
        ws.send("hi at " + new Date().toLocaleTimeString());
    }, 2000);

    ws.on('close', () => {
        console.log('Client disconnected');
        clearInterval(interval);
    });
});
