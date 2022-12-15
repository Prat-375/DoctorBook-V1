import React from 'react';

import CARDIO_DATA from './cardio.data.js';
import { DoctorList } from '../../components/doctor-list/doctor-list.component';
import { DoctorSearch } from '../../components/doctor-search/doctor-search.component';

import './cardio.component.scss';

class CardioPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: CARDIO_DATA,
      searchField: ''
    };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { collections, searchField } = this.state;
    const filteredDoctors = collections.filter(collection =>
      collection.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='cardio-page'>
        <h1>Cardio Doctors</h1>
        <DoctorSearch onSearchChange={this.onSearchChange} />
        <DoctorList doctors={filteredDoctors} />
      </div>
    );
  }
}

export default CardioPage;