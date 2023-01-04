
import Navbar from "./components/Navbar";
import Bookslist from "./components/Bookslist";

import "./index.css";

function App() {
  const Books = [
    {
      id: 1,
      title: 'The Holy Bible',
      author: 'Holy Spirit',
      pages: 1200,
      image: '../public/img/Bible.jpg',
    },
    {
      id: 2,
      title: 'Beloved',
      author: 'Toni Morrison',
      pages: 324,
      image: './public/img/Beloved.jpg',
    },
    {
      id: 3,
      title: 'The color Purple',
      author: 'Alice Walker',
      pages: 304,
      image: '../public/img/The-Color-Purple.jpg',
    },
    {
      id: 4,
      title: 'The Invisible',
      author: 'Ralph Ellison',
      pages: 581,
      image: '../public/img/The-invisible-Man.jpg',
    },
    {
      id: 5,
      title: 'The Great Gatsby',
      author: 'F. Scott',
      pages: 208,
      image: '../public/img/The-Great-Gatsby.jpg',
    },
  ];
  return (
    <>
      <Navbar />
      <Bookslist books={Books} />
    </>
  );
}

export default App;
