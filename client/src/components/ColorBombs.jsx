import React, { useEffect, useState } from "react";
import axios from "axios";
import CardCounter from "./CardCounter";
import { Collapse } from "react-bootstrap";

const ColorBombs = (props) => {
  // API Abbreviation
  const apiColorBombs =
    "https://api.scryfall.com/cards/search?q=color%3D" +
    props.color +
    "+set%3A"+props.setAbrv+"+not%3Adouble-faced+%28rarity%3Au+OR+rarity%3Ar+OR+rarity%3Am%29";

  // Setting State
  const [cards, setCards] = useState([]);
  const [open, setOpen] = useState(false);

  // API call
  useEffect(() => {
    axios.get(apiColorBombs).then((res) => {
      setCards(res.data.data);
    });
  }, []);

  // Functions
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
          <h1
            className="jumbotron text-center"
            onClick={() => setOpen(!open)}
            aria-controls="cardSection"
            aria-expanded={open}
          >
            {props.title}
          </h1>
        </div>
      </div>
      <Collapse in={open}>
        <div id="cardSection" className="row">
          {listCards}
        </div>
      </Collapse>
    </div>
  );
};

export default ColorBombs;
