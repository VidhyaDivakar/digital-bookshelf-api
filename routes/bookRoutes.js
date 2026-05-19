//API Routes
const express = require("express");

const router = express.Router(); //() creates a new router object; router=stores routes like GET, POST, DELETE, etc.

//create using POST/ Creates a new book using the data in req.body.
app.post('/books', async (req, res) => {

    try {
        if (!req.body) {
            return res.status(400).json({
                error: "Request body is missing"
            });
        }
        const createdBook = await Book.create(req.body);

        console.log('Book has successfully been created!');
        console.log(req.body);
        return res.redirect("/books");
    } catch (error) {
        console.error('Error Creating Book!');
        return res.status(500).send("Failed to create book");
    }

});
//Read All: GET / - Retrieves all books from the database.
app.get("/books", async (req, res) => {
    try {
        const allBooks = await Book.find(req.body)
        res.render("index", {
            books: allBooks
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});


//Read One: GET /:id - Retrieves a single book by its _id.

app.get("/books/:id", async (req, res) => {
    try {
        const foundBook = await Book.findById(req.params.id);
        res.render("show", {
            book: foundBook
        });
    } catch (error) {
        console.error("Error fetching book:", error);
        return res.status(500).send("Failed to fetch book");
    }

});

//Update: PUT /:id - Updates a book by its _id using the data in req.body.

app.put("/books/:id", async (req, res) => {

    try {

        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedBook) {
            return res.status(404).send("Book not found");
        }

        res.json(updatedBook);

    } catch (error) {

        console.error("Error updating book:", error);

        return res.status(500).send("Failed to update book");
    }

});

