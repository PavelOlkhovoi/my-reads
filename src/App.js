import { useState, useEffect, useCallback } from "react";
import { Routes, Route} from "react-router-dom";
import { getAll, update } from "./BooksAPI"
import "./App.css";
import Home from "./components/Home.jsx";
import Search from "./components/Search";


function App() {
  const [books, setBooks] = useState([])

/**
* @description Get all books from API
* The function uses the useCallback and can be reused.
* @param {} - Without parameters
*/
  const getAllBooks = useCallback( async () => {
    const data = await getAll();
    setBooks( data )
  }, [])


  useEffect(()=> {
    getAllBooks();
  }, [getAllBooks])

/**
* @description Changes the shelf in the book
* @param {object} book The book
* @param {string} shelf - The shelf: "wantToRead", "currentlyReading", "read".
*/
  const bookUpdate = async(book, shelf) => {
    await update(book, shelf);
    getAllBooks();
  }

/**
* @description Add books from the search page to the main
* @param {object} book The book
*/
  const addNewBook = (newBook) => {
    setBooks( prev => [...prev, newBook])
  }
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home books={books} bookUpdate={bookUpdate} addNewBook={addNewBook}/>} />
          <Route path="/search" element={<Search books={books} bookUpdate={bookUpdate} addNewBook={addNewBook} place={"search"}/>} />
        </Routes>
    </div>
  );
}

export default App;
