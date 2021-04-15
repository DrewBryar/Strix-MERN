import React, { useState } from "react";

const CardCounter = (props) => {
  const [count, setCount] = useState(0);
  const imageUris = props.cardData.image_uris;

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
    props.changePriceFunction("-" + props.cardData.prices.usd);
  };
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    props.changePriceFunction(props.cardData.prices.usd);
  };
  const handleFoilIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    if (props.cardData.prices.usd_foil) {
      props.changePriceFunction(props.cardData.prices.usd_foil);
    } else {
      props.changePriceFunction("0");
    }
  };
  const handleFoilDecrement = () => {
    setCount((prevCount) => prevCount - 1);
    props.changePriceFunction("-" + props.cardData.prices.usd_foil);
    // This was really cute ^^^
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
          <div className="col">
            Price ${parseFloat(props.cardData.prices.usd || 0)}
          </div>
          <div className="col"></div>
          <div className="col text-center">
            Foil ${parseFloat(props.cardData.prices.usd_foil || 0)}
          </div>
        </div>

        <div className="row m-auto">
          <div className="row">
            <button
              type="button"
              className="btn btn-danger col"
              onClick={handleDecrement}
            >
              -
            </button>
            <button
              type="button"
              className="btn btn-success col"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>

          <h3 className="col text-center">{count}</h3>

          <div className="row">
            <button
              type="button"
              className="btn btn-danger col"
              onClick={handleFoilDecrement}
            >
              -
            </button>
            <button
              type="button"
              className="btn btn-success col"
              onClick={handleFoilIncrement}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="col-0 invisible"></div>;
  }
};

export default CardCounter;
