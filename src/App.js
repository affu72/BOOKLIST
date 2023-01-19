import React, { useState } from "react";
import BookList from "./Components/BookList";
import Header from "./Components/Header";
import NewBook from "./Components/NewBook";
import "./App.css";

export default function App() {
  const [data, setData] = useState([]);

  const newBookHandler = function () {};
  return (
    <div>
      <Header></Header>
      <div className="main">
        <NewBook onSubmit={newBookHandler} />
        <BookList />
      </div>
    </div>
  );
}
