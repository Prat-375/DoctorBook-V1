import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      gender: '',
      dob: '',
      lid: '',
      practice_loc: '',
      description: '',
      work_time: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword, phoneNumber, gender, dob, lid, practice_loc, description, work_time } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName, phoneNumber, gender, dob, lid, practice_loc, description, work_time });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        gender: '',
        dob: '',
        lid: '',
        practice_loc: '',
        description: '',
        woerk_time: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword, phoneNumber, gender, dob, lid, practice_loc, description, work_time } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <FormInput
            type='tel'
            name='phoneNumber'
            value={phoneNumber}
            onChange={this.handleChange}
            label='Phone Number'
            required
          />
          <FormInput
            type='text'
            name='gender'
            value={gender}
            onChange={this.handleChange}
            label='Gender'
            required
          />
          <FormInput
            type='date'
            name='dob'
            value={dob}
            onChange={this.handleChange}
            label=''
            required pattern= "\d{4}-\d{2}-\d{2}"
          />
          <FormInput
            type='text'
            name='license_id'
            value={lid}
            onChange={this.handleChange}
            label='License_Id'
            required
          />
          <FormInput
            type='text'
            name='practice_loc'
            value={practice_loc}
            onChange={this.handleChange}
            label='Practice Location'
            required
          />
          <FormInput
            type='text'
            name='description'
            value={description}
            onChange={this.handleChange}
            label='Description'
            required
          />
          <FormInput
            type='time'
            name='time'
            value={work_time}
            onChange={this.handleChange}
            label=""
            required pattern="[0-9]{2}:[0-9]{2}"
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;