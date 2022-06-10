import InputField from "./InputField";

const Search = () => {
    return (
    <div className="search-books">
        <div className="search-books-bar">
        <a href="/#"
            className="close-search"
        >
            Close
        </a>
        <InputField/>
        </div>
        <div className="search-books-results">
        <ol className="books-grid"></ol>
        </div>
    </div>
    )
}

export default Search;