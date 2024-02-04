import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" name="amount" id="number" />
      </form>
    </section>
  );
};
export default App;
