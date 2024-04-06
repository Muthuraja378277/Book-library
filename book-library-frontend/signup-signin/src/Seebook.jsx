import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Seebook.css';
import Navbar from './Navbar';

const Seebook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
   
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/'); 
        setBooks(response.data); 
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);



  const handleDelete = async (id) => {
    try {
        console.log(id);
      await  axios.delete(`http://localhost:3000/search?deleteid=${id}`)
      setBooks(books.filter(book => book._id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };
  

  return (<>
  <Navbar/>
    <br />
    <div className='full'>

      <h2>Books Collection</h2>
      <div className="see-container">
      <div className="books-list">
        {books.map((book, index) => (
          <div key={index} className="book-item">
            <p><img src={book.image} alt="" /></p>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Pages: {book.pages}</p>
            <p>Description: {book.description}</p>
            <div>
              <button onClick={() => handleDelete(book._id)}>Delete</button>
            
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Seebook;
