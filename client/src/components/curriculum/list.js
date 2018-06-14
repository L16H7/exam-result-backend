import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react';
import CurriculumCard from './card';

class CurriculumList extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            <CurriculumCard curriculumDate={'2018-06-23'} period={'Period 1'} subject={'Chemistry'} 
              description={'Test Test Test Test Test Test Test Test Test Test Description'} />
          </Grid.Column>
          <Grid.Column> 
            <CurriculumCard curriculumDate={'2018-06-23'} period={'Period 1'} subject={'Chemistry'} description={'Test Description'} />
          </Grid.Column>
          <Grid.Column>
            <CurriculumCard curriculumDate={'2018-06-23'} period={'Period 1'} subject={'Chemistry'} description={'Test Description'} />
          </Grid.Column>
        </Grid.Row>
        <CurriculumCard curriculumDate={'2018-06-23'} period={'Period 1'} subject={'Chemistry'} description={'Test Description'} />
        <CurriculumCard curriculumDate={'2018-06-23'} period={'Period 1'} subject={'Chemistry'} description={'Test Description'} />
      </Grid>
    );
  }
}

export default CurriculumList;