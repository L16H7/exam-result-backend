import React, { Component } from 'react';

import { Button, Container, Grid, GridColumn } from 'semantic-ui-react';
import CurriculumCard from './card';
import AcademicYearSelect from '../utils/academicYearSelect';

import { getLatestAssignment } from '../../actions/assignment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';


class AssignmentList extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      limit: 9
    };

  }

  componentDidMount() {
    this.props.getLatestAssignment(1);
  }

  onLoadMore = () => {
    this.setState({ limit: this.state.limit + 9 });
  }

  onSchoolYearChange = (e, data) => {
    this.props.getLatestAssignment(data.value);
  }

  renderCards(assignments) {
    let groups = [];

    assignments = assignments.slice(0, this.state.limit);
    if (assignments.length) {
      assignments.forEach((item, index) => {
        if (index % 3 === 0 && (index + 2) < assignments.length) {
          groups.push([assignments[index], assignments[index + 1], assignments[index + 2]]);
        }
        if (index % 3 === 0 && (index + 2) > assignments.length) {
          let lastRemaining = [];
          while (index < assignments.length) {
            lastRemaining.push(assignments[index++]);
          }
          groups.push(lastRemaining);
        }
      });


      let cards = groups.map((cardData, index) =>
        <Grid.Row columns={3} key={cardData[0].id}>
          {cardData.map(card => 
            <Grid.Column key={card.id}>
              <CurriculumCard 
                assignmentDate={card.assignmentDate}
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
    if (!this.props.assignment.length) {
      return (
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column width={3}>
              <AcademicYearSelect onSchoolYearChange={this.onSchoolYearChange} />
            </Grid.Column>

            <Grid.Column width={1}>
              <Button  positive>
                  <Link className="white-text" to='/assignment/add'>Add</Link>
              </Button>
            </Grid.Column>

            <Grid.Column width={1}>
              <Button primary>
                  <Link className="white-text" to='/assignment/manage'>Edit</Link>
              </Button>
            </Grid.Column>



          </Grid.Row>


          <Grid.Row>
            
            
              <Button  className={'load-more'} style={{width:150}} onClick={this.onLoadMore} attached='bottom'>Load More</Button>
            
          </Grid.Row>
        </Grid>
      );
    }

    return (
      
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column width={3}>
              <AcademicYearSelect onSchoolYearChange={this.onSchoolYearChange} />
            </Grid.Column>

            <Grid.Column width={1}>
              <Button  positive>
                  <Link className="white-text" to='/assignment/add'>Add</Link>
              </Button>
            </Grid.Column>

            <Grid.Column width={1}>
              <Button primary>
                  <Link className="white-text" to='/assignment/manage'>Edit</Link>
              </Button>
            </Grid.Column>



          </Grid.Row>
          {this.renderCards(this.props.assignment)}

          <Grid.Row>
            
            
              <Button  className={'load-more'} style={{width:150}} onClick={this.onLoadMore} attached='bottom'>Load More</Button>
            
          </Grid.Row>
        </Grid>
       
     
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLatestAssignment }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentList);