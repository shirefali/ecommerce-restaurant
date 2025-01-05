import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import {
  addToCart,
  clearCart,
  reduceQuantity,
  removeFromCart,
} from "../redux/features/cartSlice";

const Table = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(products);
  return (
    <table className="table cart-table table-responsive-sm shadow rounded-bottom">
      <thead>
        <tr>
          <th>Action</th>
          <th>Product</th>
          <th>Name</th>
          <th>Price</th>
          <th className="ps-4">Quantity</th>
          <th className="text-end">Total Amount</th>
        </tr>
      </thead>
      {products.map((product) => {
        return (
          <tbody className="my-3" key={product.id}>
            <tr>
              <td>
                <Button
                  className="delete-product"
                  variant="danger"
                  onClick={() => dispatch(removeFromCart(product))}
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
              </td>
              <td>
                <div>
                  <img
                    src={product.imgdata}
                    style={{ width: "60px" }}
                    alt={product.dish}
                  />
                </div>
              </td>
              <td>{product.dish}</td>
              <td>${product.price}</td>
              <td>
                <div className="d-flex align-items-center">
                  <Button
                    variant="primary"
                    onClick={() =>
                      dispatch(
                        product.qnty <= 1
                          ? removeFromCart(product)
                          : reduceQuantity(product)
                      )
                    }
                  >
                    -
                  </Button>
                  <span
                    className="mx-2 fw-bold text-center px-3 py-2 rounded"
                    style={{ border: "1px solid #000" }}
                  >
                    {product.qnty}
                  </span>
                  <Button
                    variant="primary"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    +
                  </Button>
                </div>
              </td>
              <td className="text-end">${product.qnty * product.price}</td>
            </tr>
          </tbody>
        );
      })}
      <tfoot>
        <tr>
          <td></td>
          <td colSpan={3}></td>
          <th>
            Items In Cart :{" "}
            <span className="text-danger">
              {products.reduce((acc, product) => {
                return acc + product.qnty;
              }, 0)}
            </span>
          </th>
          <th>
            Total Price :{" "}
            <span className="text-danger">
              $
              {products.reduce((acc, product) => {
                return acc + product.price * product.qnty;
              }, 0)}
            </span>
          </th>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
