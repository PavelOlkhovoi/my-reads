import PropTypes from "prop-types";
import { useState } from "react";

const ChangeCategory = ({ book, bookUpdate, addNewBook, place, books }) => {

const [ firstCLick, setFirstClick ] = useState(false)

  /**
  * @description Change shelves
  * @param {event} e Callback function
  */
const shelfUpdate = (e) => {
  // The first click skips the first event
  if( !firstCLick ) {
    setFirstClick( true );
    return false;
  }else {
    // Get the new shelf 
    let shelf = e.target.value;
    // If old and new shelves are different update the data
    if( shelf !== book.shelf ){
      // The book came from the Shelves component
      if( place === "shelf") {
        bookUpdate( book, shelf )
      }else {
        // The book came from the Search component

        // Compare the new book on a shelf
        const compare = books.reduce((acc, item) => {
            if(item.id === book.id){
              return acc = false;
            }
            return acc;
        }, true);
      
          // Avoid doubles 
          if(compare) {
          // Add the new shelf
          book.shelf = shelf;
          // Attach a book to a shared array with books
          addNewBook( book )
        }
      }

      return setFirstClick( false )
    }
  }


}
  return (
      <div className="book-shelf-changer">
        <select defaultValue={ book.shelf !== undefined ? book.shelf : "none" } onClick={ shelfUpdate }>
            <option disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read" >Read</option>
            <option value="none">None</option>
        </select>
    </div>
  )
}

ChangeCategory.prototype = {
  book: PropTypes.object.isRequired,
  addNewBook: PropTypes.func.isRequired,
  place: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
}


export default ChangeCategory;