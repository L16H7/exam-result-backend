import React, { Component } from 'react';

import { Button, Container, Grid } from 'semantic-ui-react';
import CurriculumCard from './card';
import AcademicYearSelect from '../utils/academicYearSelect';

import { getLatestCurriculum } from '../../actions/curriculum';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';


class CurriculumList extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      limit: 9
    };

  }

  componentDidMount() {
    this.props.getLatestCurriculum(1);
  }

  onLoadMore = () => {
    this.setState({ limit: this.state.limit + 9 });
  }

  onSchoolYearChange = (e, data) => {
    this.props.getLatestCurriculum(data.value);
  }

  renderCards(curriculums) {
    let groups = [];

    curriculums = curriculums.slice(0, this.state.limit);
    if (curriculums.length) {
      curriculums.forEach((item, index) => {
        if (index % 3 === 0 && (index + 2) < curriculums.length) {
          groups.push([curriculums[index], curriculums[index + 1], curriculums[index + 2]]);
        }
        if (index % 3 === 0 && (index + 2) > curriculums.length) {
          let lastRemaining = [];
          while (index < curriculums.length) {
            lastRemaining.push(curriculums[index++]);
          }
          groups.push(lastRemaining);
        }
      });


      let cards = groups.map((cardData, index) =>
        <Grid.Row columns={3} key={cardData[0].id}>
          {cardData.map(card => 
            <Grid.Column key={card.id}>
              <CurriculumCard 
                curriculumDate={card.curriculumDate}
                period={card.period}
                subject={card.subject}
                description={card.description}
              />
            </Grid.Column>
          )}
        </Grid.Row>
      );
      return cards;
    }
  }

  render() {
    if (!this.props.curriculum.length) {
      return (
        <div></div>
      );
    }

    return (
      <Container className="scrollable">
        <AcademicYearSelect onSchoolYearChange={this.onSchoolYearChange} />
        <Button>
          <Link to='/curriculum/manage'>Edit</Link>
        </Button>
        <Grid>
          {this.renderCards(this.props.curriculum)}
        </Grid>
        <Button className={'load-more'} onClick={this.onLoadMore}>Load More</Button>
      </Container>
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