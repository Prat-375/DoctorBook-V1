import React, { Component } from 'react';

import { DoctorList } from './components/doctor-list/doctor-list.component';
import { SearchBox } from './components/doctor-search/doctor-search.component';

import './list-card.component.scss';

class ListCard extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='ListCard'>
        <h1>Monsters Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <DoctorList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default ListCard;