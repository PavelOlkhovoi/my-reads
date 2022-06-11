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

  const bookUpdate = async() => {
    await update({id: "jAUODAAAQBAJ"}, "read");
    getAllBooks();
  }

  return (
    <div>
        <Home books={books}>
        </Home>
        <button onClick={bookUpdate}>New data setUp</button>
    </div>
  );
}

export default App;
