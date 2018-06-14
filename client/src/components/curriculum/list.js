import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react';
import CurriculumCard from './card';

import { getLatestCurriculum } from '../../actions/curriculum';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class CurriculumList extends Component {
  componentDidMount() {
    this.props.getLatestCurriculum();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

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

const mapStateToProps = (state) => {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLatestCurriculum }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumList);