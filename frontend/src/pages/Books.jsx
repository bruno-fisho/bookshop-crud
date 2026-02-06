import React, { use, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = React.useState([]);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);
  return (
    <div>
      <h1>Fisho Bookshop</h1>
      <div className="books">
        {books.map((book) => (
          <div key={book.id} className="book">
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <span>${book.price}</span>
          </div>
        ))}
      </div>
        <button>
        <Link to="/add">Add New Book</Link>
        </button>
    </div>
  );
};

export default Books;
