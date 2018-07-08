import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import AssignmentList from '../components/assignment/list'


class AssignmentScreen extends Component {
  render() {
    return (
      <Container>
        <AssignmentList />
      </Container>
    );
  };
}

export default AssignmentScreen;