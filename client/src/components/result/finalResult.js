import React, { Component } from "react";
import {Icon, Table} from 'semantic-ui-react';

import { getFinalResult } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import finalResult from '../../reducers/finalResult'

class FinalResult extends Component {
  componentDidMount() {
    this.props.getFinalResult(2);
  } 

  renderFinalResult(results) {
    let tableRows = results.map(result => 

        <Table.Row>
            <Table.Cell><b>{result.name}</b></Table.Cell>
            <Table.Cell><b>{result.rollNo}</b></Table.Cell>
            <Table.Cell><b>{result.academicYear}</b></Table.Cell>
            <Table.Cell><b>{result.result}</b></Table.Cell>
        </Table.Row>
                      
                    
    );
    return tableRows;
  }

  render() {
    if (!this.props.finalResult.length) return (<div></div>);

    return (
      <Table celled structured>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Roll No</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Academic Year</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Result</Table.HeaderCell>

        </Table.Row>
      </Table.Header>
  
      <Table.Body>

        {this.renderFinalResult(this.props.finalResult)}


      </Table.Body>
    </Table>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFinalResult }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FinalResult);