import React, { useState } from "react";

const CardCounter = (props) => {
  const [count, setCount] = useState(0);
  const imageUris = props.cardData.image_uris;
  
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    props.changePriceFunction(props.cardData.prices.usd);
  };
  const handleFoilIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    props.changePriceFunction(props.cardData.prices.usd_foil);
  };

  if (imageUris) {
    return (
      <div className="container-fluid">
        <div className="row">
          <p className="col text-center">{props.cardName}</p>
        </div>
        <div className="row">
          <img src={imageUris.normal} className="col" />
        </div>
        <div className="row">
          <div className="col">Price: ${props.cardData.prices.usd}</div>
          <div className="col">Foil Price: ${props.cardData.prices.usd_foil}</div>
        </div>
        
        <div className="row m-auto">
          <button
            type="button"
            className="btn btn-danger col"
            onClick={handleDecrement}
          >
            -
          </button>
          <h3 className="col text-center">{count}</h3>
          <button
            type="button"
            className="btn btn-success col"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>

        <div className="row m-auto">
          <button
            type="button"
            className="btn btn-info col"
            onClick={handleFoilIncrement}
          >
            Foil
          </button>

        </div>
      </div>
    );
  } else {
    return <div className="col-0 invisible"></div>;
  }
};

export default CardCounter;
