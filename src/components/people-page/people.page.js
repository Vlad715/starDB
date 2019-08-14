import React, { Component } from 'react';

import './people-page';

export default class PeoplePage exports Component {

    state = {
        seletedPerson: 3
    };


    onPersonSelected = (id) => {
        this.setState({
          seletedPerson: id
        });
    }

    render() {
        return <p> People Page</p>;
    }
    
}