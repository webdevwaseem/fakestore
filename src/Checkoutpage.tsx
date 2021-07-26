import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { TStore } from "./redux/store";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import CheckoutProductCard from "./CheckoutProductCard";
import { useState, useEffect } from "react";

function Checkoutpage() {
  const { products } = useSelector((state: TStore) => state.basket);
  const [finalcarttotal, setfinalcarttotal] = useState(0);

  useEffect(() => {
    if (products) {
      let carttotal = 0;
      products.map((product) => (carttotal += product.price));
      Math.round(carttotal);
      setfinalcarttotal(carttotal);
    }
  }, [products]);

  return (
    <div className="Checkoutpage">
      <div className="navbar">
        <Link to="/">
          <img
            src="https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg"
            alt=""
          />
        </Link>
        <Link to="/checkoutpage">
          <div className="cart-div">
            <ShoppingCartIcon fontSize="medium" className="shopping-cart" />
            {products ? (
              <h2 className="cart-div-h2">{products.length}</h2>
            ) : (
              console.log("notworking")
            )}
          </div>
        </Link>
      </div>
      <div className="checkoutbody">
        <div className="product-side">
          {products
            ? products.map((single) => (
                <CheckoutProductCard
                  key={single.id}
                  category={single.category}
                  description={single.description}
                  id={single.id}
                  image={single.image}
                  title={single.title}
                  price={single.price}
                />
              ))
            : ""}
        </div>
        <div className="totalside">
          <div className="totalamountcard">
            <h1>
              Total Amount
              <br /> Payable:$
              <br />
              {finalcarttotal}
            </h1>
            <button>checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkoutpage;
