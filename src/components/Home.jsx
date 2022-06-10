import Search from "./Search.jsx";
import Shelves from "./Shelves.jsx";
import AddBook from "./AddBook.jsx";
const Home = ({books})=> {
    console.log(books)

    return (
        <div className="App">
            <div className="list-books">
                <Search />
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Shelves />
                    <AddBook/>
                </div>
            </div>
        </div>
    )
}

export default Home;