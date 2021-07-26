import { product } from "./interfaces";
import { useSelector, useDispatch } from "react-redux";
import { addtobasket } from "./redux/basket";
import { TStore } from "./redux/store";

const ProductCard: React.FC<product> = ({
  category,
  description,
  id,
  image,
  price,
  title,
}) => {
  const dispatch = useDispatch();

  const { products } = useSelector((state: TStore) => state.basket);

  const currentproduct = {
    category: category,
    description: description,
    id: id,
    image: image,
    price: price,
    title: title,
  };

  return (
    <div className="card">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h3>{category}</h3>
      <h3>${price}</h3>
      <div className="button-div">
        <button onClick={() => console.log(currentproduct)}>Buy now</button>
        <button onClick={() => dispatch(addtobasket(currentproduct))}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
