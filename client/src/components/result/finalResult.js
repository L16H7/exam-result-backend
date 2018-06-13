import React, { Component } from "react";
import { Grid, Segment, Icon, Label, Menu,Input ,Table,Dropdown} from 'semantic-ui-react';

import { getFinalResult } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import finalResult from '../../reducers/finalResult'

// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
class FinalResult extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 's',optionValue:2};
 
    this.handleChange = this.handleChange.bind(this);
    this.selectChange=this.selectChange.bind(this);
  }

  selectChange(event){
    this.setState({optionValue:event.target.value})
  }

  handleChange(event) {
    this.componentDidMount();
    this.setState({value: event.target.value});
    
  }

  componentDidMount() {
    this.props.getFinalResult(this.state.value,'','','');
  } 

  renderFinalResult(results) {
    let tableRows = results.map(result => 

        <Table.Row>
            <Table.Cell className='name'><b>{result.name}</b></Table.Cell>
            <Table.Cell><b>{result.rollNo}</b></Table.Cell>
            <Table.Cell><b>{result.academicYear}</b></Table.Cell>
            <Table.Cell><b>{result.result}</b></Table.Cell>
        </Table.Row>
                      
                    
    );
    return tableRows;
  }

  render() {
    const options = [
      { key: 1,  text: 'First Year', value: 1 },
      { key: 2, text: 'Second Year', value: 2 },
      { key: 3, text: 'Third Year', value: 3 },
      { key: 4, text: 'Fourth Year', value: 4 },
      { key: 5, text: 'Fifth Year', value: 5 },
    ]
    if (!this.props.finalResult.length) return (<div></div>);

    return (
      <div className="">
        <br/>
          <Grid columns='equal'>

            <Grid.Row>
              <Grid.Column>
                <Input placeholder='Roll No' value={this.state.value} onChange={this.handleChange} />
              </Grid.Column>
              <Grid.Column>
                <Input placeholder='Name'/>  
              </Grid.Column>
              <Grid.Column>
                <Dropdown selection options={options} placeholder='Academic Year' 
                          value={this.state.optionValue} onChange={this.selectChange} />
              </Grid.Column>
              <Grid.Column>
                <Input placeholder='EducationYear' />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <p>{this.state.optionValue}+{this.state.value}</p>
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

             
              </Grid.Column>

            </Grid.Row>
          </Grid>

      </div>

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