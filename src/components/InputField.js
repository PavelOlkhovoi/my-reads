import PropTypes from "prop-types";

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

InputField.prototype = {
  searchBooks: PropTypes.func.isRequired,
}


export default InputField;