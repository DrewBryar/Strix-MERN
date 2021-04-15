import React, { useEffect, useState } from "react";

import ColorBombs from "./ColorBombs";
import ModalBombs from "./ModalBombs";
import ExtendedArt from "./ExtendedArt";
import ModalExtendedArt from "./ModalExtendedArt";
import MysticalArchive from "./MysticalArchive";

const Mvp = (props) => {
  const magicSet = props.thisSet;
  const changeTotalPrice = props.changePriceFunction;
  const nameOfSet = props.thisSet;
  return (
    <div>
      <ColorBombs
        color="rw"
        title="Lorehold"
        changePriceFunction={changeTotalPrice}
        setAbrv={nameOfSet}
      />
      <ColorBombs
        color="ru"
        title="Prismari"
        changePriceFunction={changeTotalPrice}
        setAbrv={nameOfSet}
      />
      <ColorBombs
        color="ug"
        title="Quandrix"
        changePriceFunction={changeTotalPrice}
        setAbrv={nameOfSet}
      />
      <ColorBombs
        color="wb"
        title="Silverquill"
        changePriceFunction={changeTotalPrice}
        setAbrv={nameOfSet}
      />
      <ColorBombs
        color="gb"
        title="Witherbloom"
        changePriceFunction={changeTotalPrice}
        setAbrv={nameOfSet}
      />
      <ColorBombs
        color="w"
        title="White"
        changePriceFunction={changeTotalPrice}
        setAbrv={nameOfSet}
      />
      <ColorBombs
        color="u"
        title="Blue"
        changePriceFunction={changeTotalPrice}
        setAbrv={nameOfSet}
      />
      <ColorBombs
        color="b"
        title="Black"
        changePriceFunction={changeTotalPrice}
        setAbrv={nameOfSet}
      />
      <ColorBombs
        color="r"
        title="Red"
        changePriceFunction={changeTotalPrice}
        setAbrv={nameOfSet}
      />
      <ColorBombs
        color="g"
        title="Green"
        changePriceFunction={changeTotalPrice}
        setAbrv={nameOfSet}
      />
      <ColorBombs
        color="c"
        title="Colorless"
        changePriceFunction={changeTotalPrice}
        setAbrv={nameOfSet}
      />
      <ModalBombs title="Modal Cards" changePriceFunction={changeTotalPrice} />
      <ExtendedArt
        title="Extended Art"
        changePriceFunction={changeTotalPrice}
        setAbrv={nameOfSet}
      />
      <ModalExtendedArt
        title="Modal Extended Art"
        changePriceFunction={changeTotalPrice}
        setAbrv={nameOfSet}
      />
      <MysticalArchive
        title="Mystical Archive"
        changePriceFunction={changeTotalPrice}
        setAbrv="sta"
      />
    </div>
  );
};

export default Mvp;
