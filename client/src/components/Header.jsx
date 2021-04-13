import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardCounter from './CardCounter';

const Header = (props) => {
    return(
        <div className = "row jumbotron justify-content-md-center">
            <img className= "col-1 img-fluid h-100" src="https://media.wizards.com/2021/images/daily/en_hhDh737DsS.png" />
            <div className = "col text-center display-1">Strixhaven Unboxing Game</div>
            
        </div>
    )
};

export default Header;