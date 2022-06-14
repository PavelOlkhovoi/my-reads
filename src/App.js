import { useState, useEffect, useCallback } from "react";
import { Routes, Route} from "react-router-dom";
import { getAll, update } from "./BooksAPI"
import "./App.css";
import Home from "./components/Home.jsx";
import Search from "./components/Search";


function App() {
  const [books, setBooks] = useState([])
  
  const getAllBooks = useCallback( async () => {
    const data = await getAll();
    setBooks( data )
  }, [])

  useEffect(()=> {
    console.log('Fierst hook')
    getAllBooks();
  }, [getAllBooks])

  const bookUpdate = async(book, shelf) => {
    await update(book, shelf);
    getAllBooks();
  }

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
