import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

interface RootState {
  ui: {
    isCartVisible: boolean;
  };
}

const App: React.FC = () => {
  const showCart = useSelector((state: RootState) => state.ui.isCartVisible);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
};

export default App;
