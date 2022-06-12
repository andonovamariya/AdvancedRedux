import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

import styles from "./CartItem.module.css";

interface CartItemProps {
  item: {
    id: string;
    title: string;
    quantity: number;
    total: number;
    price: number;
  };
}

const CartItem: React.FC<CartItemProps> = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler = (event: FormEvent) => {
    event.preventDefault();
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = (event: FormEvent) => {
    event.preventDefault();
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        title,
      })
    );
  };
  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${total.toFixed(2)}{" "}
          <span className={styles.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
