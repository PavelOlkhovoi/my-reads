import Search from "./Search.jsx";
import Categories from "./Categories.jsx";
import AddBook from "./AddBook.jsx";
const Home = ()=> {

    return (
        <div className="App">
            <Search />
            <h1>Главный предок</h1>
            <Categories />
            <AddBook/>
        </div>
    )
}

export default Home;