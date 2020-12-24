import React from "react";

import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
import ItemDetails, {Record} from '../item-details/item-details';


const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage,
} = swapiService;

const PersonDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
      >

      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />

    </ItemDetails>
  )
};
const PlanetDetails = () => {
  return (
    <ItemDetails 
      itemId={9}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
      >

      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diametr" label="Diametr" />
      
    </ItemDetails>
  )
};
const StarshipDetails = () => {
  return (
    <ItemDetails 
      itemId={9}
      getData={getStarship}
      getImageUrl={getStarshipImage}
      >

      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
      
    </ItemDetails>
  )
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};