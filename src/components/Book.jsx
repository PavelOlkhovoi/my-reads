import ChangeCategory from "./ChangeCategory ";
const Book = ({ book, bookUpdate }) => {
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
        <ChangeCategory bookUpdate={bookUpdate} book={book} />

        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
}

export default Book;