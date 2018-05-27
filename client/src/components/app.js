import React, { Component } from 'react';

import TimeTable from './timeTable/timeTable';
import TableExampleStructured from './timeTable/testSemantic';

export default class App extends Component {
  render() {
    return (
      <div>
        <TimeTable />
      </div>
    );
  }
}
