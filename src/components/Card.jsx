import { useState } from "react";
const Card = ({ id, image, price, info, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : `${info.substring(0,200)}....`;

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };
  return (
    <div className="tour-info">
      <div className="card">
        <img src={image} alt="name" />
        <div className="tour-details">
          <h4 className="text-green-500 font-bold text-3xl">₹{price}</h4>
          <h3 className="text-3xl font-medium">{name}</h3>
        </div>
        <div>
          {info}
          <span onClick={readMoreHandler} className="read-more">
            {readMore ? `Show Less` : `Read More`}
          </span>
        </div>
        <button onClick={() => removeTour(id)} className="btn-red">Not Interested</button>
      </div>

    </div>
  );
};

export default Card;
