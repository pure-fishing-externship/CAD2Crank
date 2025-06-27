const express = require('express');
const multer = require('multure');
const upload = multer({ dest: 'uploads/' });

const app = express();
const port = 3000;

app.use(express.json());


app.post('/upload', upload.single('twoD_input'), (req, res) => {
    console.log(req.body.username);
    console.log(req.file);
    res.send('File uploaded sucessfully');
});

app.delete('/books/:id', (req, res)=> {
    const newBook = bookId = parseInt(req.params.id);
    books = books.filter((book) => book.id !== bookId);
    res.sendStatus(204);
});

app.listen(port, () => {
    console.log('Server is running on port ${port}');
});