import { useDispatch, useSelector } from "react-redux";

import { uiSliceActions } from "../store/ui-slice";

import styles from "./CartButton.module.css";

interface CartButtonState {
  cart: {
    totalQuantity: number;
  };
}

const CartButton: React.FC = () => {
  const dispatch = useDispatch();
  const cartQuantity: number = useSelector(
    (state: CartButtonState) => state.cart.totalQuantity
  );

  const toggleCartHandler = () => {
    dispatch(uiSliceActions.toggle());
  };

  return (
    <button className={styles.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={styles.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
