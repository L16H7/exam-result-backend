import React, { Component } from "react";
import { Container, Icon, Input, Select, Table } from 'semantic-ui-react';

import { getTimeTable } from '../../actions';
import { schoolYears } from '../../constants/schoolYears';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import timeTable from '../../reducers/timeTable'

class TimeTableUpdate extends Component {
  constructor(props) {
    super(props);
    this.changeSchoolYear = this.changeSchoolYear.bind(this);
    this.changeSubject = this.changeSubject.bind(this);

    this.state = {
      periodSubject: '3',
      timeTableData: this.props.timeTable
    };
  }

  componentDidMount() {
    this.props.getTimeTable(1);
  } 

  changeSchoolYear(e, data) {
    this.props.getTimeTable(data.value);
  }

  changeSubject(e, data) {
    console.log('change subject');

    let newTimeTable = this.state.timeTableData.map((item, i) => {
      if (i == 4) {
        return { ...item, ["period1"]: "IT WORKS" };
      }
      return item;
    });

    this.setState({ timeTableData: newTimeTable });

  }

  componentWillReceiveProps(nextProps) {
    this.setState({ timeTableData: nextProps.timeTable });
  }

  renderPeriods(periods) {
    periods.map((row, index) => {
      console.log(row, index);
    });

    let tableCells = periods.map((day, index) => 
      <Table.Row>
        <Table.Cell> 
          <Input value={day.period1} onChange={this.changeSubject} />
        </Table.Cell>
        <Table.Cell>
          <Input value={day.period2} onChange={this.changeSubject} />
        </Table.Cell>
        <Table.Cell>
          <Input value={day.period3} onChange={this.changeSubject} />
        </Table.Cell>
        <Table.Cell>
          <Input value={day.period4} onChange={this.changeSubject} />
        </Table.Cell>
        <Table.Cell>
          <Input value={day.period5} onChange={this.changeSubject} />
        </Table.Cell>
        <Table.Cell>
          <Input value={day.period6} onChange={this.changeSubject} />
        </Table.Cell>
      </Table.Row>);
    return tableCells;
  }

  render() {
    if (!this.state.timeTableData.length) return (
      <Select placeholder='Select school year' options={schoolYears} onChange={this.changeSchoolYear} />
    );

    return (
      <Container>
        <Select placeholder='Select school year' options={schoolYears} onChange={this.changeSchoolYear} />
        <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan='2'>Day/Time</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Period-1<br/>8:30-9:30 am</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Period-2<br/>9:35-10:35 am</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Period-3<br/>10:40-11:40 am</Table.HeaderCell>
            <Table.HeaderCell rowSpan='5'></Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Period-4<br/>8:30-9:30 am</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Period-5<br/>9:35-10:35 am</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Period-6<br/>10:40-11:40 am</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>

          <Table.Row>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell  rowSpan='6' ><div className='vertical_text'>Lunch Break (11:40 - 12:40 pm)</div> </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          {this.renderPeriods(this.state.timeTableData)}
        </Table.Body>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTimeTable }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeTableUpdate);