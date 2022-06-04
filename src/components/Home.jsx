import Search from "./Search.jsx";
import Categories from "./Categories.jsx";
import AddBook from "./AddBook.jsx";
const Home = ()=> {

    return (
        <div className="App">
            <div className="list-books">
                <Search />
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Categories />
                    <AddBook/>
                </div>
            </div>
        </div>
    )
}

export default Home;