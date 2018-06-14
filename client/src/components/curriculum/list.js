import React, { Component } from 'react';

import { Button, Container, Grid } from 'semantic-ui-react';
import CurriculumCard from './card';

import { getLatestCurriculum } from '../../actions/curriculum';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class CurriculumList extends Component {
  constructor(props) {
    super(props);

    this.onLoadMore = this.onLoadMore.bind(this);

    this.state = { 
      limit: 9
    };

  }

  componentDidMount() {
    this.props.getLatestCurriculum();
  }

  onLoadMore() {
    this.setState({ limit: this.state.limit + 9 });
  }

  renderCards(curriculums) {
    let groups = [];

    curriculums = curriculums.slice(0, this.state.limit);
    if (curriculums.length) {
      curriculums.forEach((item, index) => {
        if (index % 3 === 0) {
          groups.push([curriculums[index], curriculums[index + 1], curriculums[index + 2]]);
        }
      });

      let cards = groups.map((cardData) =>
        <Grid.Row columns={3} key={cardData[0].id}>
          <Grid.Column>
            <CurriculumCard 
              curriculumDate={cardData[0].curriculumDate}
              period={cardData[0].period}
              subject={cardData[0].subject}
              description={cardData[0].description}
            />
          </Grid.Column>
          <Grid.Column>
            <CurriculumCard 
              curriculumDate={cardData[1].curriculumDate}
              period={cardData[1].period}
              subject={cardData[1].subject}
              description={cardData[1].description}
            />
          </Grid.Column>
          <Grid.Column>
            <CurriculumCard 
              curriculumDate={cardData[2].curriculumDate}
              period={cardData[2].period}
              subject={cardData[2].subject}
              description={cardData[2].description}
            />
          </Grid.Column>
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
      <Container>
        <Grid>
          {this.renderCards(this.props.curriculum)}
        </Grid>
        <Button onClick={this.onLoadMore}>Load More</Button>
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