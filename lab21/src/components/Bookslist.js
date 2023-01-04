import Book from "./Book";
function Bookslist(props) {
  return (
    <ul>
      {props.books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          pages={book.pages}
          image={book.image}
        />
      ))}
    </ul>
  );
}
export default Bookslist;
