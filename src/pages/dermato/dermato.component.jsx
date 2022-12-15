import React from 'react';

import DERMATO_DATA from './dermato.data.js';
import { DoctorList } from '../../components/doctor-list/doctor-list.component';
import { DoctorSearch } from '../../components/doctor-search/doctor-search.component';

import './dermato.component.scss';

class DermatoPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: DERMATO_DATA,
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
      <div className='dermato-page'>
        <h1>Dermatology Doctors</h1>
        <DoctorSearch onSearchChange={this.onSearchChange} />
        <DoctorList doctors={filteredDoctors} />
      </div>
    );
  }
}

export default DermatoPage;