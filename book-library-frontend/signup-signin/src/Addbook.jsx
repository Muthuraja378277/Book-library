

import React, { useState } from 'react';
import './Addbook.css';
import Navbar from './Navbar';
import axios from 'axios';


const Addbook = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [pages, setPages] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !author || !pages || !description || !image) {
      alert('Please fill in all fields');
      return;
    }
    const savedBook = {
      title: title,
      author: author,
      description: description,
      image: image,
      pages: parseInt(pages)
    };
    try {
      const response = await axios.post('http://localhost:3000/create', savedBook);

      setTitle('');
      setAuthor('');
      setDescription('');
      setImage('');
      setPages('');

      alert("Book added to collection");
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Error adding book. Please try again.'); 
    }
  };

  return (
    <>
    <Navbar/>
    <br /><br /><br /><br />
  <center>  <h1>Add Book</h1></center>
    <form onSubmit={handleSubmit} className='container'>
      <label>
        Book Name
        <input type="text" value={title} placeholder='Enter the book name' onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Author
        <input type="text" value={author} placeholder='Enter the Author name' onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <label>
        Description
        <input type="text" value={description} placeholder='Enter the Description' onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Image URL
        <input type="text" value={image} placeholder='Enter the Image Address' onChange={(e) => setImage(e.target.value)} />
      </label>
      <label>
        Pages
        <input type="number" value={pages} placeholder='Enter the page number' onChange={(e) => setPages(e.target.value)} />
      </label>
      <button type="submit">Add Book</button>
    </form></>
  );
};


export default Addbook;
