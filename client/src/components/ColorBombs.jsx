import React, { useEffect, useState } from "react";
import axios from "axios";
import CardCounter from "./CardCounter";

const ColorBombs = (props) => {
  const apiColorBombs =
    "https://api.scryfall.com/cards/search?q=color%3D" +
    props.color +
    "+set%3Astx+not%3Adouble-faced+%28rarity%3Au+OR+rarity%3Ar+OR+rarity%3Am%29";
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get(apiColorBombs).then((res) => {
      setCards(res.data.data);
    });
  }, []);

  const listCards = cards.map((card) => (
    <div className="col-3">
        <CardCounter cardData={card} cardName={card.name} />
    </div>
  ));
  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="jumbotron text-center">{props.title}</h1>
        </div>
      </div>
      <div className="row">
        {listCards}
      </div>
    </div>
  );
};

export default ColorBombs;
