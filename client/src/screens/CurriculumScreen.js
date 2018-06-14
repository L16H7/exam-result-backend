import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import CurriculumList from '../components/curriculum/list'


class CurriculumScreen extends Component {
  render() {
    return (
      <Container>
        <CurriculumList />
      </Container>
    );
  };
}

export default CurriculumScreen;