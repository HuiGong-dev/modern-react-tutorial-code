import React, { useState } from "react";

export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
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
