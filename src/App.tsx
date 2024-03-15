import React from 'react';
import './App.css';
import {OrgComponent} from "./components/Organization/OrgComponent";
import {LayerComponent} from "./components/Layer/LayerComponent";
import {FactorComponent} from "./components/Factor/FactorComponent";



function App() {


  return (
    <div className="App">
      <OrgComponent/>
        <LayerComponent/>
        <FactorComponent/>




    </div>
  );
}

export default App;
