import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import AssignmentAdd from '../components/assignment/add';


class AssignmentAddScreen extends Component {
  render() {
    return (
      <Container>
        <AssignmentAdd />
      </Container>
    );
  };
}

export default AssignmentAddScreen;