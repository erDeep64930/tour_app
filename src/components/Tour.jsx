import Card from "./Card";

const Tour = ({ tours, removeTour }) => {
  return (
    <>
      <div>
        <h2 className="title">Plan Tour with love</h2>
      </div>
      <div className="container">
        <div className="cards">
          {tours.map((tour) => {
            return <Card {...tour} removeTour={removeTour} key={tour.id}></Card>;
          })}
        </div>
      </div>
    </>
  );
};

export default Tour;
