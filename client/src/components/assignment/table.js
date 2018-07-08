import React, { Component } from 'react';
import { Container, Button, Select, Table } from 'semantic-ui-react';
import AcademicYearSelect from '../utils/academicYearSelect';

import Moment from 'moment';

import { getLatestAssignment } from '../../actions/assignment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';

class AssignmentTable extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getLatestAssignment(1);
  }

  onSchoolYearChange = (e, data) => {
    this.props.getLatestAssignment(data.value);
  }

  renderAssignments(assignments) {
    let tableCells = assignments.map((data, index) =>
      <Table.Row key={data.id}>
        <Table.Cell>
          {Moment(data.assignmentDate).format('D MMM YY')}
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
          <Link to={`/assignment/edit/${data.id}`}><Button>Edit</Button></Link>
          <Button>Delete</Button>
        </Table.Cell>
      </Table.Row>
    );

    return tableCells;
  }

  render() {
    if (!this.props.assignment.length) {
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
            {this.renderAssignments(this.props.assignment)}
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
  return bindActionCreators({ getLatestAssignment }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentTable);