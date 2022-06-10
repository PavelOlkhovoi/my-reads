import { useState, useEffect, useCallback } from "react";
import {getAll} from "./BooksAPI"
import "./App.css";
import Home from "./components/Home.jsx";


function App() {
  const [books, setBooks] = useState([]);
  
  const getAllBooks = useCallback(() => {
    return getAll().then( allBooks => setBooks( books => [...books, allBooks]) )
  }, []);

  useEffect(()=> {
    getAllBooks();
    console.log(books)
  }, [getAllBooks])
  
  return (
    <div>
        <Home>
        </Home>
    </div>
  );
}

export default App;
