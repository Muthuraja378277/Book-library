import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import  homeback from './homeback.jpeg'

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      
      const response = await axios.get(`http://localhost:3000/search?author=${searchTerm}`);
 
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <>
<div className='cce'>
<div className='background-image'>
    <img src={homeback} alt="" />
    </div>

      <Navbar />

      <div className="search-box">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for books"
          className="search-input"
        />
        <button
          onClick={handleSearch}
          className="search-button"
        >
          Search
        </button>
      </div>

      <div className="search-results">
        {searchResults.map((book, index) => (
          <div key={index} className="book-item">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Pages: {book.pages}</p>
            <p>Description: {book.description}</p>
            <img src={book.image} alt={book.title} />
          </div>
        ))}
      </div>
      
</div>
    </>
  );
}

export default Home;
