import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Doctor Appointment',
          imageUrl: 'https://png.pngtree.com/png-clipart/20210309/original/pngtree-red-clothing-male-new-crown-vaccination-illustration-png-image_5854144.jpg',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'Services',
          imageUrl: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-mobile-medical-service-concept-png-image_3696332.jpg',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'Contact Us',
          imageUrl: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-call-center-concept-support-cartoon-style-png-image_5249878.jpg',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'Order Medicine',
          imageUrl: 'https://png.pngtree.com/png-clipart/20210328/original/pngtree-pharmacy-medicine-drugs-object-png-image_6160120.jpg',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'Online Consultation',
          imageUrl: 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-online-medical-doctor-by-digital-means-on-a-pc-png-image_5344720.jpg',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;