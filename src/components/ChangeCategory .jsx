import PropTypes from "prop-types";
import { useState } from "react";

const ChangeCategory = ({book, books, changeCategory}) => {

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

    /**
    * @description Change shelves
    * @param {event} event The value of search's inputs
    */
    const shelfUpdate = (event) => {
      const shelf = event.target.value
      changeCategory(book, shelf)
    }

  return (
    <div className="book-shelf-changer">
      <select defaultValue={ ifShelf } onChange={ shelfUpdate }>
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
  books: PropTypes.array.isRequired,
  changeCategory: PropTypes.func.isRequired,
}

export default ChangeCategory;