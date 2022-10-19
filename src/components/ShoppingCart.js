import ShoppingItem from "./ShoppingItem";

function ShoppingCart() {
  return (
    <>
      <header>
        <h1>Shopping Cart</h1>
      </header>
      <main>
        <ShoppingItem name="🍌 Bananas" priceInCent={60} />
        <ShoppingItem name="🍪 Cookies" priceInCent={95} />
        <ShoppingItem name="🥧 Cake" priceInCent={650} />
        <ShoppingItem name="💎 Diamonds" priceInCent={99999} />
      </main>
    </>
  );
}

export default ShoppingCart;
