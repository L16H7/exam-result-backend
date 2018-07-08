import React, { Component } from 'react';
import { Button, Checkbox, Input, Form, Label } from 'semantic-ui-react';

import { getAssignmentById, updateAssignmentById } from '../../actions/assignment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link, withRouter } from 'react-router-dom';

class AssignmentEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assignment: {
        id: 0,
        assignmentDate: '2018-06-30',
        period: 0,
        subject: '',
        description: ''
      }
    }
  }

  componentDidMount() {
    this.props.getAssignmentById(this.props.id);
  }

  componentWillReceiveProps(props) {
    let newAssignment = props.assignment[0];
    // newCurriculum.curriculumDate=Moment(newCurriculum.curriculumDate).format('yyyy-mm-dd');
    newAssignment.assignmentDate = newAssignment.assignmentDate.slice(0, 10);
    
    this.setState({ assignment: newAssignment });
  }
  
  handleChange = (name) => (event) => {
    const { assignment } = this.state;
    const newAssignment = {
      ...assignment,
      [name]: event.target.value
    };

    this.setState({ assignment: newAssignment });
  }

  saveChanges = () => {
    this.props.updateAssignmentById(this.state.assignment.id, this.state.assignment);
    // this.props.history.push('/assignment/manage');
    window.location = '/assignment/manage';
  }

  render() {
    if (!this.props.assignment.length) {
      return (
        <h1>ERROR 404</h1>
      );
    }

    return (
      <Form>
        <Form.Field>
          <Label>Date</Label>
          <input type='date' value={this.state.assignment.assignmentDate} onChange={this.handleChange('assignmentDate')} />
        </Form.Field>
        <Form.Field>
          <Label>Period</Label>
          <Input value={this.state.assignment.period} onChange={this.handleChange('period')} />
        </Form.Field>
        <Form.Field>
          <Label>Subject</Label>
          <Input value={this.state.assignment.subject} onChange={this.handleChange('subject')} />
        </Form.Field>
        <Form.Field>
          <Label>Description</Label>
          <Input value={this.state.assignment.description} onChange={this.handleChange('description')} />
        </Form.Field>

        <Button type='submit' onClick={this.saveChanges}>Save</Button>
        <Link to='/assignment/manage'><Button type='submit'>Cancel</Button></Link>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAssignmentById, updateAssignmentById }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AssignmentEdit));