const fs = require('fs');

const homeController = {
    render: (req, res) => {
        const jsBooks = fs.readFileSync('src/books.json', 'utf-8');
        const books = JSON.parse(jsBooks);
        res.render('home', { books });
    }
};

module.exports = homeController;