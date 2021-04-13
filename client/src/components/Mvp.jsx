import React, { useEffect, useState } from "react";

import ColorBombs from "./ColorBombs";
import ModalBombs from "./ModalBombs"

const Mvp = (props) => {
  const magicSet = props.thisSet;
  const apiSet = "http://api.scryfall.com/sets/" + magicSet;

  const listCards = [];

  return (
    <div>
        <ColorBombs color = "w" title ="White" />
        <ColorBombs color = "u" title ="Blue" />
        <ColorBombs color = "b" title ="Black" />
        <ColorBombs color = "r" title ="Red" />
        <ColorBombs color = "g" title ="Green" />
        <ColorBombs color = "c" title ="Colorless" />
        <ColorBombs color = "rw" title ="Lorehold" />
        <ColorBombs color = "ru" title ="Prismari" />
        <ColorBombs color = "ug" title ="Quandrix" />
        <ColorBombs color = "wb" title ="Silverquill" />
        <ColorBombs color = "gb" title ="Witherbloom" />
        <ModalBombs title="Modal Cards"/>
    </div>
  );
};

export default Mvp;
