import React, { useEffect, useState } from "react";
import axios from "axios";
import CardCounter from "./CardCounter";

const ExtendedArt = (props) => {
  const apiExtendedArt =
    "http://api.scryfall.com/cards/search?q=set%3Astx+frame%3Aextendedart+not%3Adouble-faced&unique=prints&as=grid&order=set";
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get(apiExtendedArt).then((res) => {
      setCards(res.data.data);
    });
  }, []);

  const changeTotalPrice = props.changePriceFunction;

  const listCards = cards.map((card) => (
    <div className="col-4">
      <CardCounter
        cardData={card}
        cardName={card.name}
        changePriceFunction={changeTotalPrice}
      />
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="jumbotron text-center">{props.title}</h1>
        </div>
      </div>
      <div className="row">{listCards}</div>
    </div>
  );
};

export default ExtendedArt;
