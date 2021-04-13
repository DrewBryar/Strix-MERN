import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardCounter from './CardCounter';

const SideBar = (props) => {
    return(
        <div className="container-fluid position-fixed bg-light">
            <div className="row">
                <div className="col">Hi, I'm the Sidebar</div>
            </div>
        </div>
    )
};

export default SideBar;