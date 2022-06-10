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

  console.log("I without hook", books)

  const test = async() => {
    console.log("Start", books)
    await update({id: "jAUODAAAQBAJ"}, "read");
    getAllBooks();
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
