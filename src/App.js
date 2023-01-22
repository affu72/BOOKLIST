import React, { useState } from "react";
import BookList from "./Components/BookList";
import Header from "./Components/Header";
import NewBook from "./Components/NewBook";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

export default function App() {
  const [books, setBooks] = useState([]);

  const newBookHandler = async function ({ title }) {
    console.log(title);
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    setBooks((prevData) => [response.data, ...prevData]);
  };

  const fetchBook = async function () {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const editBookHandler = async (newtitle, id) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newtitle,
    });

    const updatedBook = books.map((book) => {
      if (id === book.id) return { ...book, ...response.data };

      return book;
    });

    setBooks(updatedBook);
  };

  const deleteBookHandler = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBook = books.filter((book) => {
      return id !== book.id;
    });

    setBooks(updatedBook);
  };

  return (
    <div>
      <Header></Header>
      <div className="main">
        <NewBook onSubmit={newBookHandler} />
        <BookList
          books={books}
          onDelete={deleteBookHandler}
          onEditSave={editBookHandler}
        />
      </div>
    </div>
  );
}
