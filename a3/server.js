// import
const WebSocket = require('ws');

//  server on 8000
const wss = new WebSocket.Server({ port: 8080 });

// fake stocks
const stocks = ['AAPL', 'GOOG', 'TSLA', 'AMZN', 'MSFT'];



//  get random price
function getRandomPrice() {
  return (Math.random() * 1000 + 100).toFixed(2);
}


// on connect server
wss.on('connection', (ws) => {

    // repeat update after 2 sec + send
    const interval = setInterval(() => {

        const updates = stocks.map(s => ({ name: s, price: getRandomPrice(), time: new Date().toLocaleTimeString() }));
        ws.send(JSON.stringify(updates));

    }, 2000);


    // sesscion disconnected...
    ws.on('close', () => {
    clearInterval(interval);
    });

    
});
