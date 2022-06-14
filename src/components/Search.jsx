import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import { search } from "../BooksAPI"
import Book from "./Book";

const Search = ({ books, bookUpdate, addNewBook }) => {
    const [foundBooks, setFoundBooks] = useState([]);

    const searchBooks = async (e) => {
        let words = e.target.value;
        if( words === undefined || words =="" ){ return false } 

        const getBooks = await search(words, 30)

        if(!getBooks.error) {
            const commanBooks = getBooks.map( item => {
                books.map( book => {
                    if(item.id === book.id){
                        item.shelf = book.shelf;
                    }
                })
                return item
            })
            setFoundBooks(commanBooks)
        }
    }

    return (
    <div className="search-books">
        <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
            <InputField searchBooks={searchBooks}/>
        </div>
        <div className="search-books-results">
            <ol className="books-grid">
                {
                    foundBooks.map( book => <li key={book.id}><Book book={book} addNewBook={addNewBook} books={books} place="search"/></li>)
                }
            </ol>
        </div>
    </div>
    )
}

export default Search;