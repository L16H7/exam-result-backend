import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import FinalResult from '../components/result/finalResult';

class TimeTableScreen extends Component {
  render() {
    return (
      <Container>
        <FinalResult />
      </Container>
    );
  };
}

export default TimeTableScreen;