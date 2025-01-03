import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const FoodCard = ({
  dish,
  imgdata,
  address,
  delimg,
  arrimg,
  price,
  rating,
}) => {
  return (
    <Card>
      <Card.Img variant="top" src={imgdata} />
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between">
          <Card.Title>{dish}</Card.Title>
          <span className="bg-success px-2 d-flex align-items-center text-white rounded mb-3">
            {rating}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              style={{ width: "15px", height: "10px", marginLeft: "5px" }}
              fill="white"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </span>
        </div>
        <div className="d-flex align-items-line justify-content-between">
          <Card.Text>{address}</Card.Text>
          <Card.Text>${price}</Card.Text>
        </div>
        <hr style={{ marginTop: "-10px" }} />
        <div className="d-flex align-items-center justify-content-between">
          <img src={arrimg} alt={dish} style={{ width: "20px" }} />
          <Button variant="success">Add To Cart</Button>
          <img src={delimg} alt="del-img" style={{ width: "40px" }} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
