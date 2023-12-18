import { useState } from "react";
import data from "./data";
import List from "./component/List";

const App = () => {
  const [books, setBooks] = useState(data);
  return (
    <main>
      <h2>Harry Potter's Books</h2>
      <List books={books} />
    </main>
  );
};
export default App;
