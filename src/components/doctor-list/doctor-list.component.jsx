import React from 'react';

import { DoctorName } from '../doctor/doctor.component';

import './doctor-list.component.scss';

export const DoctorList = props => (
  <div className='doc-list'>
    {props.doctors.map(doctor => (
      <DoctorName key={doctor.id} doctor={doctor} />
    ))}
  </div>
);