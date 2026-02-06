import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = React.useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
        navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="Title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="Description"
        onChange={handleChange}
        name="description"
      />
      <input
        type="number"
        placeholder="Price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="Cover Url"
        onChange={handleChange}
        name="cover"
      />
      <button onClick={handleClick}>Save</button>
    </div>
  );
};

export default Add;
