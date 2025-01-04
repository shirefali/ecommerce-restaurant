import { useState } from "react";
import CardData from "./CardData";
import FoodCard from "./FoodCard";

const Home = () => {
  const [data, setData] = useState(CardData);
  return (
    <section className="pb-5 container">
      <h2 className="mb-3 text-center text-xl-start">
        Our Existing Food In The Restaurant
      </h2>
      <div className="row d-flex justify-content-around align-items-center gap-4">
        {data.map((card) => {
          return <FoodCard key={card.id} {...card} />;
        })}
      </div>
    </section>
  );
};

export default Home;
