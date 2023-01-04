import "../index.css";
function Book(props) {
  return (
    <li className="book">
      <div>
        <h3>Rank: {props.id}</h3>
        <h3>Title: {props.title}</h3>
        <h3>Author: {props.author}</h3>
        <h3>Number of Pages: {props.pages}</h3>
      </div>
      <div>
        <img src={props.image} alt={props.title} />
      </div>
    </li>
  );
}
export default Book;
