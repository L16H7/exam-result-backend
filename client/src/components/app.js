import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPageScreen from '../screens/LandingPageScreen';
import TimeTableScreen from '../screens/TimeTableScreen';
import SideBar from '../components/sidebar/sideBar';

export default class App extends Component {
  render() {
    return (
      <SideBar>
        <Switch>
          <Route exact={true} path='/' component={LandingPageScreen} />
          <Route path='/timeTable' component={TimeTableScreen} />
        </Switch>
      </SideBar>
    );
  }
}
