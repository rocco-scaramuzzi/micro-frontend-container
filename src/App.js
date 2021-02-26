import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppHeader from './AppHeader';
import MicroFrontend from './MicroFrontend';
import About from './About';

const {
  REACT_APP_SEARCH_HOST: searchHost,
  REACT_APP_CONTACT_HOST: contactHost,
} = process.env;

let numContacts = 0;
fetch(`${process.env.REACT_APP_CONTENT_HOST}/contacts.json`)
  .then(res => res.json())
  .then(contacts => {
    numContacts = contacts.length;
  });

const Search = ({ history }) => (
  <MicroFrontend history={history} host={searchHost} name="Search" />
);
const Contact = ({ history }) => (
  <MicroFrontend history={history} host={contactHost} name="Contact" />
);
const FirstContact = () => <Redirect to={`/contact/1`} />;

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/contact/:id" component={Contact} />
        <Route exact path="/first-contact" render={FirstContact} />
        <Route exact path="/new-contact" render={Contact} />
        <Route exact path="/about" render={About} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
