import React, { Component } from "react";
import { Container, Icon, Input, Label, Radio, Select, Table } from 'semantic-ui-react';

import { getTimeTable, updatePeriodSubject } from '../../actions';
import { schoolYears } from '../../constants/schoolYears';
import { dayId } from '../../constants/dayId';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import timeTable from '../../reducers/timeTable'

class TimeTableUpdate extends Component {
  constructor(props) {
    super(props);
    this.changeSchoolYear = this.changeSchoolYear.bind(this);
    this.changeSubject = this.changeSubject.bind(this);
    this.saveSubjectChange = this.saveSubjectChange.bind(this);
    this.toggleEditableTable = this.toggleEditableTable.bind(this);

    this.state = {
      timeTableData: this.props.timeTable,
      isInputEnable: false
    };
  }

  componentDidMount() {
    this.props.getTimeTable(1);
  } 

  toggleEditableTable() {
    this.setState({ isInputEnable: !this.state.isInputEnable });
  }

  changeSchoolYear(e, data) {
    this.props.getTimeTable(data.value);
  }

  convertDayIdToDayName(id) {
    let day = dayId.find(function (e) { return e.key === id; });
    return day.name;
  }


  changeSubject(index, period, subject) {
    if (!subject) {
      alert('Subject cannot be empty!');
    }
    let newTimeTable = this.state.timeTableData.map((item, i) => {
      if (i == index) {
        return { ...item, [period]: subject };
      }
      return item;
    });

    this.setState({ timeTableData: newTimeTable });
  }

  saveSubjectChange(id, period, subject) {
    if (subject) this.props.updatePeriodSubject(id, period, subject);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ timeTableData: nextProps.timeTable });
  }

  renderPeriods(periods) {
    let tableCells = periods.map((dayData, index) => 
      <Table.Row key={dayData.id}>
        <Table.Cell key={dayData.id + 999}>
          <Label className='color-inherit' size={'large'}>{this.convertDayIdToDayName(dayData.day)}</Label>
        </Table.Cell>
        <Table.Cell key={dayData.id + 1000}> 
          <Input value={dayData.period1} onChange={(e) => this.changeSubject(index, 'period1', e.target.value)} 
            onBlur={(e) => this.saveSubjectChange(dayData.id, 'period1', e.target.value)} 
            disabled={!this.state.isInputEnable}
            className={!this.state.isInputEnable ? 'custom-input' : '' } />
        </Table.Cell>
        <Table.Cell key={dayData.id + 2000}>
          <Input value={dayData.period2} onChange={(e) => this.changeSubject(index, 'period2', e.target.value)}
            onBlur={(e) => this.saveSubjectChange(dayData.id, 'period2', e.target.value)}
            disabled={!this.state.isInputEnable}
            className={!this.state.isInputEnable ? 'custom-input' : '' } />
        </Table.Cell>
        <Table.Cell key={dayData.id + 3000}>
          <Input value={dayData.period3} onChange={(e) => this.changeSubject(index, 'period3', e.target.value)}
            onBlur={(e) => this.saveSubjectChange(dayData.id, 'period3', e.target.value)}
            disabled={!this.state.isInputEnable}
            className={!this.state.isInputEnable ? 'custom-input' : '' } />
        </Table.Cell>
        <Table.Cell key={dayData.id + 4000}>
          <Input value={dayData.period4} onChange={(e) => this.changeSubject(index, 'period4', e.target.value)}
            onBlur={(e) => this.saveSubjectChange(dayData.id, 'period4', e.target.value)}
            disabled={!this.state.isInputEnable}
            className={!this.state.isInputEnable ? 'custom-input' : '' } />
        </Table.Cell>
        <Table.Cell key={dayData.id + 5000}>
          <Input value={dayData.period5} onChange={(e) => this.changeSubject(index, 'period5', e.target.value)}
            onBlur={(e) => this.saveSubjectChange(dayData.id, 'period5', e.target.value)}
            disabled={!this.state.isInputEnable}
            className={!this.state.isInputEnable ? 'custom-input' : '' } />
        </Table.Cell>
        <Table.Cell key={dayData.id + 6000}>
          <Input value={dayData.period6} onChange={(e) => this.changeSubject(index, 'period6', e.target.value)}
            onBlur={(e) => this.saveSubjectChange(dayData.id, 'period6', e.target.value)}
            disabled={!this.state.isInputEnable}
            className={!this.state.isInputEnable ? 'custom-input' : '' } />
        </Table.Cell>
      </Table.Row>);
    return tableCells;
  }

  render() {
    if (!this.state.timeTableData.length) return (
      <Container>
        <Select placeholder='Select school year' options={schoolYears} onChange={this.changeSchoolYear} />
        <Radio toggle onChange={this.toggleEditableTable} checked={this.state.isInputEnable} />
      </Container>
    );

    return (
      <Container>
        <Select placeholder='Select school year' options={schoolYears} onChange={this.changeSchoolYear} />
        <Radio toggle onChange={this.toggleEditableTable} checked={this.state.isInputEnable} />
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