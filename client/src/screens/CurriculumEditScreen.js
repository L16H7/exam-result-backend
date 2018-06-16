import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import CurriculumEdit from '../components/curriculum/edit';


class CurriculumEditScreen extends Component {
  render() {
    return (
      <Container>
        <CurriculumEdit id={this.props.match.params.id} />
      </Container>
    );
  };
}

export default CurriculumEditScreen;