import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import AssignmentTable from '../components/assignment/table'


class AssignmentManagerScreen extends Component {
  render() {
    return (
      <Container>
        <AssignmentTable />
      </Container>
    );
  };
}

export default AssignmentManagerScreen;