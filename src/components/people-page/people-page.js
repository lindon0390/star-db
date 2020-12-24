import React, { Component } from "react";
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

import './people-page.css';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';



export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,  
  }

  

  onPersonSelected = (id) => {
    console.log('nazhal person', id);
    this.setState( {
      selectedPerson: id
    });
  };

  render(){

    if(this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}>
        {(i)=> (
          `${i.name} (${i.birthYear})`
        )}
      </ItemList>                  

    )

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson}
                           setLoading={(isLoading) => this.setState({isLoading})}
                           isLoading={this.state.isLoading} />
      </ErrorBoundry>
      
    )

    return (      
        <Row left={itemList} right={personDetails}/>        
    );
  }
}