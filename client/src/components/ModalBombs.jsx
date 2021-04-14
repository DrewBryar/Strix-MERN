import React, { useEffect, useState } from "react";
import axios from "axios";
import ModalCardCounter from "./ModalCardCounter";
import { Collapse } from "react-bootstrap";

const ModalBombs = (props) => {
  const apiModalBombs =
    "http://api.scryfall.com/cards/search?q=is%3Adouble-faced+set%3Astx&unique=cards&as=grid&order=name";
  const [cards, setCards] = useState([]);
  const [open, setOpen] = useState(false);

  // API call
  useEffect(() => {
    axios.get(apiModalBombs).then((res) => {
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

export default ModalBombs;
