import React from 'react'
import { Switch, Route } from "react-router-dom";
import EnglishHome from './components/English/EnglishHome'
import CityDetails from './components/English/CityDetails';
import GlobalStyles from './GlobalStyles';
import CityHindiDetails from './components/Hindi/CityHindiDetails';
import HindiHome from './components/Hindi/HindiHome';
const App = () => {

  return (
    <>
    <GlobalStyles/>
      <Switch>
        <Route exact path='/'>
      <EnglishHome/>
      </Route>
      <Route exact path="/details/:id">
        <CityDetails/>
      </Route>
      <Route path="/hindi">
        <HindiHome/>
      </Route>
      <Route exact path="/details/hindi/:id">
        <CityHindiDetails/>
      </Route>
      </Switch>
    </>
  );
}

export default App;
