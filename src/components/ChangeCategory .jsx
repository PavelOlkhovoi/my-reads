import { useState } from "react";

const ChangeCategory = ({book, bookUpdate}) => {
  // TODO: SOLVE BAG WITH MULTIPLE CLICKS
  const [firstCLick, setFirstClick] = useState(0)
  const shelfUpdate = (e) => {
    let shelf = e.target.value;

    if(shelf !== book.shelf && firstCLick > 0){
      bookUpdate(book, e.target.value)
      return setFirstClick(0)
    }

    setFirstClick( num => num + 1);
  }
    return (
        <div className="book-shelf-changer">
        <select onClick={shelfUpdate}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">
            Currently Reading
          </option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
}

export default ChangeCategory;