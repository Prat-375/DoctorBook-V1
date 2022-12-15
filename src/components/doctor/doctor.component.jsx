import React from 'react';
import { Button2 } from '../button/Button2';
import { Button3 } from '../button/Button3';

import './doctor.component.scss';

export const DoctorName = props => (
  <div className='doc-container'>
    <img
      alt='doctor'
      src={props.doctor.imageUrl} />
    <div className="content">
      <h2> {props.doctor.name} </h2>
      <div className="doctor-btns">
        <Button2 className="btns" buttonStyle="btn--outline" buttonSize="btn--small">
          BOOK NOW <i className="far fa-phone" />
        </Button2>
        <Button3 className="btns" buttonStyle="btn--primary" buttonSize="btn--small">
          CALL NOW <i className="far fa-phone" />
        </Button3>
      </div>
    </div>
  </div>
);