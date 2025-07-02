import Card from "./features/cards/components/card";
import "./features/cards/data/data.ts";
import { products } from "./features/cards/data/data.ts";

function App() {
  return (
    <>
      {products.map((product) => (
        <Card key={product.id} {...products}></Card>
      ))}
    </>
  );
}

export default App;
