import { useState, useEffect, useCallback } from "react";
import { getAll, update } from "./BooksAPI"
import "./App.css";
import Home from "./components/Home.jsx";


function App() {
  const [books, setBooks] = useState([])
  
  const getAllBooks = useCallback( async () => {
    const data = await getAll();
    console.log('It is a fantastik gay')
    setBooks(data)
  }, [])

  useEffect(()=> {
    console.log('Fierst hook')
    getAllBooks();
  }, [getAllBooks])

  const bookUpdate = async(book, shelf) => {
    await update(book, shelf);
    getAllBooks();
  }

  console.log(books)
  return (
    <div>
        <Home books={books} bookUpdate={bookUpdate}>
        </Home>
    </div>
  );
}

export default App;
