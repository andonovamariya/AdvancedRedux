import { FormEvent } from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../store/cart-slice";
import Card from "../UI/Card";
import styles from "./ProductItem.module.css";

interface ProductItemProps {
  id: string;
  title: string;
  price: number;
  description: string;
}

const ProductItem: React.FC<ProductItemProps> = (props) => {
  const dispatch = useDispatch();

  const { id, title, price, description } = props;

  const addToCartHandler = (event: FormEvent) => {
    event.preventDefault();
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={styles.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={styles.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={styles.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
