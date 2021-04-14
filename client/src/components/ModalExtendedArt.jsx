import React, { useEffect, useState } from "react";
import axios from "axios";
import ModalCardCounter from "./ModalCardCounter";
import { Collapse } from "react-bootstrap";

const ExtendedArt = (props) => {
  const apiExtendedArt =
    "http://api.scryfall.com/cards/search?q=set%3Astx+frame%3Aextendedart+is%3Adouble-faced&unique=prints&as=grid&order=set";
  const [cards, setCards] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get(apiExtendedArt).then((res) => {
      setCards(res.data.data);
    });
  }, []);

  const changeTotalPrice = props.changePriceFunction;

  const listCards = cards.map((card) => (
    <div className="col-4">
      <ModalCardCounter
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

export default ExtendedArt;
