import Table from "./Table";
import { clearCart } from "../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <section className="cart container py-4">
      <div className="cart-header d-flex align-items-center justify-content-between bg-black text-white px-4 py-3 rounded-top">
        <h5>
          Cart Calculation
          {products.length > 0
            ? ` (${products.reduce((acc, product) => {
                return parseInt(acc + parseInt(product.qnty));
              }, 0)})`
            : ""}
        </h5>

        {products.length > 0 ? (
          <Button
            variant="danger"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Empty Cart
          </Button>
        ) : (
          ""
        )}
      </div>
      {products.length > 0 ? (
        <Table />
      ) : (
        <div className="cart-body shadow p-5 rounded-bottom">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="#ccc"
              style={{ width: "50px", height: "50px" }}
            >
              <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            <p style={{ color: "#ccc" }}>Your Cart Is Empty</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
