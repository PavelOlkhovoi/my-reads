import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import { search } from "../BooksAPI"
import Book from "./Book";

const Search = () => {
    const [foundBooks, setFoundBooks] = useState([]);
    // 1. Query  2. How mach books maximum can be added?
    const searchBooks = async (e) => {
        let words = e.target.value;
        console.log(words)
        const getBooks = await search(words, 10);
        console.log(getBooks)
        setFoundBooks(getBooks)
        console.log(foundBooks);
        }

    return (
    <div className="search-books">
        <div className="search-books-bar">
        <Link to="/"
            className="close-search"
        >
            Close
        </Link>
        <InputField searchBooks={searchBooks}/>
        </div>
        <div className="search-books-results">
        <ol className="books-grid">
            {
                !foundBooks.error ? foundBooks.map( book => <Book book={book}></Book>) : ""
            }
        </ol>
        </div>
    </div>
    )
}

export default Search;