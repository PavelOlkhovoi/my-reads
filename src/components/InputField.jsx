const InputField = ({ searchBooks })=> {
    return (
        <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onChange={searchBooks}
        />
      </div>
    )
}

export default InputField;