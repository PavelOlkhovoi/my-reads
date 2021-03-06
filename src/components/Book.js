import PropTypes from "prop-types";
import ChangeCategory from "./ChangeCategory";
const Book = ({books, book, changeCategory}) => {

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

        <ChangeCategory books={books} book={book} changeCategory={changeCategory} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
}

Book.prototype = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeCategory: PropTypes.func.isRequired,
}

export default Book;