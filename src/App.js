import { useState, useEffect, useCallback } from "react";
import { getAll, update } from "./BooksAPI"
import "./App.css";
import Home from "./components/Home.jsx";


function App() {
  const [books, setBooks] = useState([])

  useEffect(()=> {
    const getAllBooks = async () => {
      const data = await getAll();
      setBooks(data)
    };

    getAllBooks();
  }, [])

  const test = async() => {
    console.log("Start", books)
    const newBook = await update({id: "jAUODAAAQBAJ"}, "read");
    const newBooook = await getAll();
    setBooks(newBook);
    console.log("Dan", books)
  }

  return (
    <div>
        <Home>
        </Home>
        <button onClick={test}>New data setUp</button>
    </div>
  );
}

export default App;
