import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import CurriculumAdd from '../components/curriculum/add';


class CurriculumEditScreen extends Component {
  render() {
    return (
      <Container>
        <CurriculumAdd />
      </Container>
    );
  };
}

export default CurriculumEditScreen;