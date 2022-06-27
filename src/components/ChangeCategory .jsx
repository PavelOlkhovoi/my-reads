import PropTypes from "prop-types";
import { useState } from "react";

const ChangeCategory = ({ book, addNewBook }) => {

const [ firstCLick, setFirstClick] = useState(false)

  const shelfUpdate = (event) => {
    console.log(event.target.value)
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

export default ChangeCategory;