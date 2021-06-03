const app = require('./app');
const debug = require('debug')('node-angular');
const http = require('http');
const { listen } = require('./app');

const normalPort = value => {
    var port = parseInt(value, 10);
    if (isNaN(port)) {
        return port;
    }

    if (port >= 0) {
        return port;
    }
    return false;
}

const onError = err => {
    if (err.syscall !== 'listen') {
        throw err;
    }

    const addr = server.address();
    const bindaddr = typeof addr === 'string' ? 'pipe' + addr : 'port' + port;
    switch (err.code) {
        case 'EACCES':
            console.error(bindaddr + 'requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bindaddr + 'is already in use');
            process.exit(1);
            break;
        default: 
            throw err;
    }
}

const onListening = () => {
    const addr = server.address();
    const bindaddr = typeof addr === "string" ? "pipe" + addr : "port" + port;
    debug("Listening on " + bindaddr);
}

const port = normalPort(process.env.PORT || '4000');
app.set('port', port);
const server = http.createServer(app);
server.on("error", onError);
server.on("Listening", onListening);
server.listen(port);
