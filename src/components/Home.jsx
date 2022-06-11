import Search from "./Search.jsx";
import Shelves from "./Shelves.jsx";
import AddBook from "./AddBook.jsx";
const Home = ({books, bookUpdate})=> {
    return (
        <div className="App">
            <div className="list-books">
                <Search />
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Shelves books={books} bookUpdate={bookUpdate}/>
                    <AddBook/>
                </div>
            </div>
        </div>
    )
}

export default Home;