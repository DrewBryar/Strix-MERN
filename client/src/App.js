import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Mvp from "./components/Mvp";
import Header from'./components/Header';
import SideBar from './components/SideBar';

function App() {
  const [totalPrice, setTotalPrice] = useState(0);

  const changeTotalPrice =(newPrice)=>{
    console.log("Price Changed!")
    console.log(newPrice)
    console.log(totalPrice)
    setTotalPrice((prevTotalPrice => prevTotalPrice + parseFloat(newPrice)))
  }

  return (
    <div className="App">
      <div className="container-fluid border">
        <Header />
        <div className="row">
          <div className="col-8">
            <Mvp thisSet = "stx" changePriceFunction={changeTotalPrice} />
          </div>
          <div className="col">
            <SideBar collectedTotalPrice={totalPrice} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
