import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import TimeTable from '../components/timeTable/timeTable';

class TimeTableScreen extends Component {
  render() {
    return (
      <Container>
        <TimeTable />
      </Container>
    );
  };
}

export default TimeTableScreen;