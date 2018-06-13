import React, { Component } from "react";
import { Container, Icon, Input, Label, Select, Table } from 'semantic-ui-react';

import { getTimeTable, updatePeriodSubject } from '../../actions';
import { schoolYears } from '../../constants/schoolYears';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import timeTable from '../../reducers/timeTable'

class TimeTableUpdate extends Component {
  constructor(props) {
    super(props);
    this.changeSchoolYear = this.changeSchoolYear.bind(this);
    this.changeSubject = this.changeSubject.bind(this);
    this.saveSubjectChange = this.saveSubjectChange.bind(this);

    this.state = {
      timeTableData: this.props.timeTable
    };
  }

  componentDidMount() {
    this.props.getTimeTable(1);
  } 

  changeSchoolYear(e, data) {
    this.props.getTimeTable(data.value);
  }

  changeSubject(index, period, subject) {
    let newTimeTable = this.state.timeTableData.map((item, i) => {
      if (i == index) {
        return { ...item, [period]: subject };
      }
      return item;
    });

    this.setState({ timeTableData: newTimeTable });
  }

  saveSubjectChange(id, period, subject) {
    this.props.updatePeriodSubject(id, period, subject);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ timeTableData: nextProps.timeTable });
  }

  renderPeriods(periods) {
    let tableCells = periods.map((day, index) => 
      <Table.Row key={day.id}>
        <Table.Cell key={day.id + 999}>
          <Label>{day.day}</Label>
        </Table.Cell>
        <Table.Cell key={day.id + 1000}> 
          <Input value={day.period1} onChange={(e) => this.changeSubject(index, 'period1', e.target.value)} 
            onBlur={(e) => this.saveSubjectChange(day.id, 'period1', e.target.value)} />
        </Table.Cell>
        <Table.Cell key={day.id + 2000}>
          <Input value={day.period2} onChange={(e) => this.changeSubject(index, 'period2', e.target.value)}
            onBlur={(e) => this.saveSubjectChange(day.id, 'period2', e.target.value)} />
        </Table.Cell>
        <Table.Cell key={day.id + 3000}>
          <Input value={day.period3} onChange={(e) => this.changeSubject(index, 'period3', e.target.value)}
            onBlur={(e) => this.saveSubjectChange(day.id, 'period3', e.target.value)} />
        </Table.Cell>
        <Table.Cell key={day.id + 4000}>
          <Input value={day.period4} onChange={(e) => this.changeSubject(index, 'period4', e.target.value)}
            onBlur={(e) => this.saveSubjectChange(day.id, 'period4', e.target.value)} />
        </Table.Cell>
        <Table.Cell key={day.id + 5000}>
          <Input value={day.period5} onChange={(e) => this.changeSubject(index, 'period5', e.target.value)}
            onBlur={(e) => this.saveSubjectChange(day.id, 'period5', e.target.value)} />
        </Table.Cell>
        <Table.Cell key={day.id + 6000}>
          <Input value={day.period6} onChange={(e) => this.changeSubject(index, 'period6', e.target.value)}
            onBlur={(e) => this.saveSubjectChange(day.id, 'period6', e.target.value)} />
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
  return bindActionCreators({ getTimeTable, updatePeriodSubject }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeTableUpdate);