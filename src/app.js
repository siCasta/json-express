const app = require("./settings");

async function start() {
    await app.listen(app.get("port"));
    console.log('Server on port',app.get("port"));
}

start();