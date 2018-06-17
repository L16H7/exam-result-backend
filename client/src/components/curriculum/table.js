import React, { Component } from 'react';
import { Container, Button, Select, Table } from 'semantic-ui-react';
import AcademicYearSelect from '../utils/academicYearSelect';

import Moment from 'moment';

import { getLatestCurriculum } from '../../actions/curriculum';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';

class CurriculumTable extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getLatestCurriculum(1);
  }

  onSchoolYearChange = (e, data) => {
    this.props.getLatestCurriculum(data.value);
  }

  renderCurriculums(curriculums) {
    let tableCells = curriculums.map((data, index) =>
      <Table.Row key={data.id}>
        <Table.Cell>
          {Moment(data.curriculumDate).format('D MMM YY')}
        </Table.Cell>
        <Table.Cell>
          {data.period}
        </Table.Cell>
        <Table.Cell>
          {data.subject}
        </Table.Cell>
        <Table.Cell>
          {data.description}
        </Table.Cell>
        <Table.Cell>
          <Link to={`/curriculum/edit/${data.id}`}><Button>Edit</Button></Link>
          <Button>Delete</Button>
        </Table.Cell>
      </Table.Row>
    );

    return tableCells;
  }

  render() {
    if (!this.props.curriculum.length) {
      return (
        <div></div>
      );
    }

    return (
      <Container>
        <AcademicYearSelect onSchoolYearChange={this.onSchoolYearChange} />
        <Table celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Period</Table.HeaderCell>
              <Table.HeaderCell>Subject</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.renderCurriculums(this.props.curriculum)}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getLatestCurriculum }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumTable);