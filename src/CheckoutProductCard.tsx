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
    <div className="checkoutcard">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h2>${price}</h2>
      <h2>{category}</h2>
      <button>Remove Item</button>
    </div>
  );
};

export default ProductCard;
