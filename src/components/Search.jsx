import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import { search } from "../BooksAPI"
import Book from "./Book";

const Search = ({ books, addNewBook,  changeCategory={changeCategory} }) => {
    // Set the array for searching data 
    const [foundBooks, setFoundBooks] = useState([]);
/**
    * @description Get data from API with the searching stroke
    * @param {event} e Event data
    */
 const searchBooks = async (e) => {
    let words = e.target.value;
    if( words === undefined || words === "" ){ return false } 

    const getBooks = await search( words, 20 )

    if( !getBooks.error )  {
        // loop over the getBooks
        const commanBooks = getBooks.map( item => {
            // If an array doesn't contain the imageLinks key set up it like ""
            if(item.imageLinks === undefined){
                item.imageLinks = { thumbnail: "" }
            }

            return item
        })
        setFoundBooks( commanBooks ) 
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
                    foundBooks.map( book => <li key={book.id}><Book book={book} addNewBook={addNewBook}
                        changeCategory={changeCategory}
                        books={books}
                    /></li>)
                }
            </ol>
        </div>
    </div>
    )
}



export default Search;