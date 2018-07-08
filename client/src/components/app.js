import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CurriculumAddScreen from '../screens/CurriculumAddScreen';
import CurriculumScreen from '../screens/CurriculumScreen';
import CurriculumEditScreen from '../screens/CurriculumEditScreen';
import CurriculumManagerScreen from '../screens/CurriculumManagerScreen';
import LandingPageScreen from '../screens/LandingPageScreen';
import TimeTableScreen from '../screens/TimeTableScreen';

import AssignmentAddScreen from '../screens/AssignmentAddScreen';
import AssignmentScreen from '../screens/AssignmentScreen';
import AssignmentEditScreen from '../screens/AssignmentEditScreen';
import AssignmentManagerScreen from '../screens/AssignmentManagerScreen';

import FinalResultScreen from '../screens/FinalResultScreen';
// import SideBar from '../components/sidebar/sideBar';
import AppBar from '../components/appbar/appBar';

export default class App extends Component {
  render() {
    return (
      <div>
      <AppBar/>
      <br/>
        <Switch>
          <Route exact={true} path='/' component={LandingPageScreen} />
          <Route path='/timeTable' component={TimeTableScreen} />
          <Route exact path='/curriculum' component={CurriculumScreen} />
          <Route exact path='/curriculum/manage' component={CurriculumManagerScreen} />
          <Route path ='/curriculum/edit/:id' component={CurriculumEditScreen} />
          <Route path ='/curriculum/add' component={CurriculumAddScreen} />
          <Route exact path='/assignment' component={AssignmentScreen} />
          <Route exact path='/assignment/manage' component={AssignmentManagerScreen} />
          <Route path ='/assignment/edit/:id' component={AssignmentEditScreen} />
          <Route path ='/assignment/add' component={AssignmentAddScreen} />
          <Route exact path='/finalResult' component={FinalResultScreen} />
        </Switch>
      
      </div>

    );
  }
}
