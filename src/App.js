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

  const addBookTest = (newBook, shelf) => {

    setBooks(books.map( book => {
      if(book.id === book.id) {
        return {
          ...book, 
          shelf
        }
      }
    }))


  }


  useEffect(()=> {
    getAllBooks();
  }, [getAllBooks])


/**
* @description Add books from the search page to the main
* @param {object} book The book
*/
  const addNewBook = (newBook, shelf) => {
    setBooks( prev => [...prev, {
      ...newBook,
      shelf
    }])
  }
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home books={books} addNewBook={addNewBook}/>} />
          <Route path="/search" element={<Search books={books} addNewBook={addNewBook}/>} />
        </Routes>
    </div>
  );
}

export default App;
