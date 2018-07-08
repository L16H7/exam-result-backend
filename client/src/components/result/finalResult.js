import React, { Component } from "react";
import { Grid, Segment, Icon, Label, Menu,Input ,Table,Dropdown,Select,Button} from 'semantic-ui-react';

import { getFinalResult } from '../../actions/finalResult';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import finalResult from '../../reducers/finalResult'
import { schoolYears } from '../../constants/schoolYears';

class FinalResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tranId:'',
      name: '',
      rollNo:'',
      result:'',
      academicYear:'',
      educationYear:'',
    
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });

  };
  onSchoolYearChange = (e, data) => {
    this.setState({academicYear:data.value});
  }

  Search=()=>event=>{
    console.log(this.state);
    this.props.getFinalResult(this.state.name,this.state.rollNo,
                              this.state.educationYear,this.state.academicYear);
  }

  Delete=id=>event=>{
    alert(id);
  }
  Update=id=>event=>{
    alert(id);
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({ tranId: nextProps.finalResult.tranId });
    // this.setState({ name: nextProps.finalResult.name });
    // this.setState({ rollNo: nextProps.finalResult.rollNo });
    // this.setState({ result: nextProps.finalResult.result });
    // this.setState({ academicYear: nextProps.finalResult.academicYear });
    // this.setState({ educationYear: nextProps.finalResult.educationYear });
    console.log(nextProps)
  }


  componentDidMount() {
    this.props.getFinalResult(this.state.name,'','','');
  } 

  renderFinalResult(results) {
    let tableRows='';
    if(results.length>0){
      tableRows = results.map(result => 
      
        <Table.Row>
            <Table.Cell className='name'><b>{result.name}</b></Table.Cell>
            <Table.Cell><b>{result.rollNo}</b></Table.Cell>
            <Table.Cell><b>{result.academicYear}</b></Table.Cell>
            <Table.Cell><b>{result.result}</b></Table.Cell>
            <Table.Cell textAlign='center'>
              <Button  circular color='facebook' icon='edit' id={result.tranId} 
                       onClick={this.Update(result.tranId)}/>
              <Button  circular color='red' icon='delete' id={result.tranId} 
                       onClick={this.Delete(result.tranId)} />
            </Table.Cell>
        </Table.Row>
                      
                    
        );
    }
    else{
      tableRows=<Table.Row>
            <Table.Cell className='name'></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell textAlign='center'>

            </Table.Cell>
      </Table.Row>;  
         
    }

    return tableRows;
  }

  render() {

    if (!this.props.finalResult.length) 
    return (<div>
        <br/>
          <Grid columns='equal'>

            <Grid.Row>
              <Grid.Column>
                <Input placeholder='Roll No' 
                       value={this.state.rollNo} 
                       onChange={this.handleChange('rollNo')} />
              </Grid.Column>
              <Grid.Column>
                <Input placeholder='Name' 
                        value={this.state.name} 
                        onChange={this.handleChange('name')} />
              </Grid.Column>
              <Grid.Column>
                <Select placeholder='Select School Year' 
                        options={schoolYears} 
                        onChange={this.onSchoolYearChange} />
              </Grid.Column>
              <Grid.Column>
                <Input placeholder='Education Year' 
                          value={this.state.educationYear} 
                          onChange={this.handleChange('educationYear')} />
              </Grid.Column>
              <Grid.Column>
                <Button primary onClick={this.Search()}  floated='right'>
                    Search
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
      
                <Table celled structured>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
                      <Table.HeaderCell rowSpan='2'>Roll No</Table.HeaderCell>
                      <Table.HeaderCell rowSpan='2'>Academic Year</Table.HeaderCell>
                      <Table.HeaderCell rowSpan='2'>Result</Table.HeaderCell>
                      <Table.HeaderCell rowSpan='2'>Action</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
            
                  <Table.Body>

                    {this.renderFinalResult(this.props.finalResult)}


                  </Table.Body>

                </Table>                  

             
              </Grid.Column>

            </Grid.Row>
          </Grid>
      
    </div>);

    return (
      <div className="">
        <br/>
          <Grid columns='equal'>

            <Grid.Row>
              <Grid.Column>
                <Input placeholder='Roll No' 
                       value={this.state.rollNo} 
                       onChange={this.handleChange('rollNo')} />
              </Grid.Column>
              <Grid.Column>
                <Input placeholder='Name' 
                        value={this.state.name} 
                        onChange={this.handleChange('name')} />
              </Grid.Column>
              <Grid.Column>
                <Select placeholder='Select School Year' 
                        options={schoolYears} 
                        onChange={this.onSchoolYearChange} />
              </Grid.Column>
              <Grid.Column>
                <Input placeholder='Education Year' 
                          value={this.state.educationYear} 
                          onChange={this.handleChange('educationYear')} />
              </Grid.Column>
              <Grid.Column>
                <Button primary onClick={this.Search()}  floated='right'>
                    Search
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
      
                <Table celled structured>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
                      <Table.HeaderCell rowSpan='2'>Roll No</Table.HeaderCell>
                      <Table.HeaderCell rowSpan='2'>Academic Year</Table.HeaderCell>
                      <Table.HeaderCell rowSpan='2'>Result</Table.HeaderCell>
                      <Table.HeaderCell rowSpan='2'>
                      Action
                      <Button  circular color='facebook' icon='edit' id={result.tranId} 
                        onClick={this.Update(result.tranId)}/>
                      </Table.HeaderCell>
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