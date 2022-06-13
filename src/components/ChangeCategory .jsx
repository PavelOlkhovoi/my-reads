import { useState } from "react";

const ChangeCategory = ({ book, bookUpdate }) => {
  // TODO: SOLVE BAG WITH MULTIPLE CLICKS
  const [firstCLick, setFirstClick] = useState(false)
  
  const shelfUpdate = (e) => {
    let shelf = e.target.value;

    // Fierst click only shows shelves
    if(firstCLick === false) {
      setFirstClick(true);
      return false
    }

    if(shelf !== book.shelf){
      bookUpdate(book, shelf)
      return setFirstClick(setFirstClick)
    }

    const checked = () => {
      if(book.shelf === "read") {
        return "selected"
      }

      if(book.shelf === "wantToRead") {
        return "selected"
      }

      if(book.shelf === "currentlyReading") {
        return "selected"
      }
    }

 
  }
    return (
        <div className="book-shelf-changer">
        <select value={book.shelf} onClick={shelfUpdate}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading" checked={book.shelf === "currentlyReading" ? "selected" : ""}>
            Currently Reading
          </option>
          <option value="wantToRead">Want to Read</option>
          <option value="read" >Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
}

export default ChangeCategory;