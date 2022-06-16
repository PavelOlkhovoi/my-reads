import PropTypes from "prop-types";
import Shelves from "./Shelves.jsx";
import AddBook from "./AddBook.jsx";

const Home = ({books, bookUpdate})=> {
    return (
        <div className="App">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Shelves books={books} bookUpdate={bookUpdate}/>
                    <AddBook />
                </div>
            </div>
        </div>
    )
}

Home.prototype = {
    books: PropTypes.array.isRequired,
    bookUpdate: PropTypes.func.isRequired,
}

export default Home;