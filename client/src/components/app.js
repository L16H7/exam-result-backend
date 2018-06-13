import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CurriculumScreen from '../screens/CurriculumScreen';
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
          <Route path='/curriculum' component={CurriculumScreen} />
        </Switch>
      </SideBar>
    );
  }
}
