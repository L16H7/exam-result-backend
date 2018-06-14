import React, { Component } from 'react';

import CurriculumCard from './card';

class CurriculumList extends Component {
  render() {
    return (
      <CurriculumCard curriculumDate={'2018-06-23'} period={'Period 1'} subject={'Chemistry'} description={'Test Description'} />
    );
  }
}

export default CurriculumList;