import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CurriculumScreen from '../screens/CurriculumScreen';
import CurriculumEditScreen from '../screens/CurriculumEditScreen';
import CurriculumManagerScreen from '../screens/CurriculumManagerScreen';
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
          <Route exact path='/curriculum' component={CurriculumScreen} />
          <Route exact path='/curriculum/manage' component={CurriculumManagerScreen} />
          <Route path ='/curriculum/edit/:id' component={CurriculumEditScreen} />
        </Switch>
      </SideBar>
    );
  }
}
