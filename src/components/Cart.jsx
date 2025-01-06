import Table from "./Table";
import { clearCart } from "../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import NoItems from "./NoItems";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <section className="cart container py-4">
      {products.length > 0 ? (
        <div className="d-flex justify-content-between d-md-none">
          <h4 className="fs-6 border p-2 text-danger">
            total: $
            {products.reduce((acc, product) => {
              return acc + product.price * product.qnty;
            }, 0)}
          </h4>

          <h4 className="fs-6 border p-2 text-danger ">
            Items In Cart:{" "}
            {products.reduce((acc, product) => {
              return acc + product.qnty;
            }, 0)}
          </h4>
        </div>
      ) : (
        ""
      )}

      <div className="cart-header d-flex align-items-center justify-content-between bg-black text-white px-4 py-3 rounded-top">
        <h5 className="fs-6">
          Cart Calculation
          {products.length > 0
            ? ` (${products.reduce((acc, product) => {
                return parseInt(acc + parseInt(product.qnty));
              }, 0)})`
            : ""}
          <br />
        </h5>

        {products.length > 0 ? (
          <Button
            className="empty-cart-btn fs-6"
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
      {products.length > 0 ? <Table /> : <NoItems />}
    </section>
  );
};

export default Cart;
