// direcciones de las rutas
const home = require("./home");
const newEntry = require("./newEntry");
const book = require("./book");

const rutas = (app) => {
    // home
    app.use("/", home);
    // newEntry
    app.use("/new-entry", newEntry);
    // book
    app.use("/book", book);
}

module.exports = rutas;
