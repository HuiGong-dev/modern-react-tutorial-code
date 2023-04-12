import React, { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

export default function BookEdit({ book, onSubmit }) {
  const { editBookById } = useBooksContext();
  const [title, setTitle] = useState(book.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    editBookById(book.id, title);
    onSubmit();
  };
  return (
    <form action="" onSubmit={handleSubmit} className="book-edit">
      <label htmlFor="">Title</label>
      <input
        className="input"
        type="text"
        value={title}
        onChange={handleChange}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}
