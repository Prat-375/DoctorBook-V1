import React from 'react';

import './doctor-search.component.scss';

export const DoctorSearch = props => (
  <input
    className='doc-search'
    type='search'
    placeholder='Search By Name'
    onChange={props.onSearchChange}
  />
);