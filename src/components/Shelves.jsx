import Book from "./Book";

const Shelves = ({ books, bookUpdate, addNewBook }) => {
    const shelves = ["wantToRead", "currentlyReading", "read"]

    return (
    <div className="list-books-content">
        <div className="bookshelf">
            {/* loop over the shelves */}
            {shelves.map((shelf, index) => (
                <div key={index}>
                    <h2 className="bookshelf-title">{shelf}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {/* loop over the books */}
                        { books.map((book) => (
                            shelf === book.shelf ? <li key={book.id}><Book book={book} bookUpdate={bookUpdate} 
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

export default Shelves;

