import NavBar from './components/navBar/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (

      <div>
        

        <NavBar />

        <ItemListContainer greeting="Bienvenidos" />

      </div>


    );
  }
}

export default App;
