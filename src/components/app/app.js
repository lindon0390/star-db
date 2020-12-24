import React, { Component } from 'react';

import Header from '../header';
import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import ItemDetails, { Record } from '../item-details/item-details';
import Row from '../row';
import ItemList from '../item-list';
import { 
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList 
} from '../sw-components';

export default class App extends Component {
  
  swapiService = new SwapiService();

  state = {
    isLoading: false,
    hasError: false
  };
  
  

  componentDidCatch() {
    console.log('componentDidCatch');
    this.setState({hasError: true});
  }

  render (){

    if(this.state.hasError){
      return <ErrorIndicator />
    }

    const {getPerson, getAllPeople, getStarship,getPersonImage,getStarshipImage, getPlanetImage} = this.swapiService;

  


    return (
      <ErrorBoundry>
        <div className='stardb-app'>
          <Header />
            <PersonDetails 
              itemId={11}
            />
            <PlanetDetails
              itemId={5}
            />
            <StarshipDetails
              itemId={3}
            />
            
            <PersonList>
              {({ name }) => <span>{name}</span>}
            </PersonList>
            <StarshipList>
              {({ name }) => <span>{name}</span>}
            </StarshipList>
            <PlanetList>
              {({ name }) => <span>{name}</span>}
            </PlanetList>
            

        </div>
        
      </ErrorBoundry>
      
    );
  };


}