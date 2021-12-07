const fs = require('fs');

const bookController = {
    delete: (req, res) => {
        const jsBooks = fs.readFileSync('src/books.json', 'utf-8');
        let books = JSON.parse(jsBooks);
        books = books.filter(book => book.id !== req.params.id);
        const jsonBooks = JSON.stringify(books, 'utf-8', 4);

        fs.writeFileSync('src/books.json', jsonBooks, "utf-8");
        res.redirect('/');
    },
    edit: (req, res) => {
        const jsBooks = fs.readFileSync('src/books.json', 'utf-8');
        let books = JSON.parse(jsBooks);
        const book = books.find(book => book.id == req.params.id);
        res.render('editBook', { book });
    },
    update: (req, res) => {
        const jsBooks = fs.readFileSync('src/books.json', 'utf-8');
        let books = JSON.parse(jsBooks);
        let book = books.find(book => book.id == req.params.id);

        book = {
            id: req.params.id,
            title: req.body.title,
            author: req.body.author,
            image: req.body.image,
            description: req.body.description,
        }

        books.splice(books.indexOf(book), 1, book);
        console.log(books);

        const jsonBooks = JSON.stringify(books, 'utf-8', 4);

        fs.writeFileSync('src/books.json', jsonBooks, "utf-8");
        res.redirect('/');
    },
    getBook: (req, res) => {
        const jsBooks = fs.readFileSync('src/books.json', 'utf-8');
        let books = JSON.parse(jsBooks);
        const book = books.find(book => book.id == req.params.id);
        res.render('book', { book });
    }
};

module.exports = bookController;