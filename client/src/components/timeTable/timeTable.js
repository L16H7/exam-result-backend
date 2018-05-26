import React, { Component } from "react";
import {Icon, Table} from 'semantic-ui-react';

import { getTimeTable } from '../../actions/timeTable';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

class TimeTable extends Component {
  componentDidMount() {
    this.props.getTimeTable(1);
  } 

  render() {
    return (
      <Table celled structured>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell rowSpan='2'>Day/Time</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Period-1<br/>8:30-9:30 am</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Period-2<br/>9:35-10:35 am</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Period-3<br/>10:40-11:40 am</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Lunch Break (11:40 - 12:40 pm)</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Period-4<br/>8:30-9:30 am</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Period-5<br/>9:35-10:35 am</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Period-6<br/>10:40-11:40 am</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        <Table.Row>
          <Table.Cell>Monday</Table.Cell>
          <Table.Cell>M1</Table.Cell>
          <Table.Cell>M2</Table.Cell>
          <Table.Cell>M3</Table.Cell>
          <Table.Cell rowSpan='5'></Table.Cell>
          <Table.Cell>M4</Table.Cell>
          <Table.Cell>M5</Table.Cell>
          <Table.Cell>M6</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Monday</Table.Cell>
          <Table.Cell>M1</Table.Cell>
          <Table.Cell>M2</Table.Cell>
          <Table.Cell>M3</Table.Cell>
          <Table.Cell>M4</Table.Cell>
          <Table.Cell>M5</Table.Cell>
          <Table.Cell>M6</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Monday</Table.Cell>
          <Table.Cell>M1</Table.Cell>
          <Table.Cell>M2</Table.Cell>
          <Table.Cell>M3</Table.Cell>
          <Table.Cell>M4</Table.Cell>
          <Table.Cell>M5</Table.Cell>
          <Table.Cell>M6</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Monday</Table.Cell>
          <Table.Cell>M1</Table.Cell>
          <Table.Cell>M2</Table.Cell>
          <Table.Cell>M3</Table.Cell>
          <Table.Cell>M4</Table.Cell>
          <Table.Cell>M5</Table.Cell>
          <Table.Cell>M6</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Monday</Table.Cell>
          <Table.Cell>M1</Table.Cell>
          <Table.Cell>M2</Table.Cell>
          <Table.Cell>M3</Table.Cell>
          <Table.Cell>M4</Table.Cell>
          <Table.Cell>M5</Table.Cell>
          <Table.Cell>M6</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTimeTable }, dispatch);
}

export default connect(null, mapDispatchToProps)(TimeTable);