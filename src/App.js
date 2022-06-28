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
  const changeCategory = (newBook, shelf) => {
    setBooks(books.map( book => {
      if(book.id === newBook.id) {
        return {
          ...book, 
          shelf
      }}else {
        return book
      }
    }))
  }

  /**
  * @description Add books from the search page to the main
  * @param {object} book The book
  * @param {object} shelf The shelf's name
  */
  const addNewBook = (newBook, shelf) => {
    // Checks if the book had already been added 
    const checkShelf = books.reduce((acc, bookReduce) => {
      if(bookReduce.id === newBook.id){
        return acc = false
      }
      return acc
    }, true) 

    // The new book is added to the share state
    if(checkShelf){
      setBooks( prev => [...prev, {
        ...newBook,
        shelf
      }])
    // Used books just change its shelves
    }else {
      changeCategory(newBook, shelf)
      update(newBook, shelf)
    }

  }
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home books={books} addNewBook={addNewBook}/>} />
          <Route path="/search" element={<Search books={books} addNewBook={addNewBook}  changeCategory={changeCategory}/>} />
        </Routes>
    </div>
  );
}

export default App;
