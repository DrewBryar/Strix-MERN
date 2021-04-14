import React, { useEffect, useState } from "react";
import axios from "axios";
import CardCounter from "./CardCounter";
import {Collapse} from 'react-bootstrap';

const MysicalArchive = (props) => {
  const apiMysicalArchive ="https://api.scryfall.com/cards/search?as=grid&order=name&q=set%3Asta+lang%3Aen";
  
  const [cards, setCards] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get(apiMysicalArchive).then((res) => {
      setCards(res.data.data);
    });
  }, []);
  
  const changeTotalPrice = props.changePriceFunction

  const listCards = cards.map((card) => (
    <div className="col-4">
        <CardCounter cardData={card} cardName={card.name} changePriceFunction={changeTotalPrice} />
    </div>
  ));
  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="jumbotron text-center" 
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

export default MysicalArchive;
