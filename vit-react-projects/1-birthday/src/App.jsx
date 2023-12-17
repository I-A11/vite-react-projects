import data from "./data";
import { useState } from "react";
import List from "./component/List";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>Birthday Today: {people.length}</h3>
        <List people={people} />
        <div className="btn-container">
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setPeople([])}
          >
            Clear
          </button>
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setPeople(data)}
          >
            Refresh
          </button>
        </div>
      </section>
    </main>
  );
};
export default App;
