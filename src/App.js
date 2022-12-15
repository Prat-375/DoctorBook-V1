import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import VideoCall from './IndVideo';
import Chat from './Chat';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CardioPage from './pages/cardiology/cardio.component';
import DocPage from './pages/doclog/doc-sign-in-and-sign-up.component';
import ContactUs from './components/contact-us/contact.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import BookingHomepage from './pages/book-appointment/booking-homepage.component';
import Dermatology from './pages/dermato/dermato.component';
import Dental from './pages/dental/dental.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/video' component={VideoCall} />
          <Route exact path='/chat' component={Chat} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/bookhome' component={BookingHomepage} />
          <Route exact path='/cardio' component={CardioPage} />
          <Route exact path='/dermato' component={Dermatology} />
          <Route exact path='/dental' component={Dental} />
          <Route exact path='/fordoctor' component={DocPage} />
          <Route exact path='/contactus' component={ContactUs} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;