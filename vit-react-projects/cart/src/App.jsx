// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

function App() {
  const items = [
    {
      id: 1,
      name: "first",
      price: 10,
    },
  ];

  const cartItems = items.map((item) => [item.id, item]);
  console.log(cartItems);
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
