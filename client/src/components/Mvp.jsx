import React, { useEffect, useState } from "react";

import ColorBombs from "./ColorBombs";
import ModalBombs from "./ModalBombs";
import ExtendedArt from "./ExtendedArt";
import ModalExtendedArt from "./ModalExtendedArt";

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
      />
      <ColorBombs
        color="u"
        title="Blue"
        changePriceFunction={changeTotalPrice}
      />
      <ColorBombs
        color="b"
        title="Black"
        changePriceFunction={changeTotalPrice}
      />
      <ColorBombs
        color="r"
        title="Red"
        changePriceFunction={changeTotalPrice}
      />
      <ColorBombs
        color="g"
        title="Green"
        changePriceFunction={changeTotalPrice}
      />
      <ColorBombs
        color="c"
        title="Colorless"
        changePriceFunction={changeTotalPrice}
      />
      <ColorBombs
        color="rw"
        title="Lorehold"
        changePriceFunction={changeTotalPrice}
      />
      <ColorBombs
        color="ru"
        title="Prismari"
        changePriceFunction={changeTotalPrice}
      />
      <ColorBombs
        color="ug"
        title="Quandrix"
        changePriceFunction={changeTotalPrice}
      />
      <ColorBombs
        color="wb"
        title="Silverquill"
        changePriceFunction={changeTotalPrice}
      />
      <ColorBombs
        color="gb"
        title="Witherbloom"
        changePriceFunction={changeTotalPrice}
      />
      <ModalBombs title="Modal Cards" changePriceFunction={changeTotalPrice} />
      <ExtendedArt
        title="Extended Art"
        changePriceFunction={changeTotalPrice}
      />
      <ModalExtendedArt
        title="Modal Extended Art"
        changePriceFunction={changeTotalPrice}
      />
    </div>
  );
};

export default Mvp;
