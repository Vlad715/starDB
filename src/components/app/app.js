import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {
  
  swapiService = new SwapiService()
  
  state = {
    seletedPerson: 5
  };

  tempFunc() {
    console.log("Hereeeeeeeeeeeeeeeeeeeeee")
  } 

  onPersonSelected = (id) => {
    this.setState({
      seletedPerson: id
    });
  }

  render() {

    return (
      <div>
        <Header />
        <RandomPlanet />
  
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onPersonSelected={this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.seletedPerson}/>
          </div>


          <div className="row mb2">
            <div className="col-mb-6">
              <ItemList getData={() => this.tempFunc()}/>
            </div>
            <div className="col-mb-6">
              <PersonDetails personId={this.state.selectedPerson }/>
            </div>
          </div>
        </div>
      </div>
    );
  }  
}
