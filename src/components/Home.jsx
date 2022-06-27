import PropTypes from "prop-types";
import Shelves from "./Shelves.jsx";
import AddBook from "./AddBook.jsx";

const Home = ({books, addNewBook})=> {
    return (
        <div className="App">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Shelves books={books}/>
                    <AddBook />
                </div>
            </div>
        </div>
    )
}

export default Home;