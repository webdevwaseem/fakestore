import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { product } from "./interfaces";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { TStore } from "./redux/store";

function Homepage() {
  const [FetchData, setFetchData] = useState<product[]>();
  const [searchvalue, setsearchvalue] = useState("");

  const { products } = useSelector((state: TStore) => state.basket);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setFetchData(json));
  }, []);

  return (
    <div className="App">
      <div className="navbar">
        <Link to="/">
          <img
            src="https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg"
            alt="logo"
          />
        </Link>
        <form>
          <input
            type="text"
            placeholder="Search"
            value={searchvalue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setsearchvalue(e.target.value)
            }
          />
        </form>
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

      <div className="product-page">
        {FetchData
          ? FetchData.map((single) => (
              <ProductCard
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
    </div>
  );
}

export default Homepage;
