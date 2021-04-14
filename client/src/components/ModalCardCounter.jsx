import React, { useState } from "react";

const CardCounter = (props) => {
  const [count, setCount] = useState(0);
  const [cardSide, setCardSide] = useState(true);
  const problemBoys = props.cardData.card_faces;

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
    props.changePriceFunction("-"+props.cardData.prices.usd );
  };
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    props.changePriceFunction(props.cardData.prices.usd);
  };
  const handleFoilIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    if(props.cardData.prices.usd_foil){
      props.changePriceFunction(props.cardData.prices.usd_foil);
    } else{
      props.changePriceFunction("0");
    }
    
  };
  const handleFoilDecrement = () => {
    setCount((prevCount) => prevCount - 1);
    props.changePriceFunction("-"+props.cardData.prices.usd_foil );
    // This was really cute ^^^
  };

  const flipDown = (e) => {
    console.log("FLIP DOWN");
    setCardSide(!cardSide);
  };
  const flipUp = () => {
    console.log("FLIP UP");
    setCardSide(true);
  };

  if (cardSide == true) {
    return (
      <div className="container-fluid">
        <div className="row">
          <p className="col text-center">{props.cardName}</p>
        </div>
        <div className="row">
          <img onClick={flipDown} src={problemBoys[0].image_uris.normal} className="col" />
        </div>
        <div className="row">
          <div className="col">Price ${props.cardData.prices.usd ||0}</div>
          <div className="col"></div>
          <div className="col text-center">
            Foil ${parseFloat(props.cardData.prices.usd_foil ||0)}
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
    return (
<div className="container-fluid">
        <div className="row">
          <p className="col text-center">{props.cardName}</p>
        </div>
        <div className="row">
          <img onClick={flipDown} src={problemBoys[1].image_uris.normal} className="col" />
        </div>
        <div className="row">
          <div className="col">Price ${props.cardData.prices.usd ||0}</div>
          <div className="col"></div>
          <div className="col text-center">
            Foil ${parseFloat(props.cardData.prices.usd_foil ||0)}
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
  }
};

export default CardCounter;
