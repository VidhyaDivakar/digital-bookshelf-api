//API Routes
const express = require("express");

const router = express.Router(); //() creates a new router object; router=stores routes like GET, POST, DELETE, etc.
const Book = require("../models/book");
//create using POST/ Creates a new book using the data in req.body.
router.post("/", async (req, res) => {
    try {
        const createdBook = await Book.create(req.body);
        return res.status(201).json(createdBook);
    } catch (error) {
        console.error("Error creating book:", error);
        return res.status(500).json({ error: "Failed to create book" });
    }
});
//Read All: GET / - Retrieves all books from the database.
router.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json(books);
    } catch (error) {
        console.error("Error fetching books:", error);
        return res.status(500).json({ error: "Failed to fetch books" });
    }
});


//Read One: GET /:id - Retrieves a single book by its _id.

router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }

        return res.status(200).json(book);
    } catch (error) {
        console.error("Error fetching book:", error);
        return res.status(500).json({ error: "Failed to fetch book" });
    }
});

//Update: PUT /:id - Updates a book by its _id using the data in req.body.

router.put("/:id", async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedBook) {
            return res.status(404).json({ error: "Book not found" });
        }

        return res.status(200).json(updatedBook);
    } catch (error) {
        console.error("Error updating book:", error);
        return res.status(500).json({ error: "Failed to update book" });
    }
});


//Delete: DELETE /:id - Deletes a book by its _id.

router.delete("/:id", async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if (!deletedBook) {
            return res.status(404).json({ error: "Book not found" });
            //using res.json() to send JSON, and res.status() to set the status code.”
        }

        return res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        console.error("Error deleting book:", error);
        return res.status(500).json({ error: "Failed to delete book" });
    }
});

module.exports = router;