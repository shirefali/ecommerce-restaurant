import { Button } from "react-bootstrap";

const Cart = () => {
  const arr = [0];
  return (
    <section className="cart container py-4">
      <div className="cart-header d-flex align-items-center justify-content-between bg-black text-white px-4 py-3 rounded-top">
        <h5>Cart Calculation{arr.length > 0 ? ` (${0})` : ""} </h5>
        {arr.length > 0 ? <Button variant="danger">Empty Cart</Button> : ""}
      </div>
      {arr.length > 0 ? (
        <table className="table cart-table table-responsive-sm shadow rounded-bottom">
          <thead>
            <tr>
              <th>Action</th>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th className="text-end">Total Amount</th>
            </tr>
          </thead>
          <tbody className="my-3">
            <tr>
              <td>
                <Button className="delete-product" variant="danger">
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
                  <img src="vite.svg" alt="" />
                </div>
              </td>
              <td>Punaj</td>
              <td>500</td>
              <td>
                <div className="d-flex align-items-center">
                  <Button variant="primary">-</Button>
                  <span
                    className="mx-2 fw-bold text-center px-3 py-2 rounded"
                    style={{ border: "1px solid #000" }}
                  >
                    1
                  </span>
                  <Button variant="primary">+</Button>
                </div>
              </td>
              <td className="text-end">300</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td colSpan={3}></td>
              <th>
                Items In Cart : <span className="text-danger">1</span>
              </th>
              <th>
                Total Price : <span className="text-danger">$1</span>
              </th>
            </tr>
          </tfoot>
        </table>
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
