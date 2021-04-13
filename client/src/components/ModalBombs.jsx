import React, { useEffect, useState } from "react";
import axios from "axios";
import ModalCardCounter from "./ModalCardCounter";

const ModalBombs = (props) => {
  const apiModalBombs =
    "http://api.scryfall.com/cards/search?q=is%3Adouble-faced+set%3Astx&unique=cards&as=grid&order=name";
  const [cards, setCards] = useState([]);

  // API call
  useEffect(() => {
    axios.get(apiModalBombs).then((res) => {
      setCards(res.data.data);
    });
  }, []);

  const listCards = cards.map((card) => (
    <div className="col-3">
      <ModalCardCounter cardData={card} cardName={card.name} />
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

export default ModalBombs;
