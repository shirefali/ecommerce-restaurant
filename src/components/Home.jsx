import CardData from "./CardData";
import FoodCard from "./FoodCard";

const Home = () => {
  return (
    <section>
      <div className="container">
        <h2>Our Existing Food In The Restaurant</h2>
        <div className="our-food">
          {CardData.map((card) => {
            console.log(card);
            return <FoodCard key={card.id} {...card} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
