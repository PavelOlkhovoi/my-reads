import Book from "./Book";

const Shelves = () => {
    return (
    <div className="list-books-content">
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <li>
                        <Book />
                    </li>
                    <li>
                        <Book />
                    </li>
                </ol>
            </div>
        </div>
    </div>
    )
}

export default Shelves;