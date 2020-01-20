import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ItemModal from './components/ItemModal';
import FoodJournal from './components/FoodJournal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  /*componentDidMount() {
    store.dispatch(loadUser());
  }*/
  
  render() {
    return (
      <Provider store={store}>
        <div className="App" >
          <AppNavbar />
          <Container>
            <ItemModal />
            <FoodJournal />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
