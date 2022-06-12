import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

interface Products {
  id: string;
  title: string;
  price: number;
  description: string;
}

const DUMMY_DATA: Products[] = [
  {
    id: "b1",
    title: "My first book",
    price: 100,
    description: "This book was written in 2009",
  },
  {
    id: "b2",
    title: "My second book",
    price: 90,
    description: "This book was written in 2012",
  },
];

const Products: React.FC = () => {
  return (
    <section className={styles.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
