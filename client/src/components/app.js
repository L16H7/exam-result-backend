import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPageScreen from '../screens/LandingPageScreen';
import TimeTableScreen from '../screens/TimeTableScreen';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={LandingPageScreen} />
        <Route path='/timeTable' component={TimeTableScreen} />
      </Switch>
    );
  }
}
