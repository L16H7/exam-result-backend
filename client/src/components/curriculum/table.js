import React, { Component } from 'react';
import { Container, Button, Select, Table } from 'semantic-ui-react';

import Moment from 'moment';

import { getLatestCurriculum } from '../../actions/curriculum';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CurriculumTable extends Component {
  componentDidMount() {
    this.props.getLatestCurriculum();
  }

  componentWillReceiveProps(props) {
    console.log(props);
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
          <Button>Edit</Button>
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