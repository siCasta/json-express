const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const books = JSON.parse(fs.readFileSync('src/books.json', 'utf8'));

const newEntryController = {
    render: (req, res) => {
        res.render('newEntry');
    },
    create: (req, res) => {
        const { title, author, image, description } = req.body;
        if (!title || !author || !image || !description) {
            res.render('newEntry', { error: 'Completa todos los campos' });
            return;
        }
        const newBook = {
            id: uuidv4(),
            title,
            author,
            image,
            description
        };

        books.push(newBook);
        const jsonBooks = JSON.stringify(books, 'utf-8', 4);

        fs.writeFileSync('src/books.json', jsonBooks, 'utf-8');

        res.redirect('/');
    }
};

module.exports = newEntryController;