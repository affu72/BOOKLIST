import React, { useState } from "react";
import BookList from "./Components/BookList";
import Header from "./Components/Header";
import NewBook from "./Components/NewBook";
import "./App.css";

export default function App() {
  const [book, setBook] = useState([]);
  const [editBook, setEditBook] = useState();
  const [deleteBook, setDeleteBook] = useState();

  const newBookHandler = function (data) {
    console.log(data);
    setBook((prevData) => [data, ...prevData]);
  };
  return (
    <div>
      <Header></Header>
      <div className="main">
        <NewBook onSubmit={newBookHandler} />
        <BookList books={book} />
      </div>
    </div>
  );
}
