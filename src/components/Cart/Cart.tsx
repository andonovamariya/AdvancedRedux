import Card from "../UI/Card";
import CartItem from "./CartItem";
import Item from "../interfaces/items";

import styles from "./Cart.module.css";
import { useSelector } from "react-redux";

interface CartState {
  cart: {
    items: Item[];
  };
}

const Cart: React.FC = () => {
  const cartItems: Item[] = useSelector((state: CartState) => state.cart.items);

  return (
    <Card className={styles.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item: Item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
