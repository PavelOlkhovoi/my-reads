import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import { search } from "../BooksAPI"
import Book from "./Book";

const Search = ({books, changeCategory}) => {
    
    // Set the array for searching data 
    const [foundBooks, setFoundBooks] = useState([]);

    /**
    * @description Helps to launch functions with a delay
    * @param {function} cd Callback function
    * @param {number} time - Delay
    * @return {function}
    */
    const debounce = ( cb, time ) => {
    let timeout;
    return function() {
        // Save arguments for the called function. like an event for example. 
        const cbCall = () => { cb.apply( this, arguments )}
        clearTimeout(timeout);
        timeout = setTimeout(cbCall, time)
        }
    }

    /**
    * @description Get data from API with the searching stroke
    * @param {event} event Event data
    */
    const searchBooks = async (e) => {
        // Cleaning search words and results
        let words = e.target.value;
        if( words === undefined || words === "" ){ 
            setFoundBooks([]) 
            return false 
        }
        // Retrieve data from API
        const getBooks = await search( words, 20 )
        if( !getBooks.error )  {
            // loop over the getBooks
            const commanBooks = getBooks.map( item => {
                // If an array doesn't contain the imageLinks key set up it like ""
                if(item.imageLinks === undefined){
                    item.imageLinks = {thumbnail: ""}
                }
                return item
            })
            setFoundBooks(commanBooks) 
        }else {
            // If get error or empty data clear the results
            setFoundBooks([])
        }
    }

// Invoke the debounce function with the searchBooks
const searchBooksDebounce = debounce(searchBooks, 500)

return (
    <div className="search-books">
        <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
            <InputField searchBooks={searchBooksDebounce}/>
        </div>
        <div className="search-books-results">
            <ol className="books-grid">
                {
                    foundBooks.map( book => <li key={book.id}><Book book={book} changeCategory={changeCategory} books={books}
                    /></li>)
                }
            </ol>
        </div>
    </div>
    )
}

Search.prototype = {
    books: PropTypes.array.isRequired,
    changeCategory: PropTypes.func.isRequired,
}


export default Search;