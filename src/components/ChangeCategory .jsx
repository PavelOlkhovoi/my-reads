import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ChangeCategory = ({ book, addNewBook, changeCategory, books}) => {
  const checkShelfSirisly = () => {
    let timeValue = '';
    const uniq = books.reduce((acc, uBook)=> {
      if(uBook.id === book.id){
        return acc = false;
      }
  
      return acc;
    }, true)
    // books.forEach( testBook => testBook.id === book.id ? testBook.shelf : "none")
    if(!uniq){
     
      books.forEach( testBook => {
        if(testBook.id === book.id) {
          timeValue = testBook.shelf
        }
      })
      return timeValue;
    }

    console.log('Gebroaltar', uniq)

    return "none"
  }




const [ifShelf, setIfShelf] = useState(()=> book.shelf ? book.shelf : checkShelfSirisly())
const [ firstCLick, setFirstClick] = useState(false)

// const checkShelfSirisly = () => {
//   const uniq = books.reduce((acc, uBook)=> {
//     if(uBook.id === book.id){
//       return acc = false;
//     }

//     return acc;
//   }, true)

//   if(!uniq){
//     books.forEach( testBook => testBook.id === book.id ? testBook.shelf : "none")
//   }
// }

useEffect( ()=> {
  // books.forEach(appBook => setIfShelf(appBook.shelf))
  console.log("Use Effect 123", ifShelf)
}, [book])

  const shelfUpdate = (event) => {
    if(!firstCLick){
      setFirstClick(true)
      return false
    }else {
      const shelf = event.target.value
      console.log(shelf)
      // changeCategory(book, shelf)
      addNewBook(book, shelf)
      setFirstClick(false)
    }

  }


  return (
      <div className="book-shelf-changer">
        {/* <select defaultValue={ book.shelf !== undefined ? book.shelf : "none" } onClick={ shelfUpdate }> */}
        <select defaultValue={ ifShelf } onClick={ shelfUpdate }>
            <option disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read" >Read</option>
            <option value="none">None</option>
        </select>
    </div>
  )
}

export default ChangeCategory;