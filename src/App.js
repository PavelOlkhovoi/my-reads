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
    newBook.shelf = shelf;
    update(newBook, shelf).then(() => {
      setBooks([...books.filter((b) => b.id !== newBook.id), newBook]);
      });
      getAllBooks()
  }

 
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home books={books} changeCategory={changeCategory}/>} />
          <Route path="/search" element={<Search books={books} changeCategory={changeCategory}/>} />
        </Routes>
    </div>
  );
}

export default App;
