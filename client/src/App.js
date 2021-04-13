import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Mvp from "./components/Mvp";
import Header from'./components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <div className="container-fluid border">
        <Header />
        <div className="row">
          <div className="col-8">
            <Mvp thisSet = "stx" />
          </div>
          <div className="col">
            <SideBar />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
