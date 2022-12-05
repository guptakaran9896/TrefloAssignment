function ping(client) {
    return `Pong! Your ping is ${client.ws.ping}`;
}
module.exports = ping;