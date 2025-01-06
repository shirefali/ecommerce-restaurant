import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import {
  addToCart,
  reduceQuantity,
  removeFromCart,
} from "../redux/features/cartSlice";
import { toast } from "react-toastify";

const CartMobileList = () => {
  const { products } = useSelector((state) => state.cart); // جلب المنتجات من الـ store
  const dispatch = useDispatch();

  const reduceOrRemove = (ele) => {
    if (ele.qnty <= 1) {
      dispatch(removeFromCart(ele));
      toast.success("Product Removed");
    } else {
      dispatch(reduceQuantity(ele));
    }
  };

  return (
    <div className="cart-list d-md-none">
      {products.map((product) => (
        <div className="cart-item" key={product.id}>
          <img src={product.imgdata} alt={product.dish} />
          <div className="details">
            <h5>{product.dish}</h5>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.qnty}</p>
            <p>Total: ${product.qnty * product.price}</p>
          </div>
          <div className="actions">
            <Button variant="primary" onClick={() => reduceOrRemove(product)}>
              -
            </Button>
            <Button
              variant="danger"
              onClick={() =>
                dispatch(removeFromCart(product)) &&
                toast.success("Product Removed")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="white"
                style={{ width: "20px", height: "20px" }}
              >
                <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </Button>
            <Button
              variant="primary"
              onClick={() => dispatch(addToCart(product))}
            >
              +
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartMobileList;
