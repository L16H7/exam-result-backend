import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import CurriculumTable from '../components/curriculum/table'


class CurriculumManagerScreen extends Component {
  render() {
    return (
      <Container>
        <CurriculumTable />
      </Container>
    );
  };
}

export default CurriculumManagerScreen;