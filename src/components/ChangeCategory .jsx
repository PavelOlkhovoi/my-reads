import PropTypes from "prop-types";
import { useState } from "react";

const ChangeCategory = ({book, addNewBook, books}) => {

  /**
  * @description Checks books status and sets up the proper shelf inside the select tag
  */
  const checkShelf = () => {
    let timeValue = '';
    // Checks if the book had already been added 
    const unique = books.reduce((acc, uBook)=> {
      if(uBook.id === book.id){
        return acc = false;
      }
      return acc;
    }, true)
    // Checks if the book had already been added 
    if(!unique){
      books.forEach( testBook => {
        if(testBook.id === book.id) {
          // Set up the default value
          timeValue = testBook.shelf
        }
      })
      return timeValue;
    }

    return "none"
  }

  const [ifShelf, setIfShelf] = useState(()=> book.shelf ? book.shelf : checkShelf())
  const [firstCLick, setFirstClick] = useState(false)

    /**
    * @description Change shelves
    * @param {event} event The value of search's inputs
    */
    const shelfUpdate = (event) => {
      // The first click skips the first event
      if(!firstCLick){
        setFirstClick(true)
        return false
      }else {
        const shelf = event.target.value
        addNewBook(book, shelf)
        setFirstClick(false)
      }

    }

  return (
    <div className="book-shelf-changer">
      <select defaultValue={ ifShelf } onClick={ shelfUpdate }>
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
  books: PropTypes.array.isRequired,
}

export default ChangeCategory;