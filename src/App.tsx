import React, {useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import {OrgComponent} from "./components/OrgComponent";
import {Modal} from "./components/Modal";
import {ModalContext} from "./context/ModalContext";

function App() {

    const {modal, open, close} = useContext(ModalContext)

  return (
    <div className="App">
      <OrgComponent/>




    </div>
  );
}

export default App;
