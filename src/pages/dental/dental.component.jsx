import React from 'react';

import DENTAL_DATA from './dental.data.js';
import { DoctorList } from '../../components/doctor-list/doctor-list.component';
import { DoctorSearch } from '../../components/doctor-search/doctor-search.component';

import './dental.component.scss';

class DentalPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: DENTAL_DATA,
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
      <div className='dental-page'>
        <h1>Dental Doctors</h1>
        <DoctorSearch onSearchChange={this.onSearchChange} />
        <DoctorList doctors={filteredDoctors} />
      </div>
    );
  }
}

export default DentalPage;