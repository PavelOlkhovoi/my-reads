import PropTypes from "prop-types";
import Book from "./Book";

const Shelves = ({ books, bookUpdate, addNewBook }) => {
    // Create objects to identify and show shelves with proper names
    const shelves = [{shelf:"wantToRead", display: "Want to read"}, {shelf: "currentlyReading", display: "Currently reading"}, {shelf:"read", display: "Read"}]

    return (
    <div className="list-books-content">
        <div className="bookshelf">
            {/* loop over the shelves */}
            {shelves.map((shelf, index) => (
                <div key={index}>
                    <h2 className="bookshelf-title">{shelf.display}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {/* loop over the books */}
                        { books.map((book) => (
                            shelf.shelf === book.shelf ? <li key={book.id}><Book book={book} bookUpdate={bookUpdate} 
                            addNewBook={addNewBook} place="shelf" books={books}/></li> : ""
                        )) }
                        </ol>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

Shelves.prototype = {
    books: PropTypes.array.isRequired,
    bookUpdate: PropTypes.func.isRequired,
    addNewBook: PropTypes.func.isRequired,
}


export default Shelves;

