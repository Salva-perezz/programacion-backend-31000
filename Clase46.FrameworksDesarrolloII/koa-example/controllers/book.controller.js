import Book from "../models/book.model.js";

// const books = [
//   { id: 101, name: "Fight Club", author: "Chuck Palahniuk" },
//   { id: 102, name: "Sharp Objects", author: "Gillian Flynn" },
//   { id: 103, name: "Frankenstein", author: "Mary Shelley" },
//   { id: 104, name: "Into The Willd", author: "Jon Krakauer" },
// ];

const getBookById = (ctx) => {
  const { id } = ctx.params;
  const currentBook = books.filter((book) => book.id === Number(id));
  if (currentBook.length) {
    ctx.body = {
      status: "Succes",
      data: currentBook[0],
    };
  } else {
    ctx.response.status = 404;
    ctx.body = {
      status: "Not found",
      message: `Book with ID: ${id} not found`,
    };
  }
  console.log("Conext", ctx);
};

const createBook = async (ctx) => {
  const { id, name, author } = ctx.request.body;

  if (!id || !name || !author) {
    ctx.response.status = 400;
    ctx.body = {
      status: "Missing data",
      message: "Please enter the data",
    };
  } else {
    const createdBook = await Book.create({ name, author });

    ctx.response.status = 201;
    ctx.body = {
      status: "Created!",
      data: createdBook,
    };
  }
};

const updateBook = (ctx) => {
  const { id, author, name } = ctx.request.body;

  if (!id || !name || !author) {
    ctx.response.status = 400;
    ctx.body = {
      status: "Missing data",
      message: "Please enter the data",
    };
  } else {
    const { id } = ctx.params;
    const bookIndex = books.findIndex((book) => book.id === Number(id));

    books.splice(bookIndex, 1, { id: Number(id), author, name });

    ctx.response.status = 201;
    ctx.body = {
      status: "Updated!",
      data: { id, name, author },
    };
  }
};

const deleteBook = (ctx) => {
  const { id } = ctx.params;
  const bookIndex = books.findIndex((book) => book.id === Number(id));
  const deletedBook = books.splice(bookIndex, 1);

  ctx.response.status = 200;
  ctx.body = {
    status: "Deleted!",
    data: deletedBook,
  };
};

const getAllBooks = async (ctx) => {
  const books = await Book.find();

  ctx.response.status = 200;
  ctx.body = {
    status: "Succes",
    data: books,
  };
};

export default {
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getAllBooks,
};
