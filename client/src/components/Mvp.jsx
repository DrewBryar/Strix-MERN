import React, { useEffect, useState } from "react";

import ColorBombs from "./ColorBombs";
import ModalBombs from "./ModalBombs";
import ExtendedArt from "./ExtendedArt";
import ModalExtendedArt from "./ModalExtendedArt";
import MysticalArchive from './MysticalArchive';

const Mvp = (props) => {
  const magicSet = props.thisSet;
  const apiSet = "http://api.scryfall.com/sets/" + magicSet;

  const listCards = [];

  const changeTotalPrice = props.changePriceFunction;

  return (
    <div>
      <ColorBombs
        color="w"
        title="White"
        changePriceFunction={changeTotalPrice}
        setAbrv ="stx"
      />
      <ColorBombs
        color="u"
        title="Blue"
        changePriceFunction={changeTotalPrice}
        setAbrv ="stx"
      />
      <ColorBombs
        color="b"
        title="Black"
        changePriceFunction={changeTotalPrice}
        setAbrv ="stx"
      />
      <ColorBombs
        color="r"
        title="Red"
        changePriceFunction={changeTotalPrice}
        setAbrv ="stx"
      />
      <ColorBombs
        color="g"
        title="Green"
        changePriceFunction={changeTotalPrice}
        setAbrv ="stx"
      />
      <ColorBombs
        color="c"
        title="Colorless"
        changePriceFunction={changeTotalPrice}
        setAbrv ="stx"
      />
      <ColorBombs
        color="rw"
        title="Lorehold"
        changePriceFunction={changeTotalPrice}
        setAbrv ="stx"
      />
      <ColorBombs
        color="ru"
        title="Prismari"
        changePriceFunction={changeTotalPrice}
        setAbrv ="stx"
      />
      <ColorBombs
        color="ug"
        title="Quandrix"
        changePriceFunction={changeTotalPrice}
        setAbrv ="stx"
      />
      <ColorBombs
        color="wb"
        title="Silverquill"
        changePriceFunction={changeTotalPrice}
        setAbrv ="stx"
      />
      <ColorBombs
        color="gb"
        title="Witherbloom"
        changePriceFunction={changeTotalPrice}
        setAbrv ="stx"
      />
      <ModalBombs title="Modal Cards" changePriceFunction={changeTotalPrice} />
      <ExtendedArt
        title="Extended Art"
        changePriceFunction={changeTotalPrice}
        setAbrv ="stx"
      />
      <ModalExtendedArt
        title="Modal Extended Art"
        changePriceFunction={changeTotalPrice}
        setAbrv ="stx"
      />
      <MysticalArchive 
        title="Mystical Archive"
        changePriceFunction={changeTotalPrice}
        setAbrv ="sta"
      />
      

    </div>
  );
};

export default Mvp;
