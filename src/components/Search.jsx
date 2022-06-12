import { Link } from "react-router-dom";
import InputField from "./InputField";

const Search = () => {
    return (
    <div className="search-books">
        <div className="search-books-bar">
        <Link to="/"
            className="close-search"
        >
            Close
        </Link>
        <InputField/>
        </div>
        <div className="search-books-results">
        <ol className="books-grid"></ol>
        </div>
    </div>
    )
}

export default Search;