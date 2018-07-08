import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import AssignmentEdit from '../components/assignment/edit';


class AssignmentEditScreen extends Component {
  render() {
    return (
      <Container>
        <AssignmentEdit id={this.props.match.params.id} />
      </Container>
    );
  };
}

export default AssignmentEditScreen;