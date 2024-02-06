import { useState } from "react";

const Form = () => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {};

  return (
    <section>
      <h4>color generator</h4>
      <form>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </form>
    </section>
  );
};
export default Form;
