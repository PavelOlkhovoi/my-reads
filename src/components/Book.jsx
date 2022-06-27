import PropTypes from "prop-types";
import ChangeCategory from "./ChangeCategory ";
const Book = ({ book, addNewBook }) => {

    return (
        <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage:
                `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>

        <ChangeCategory book={book} addNewBook={addNewBook} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
}


export default Book;