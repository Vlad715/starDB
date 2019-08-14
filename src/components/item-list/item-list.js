import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner.js';
import { parseExpression } from '@babel/parser';
import App from '../app/app.js';

export default class ItemList extends Component {

  swapiService = new SwapiService;

  state = {
    itemList: null
  };

  componentDidMount() {

    // console.log(this.props.getData());
    console.log()
    // this.swapiService.getAllPeople()
    //   .then((peopleList) => {
    //     this.setState({
    //       peopleList
    //     });
    //   });
    setTimeout(() => {
      this.props.getData()
    }, 2000)
  }


  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item"
          key={id}
          onClick={() => this.props.onPersonSelected(id)}>
          {name}
        </li>
      )      
    })
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return < Spinner />;
    }

    const items = this.renderItems(peopleList);
  
    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
