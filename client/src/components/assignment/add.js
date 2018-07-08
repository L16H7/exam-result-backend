import React, { Component } from 'react';
import { Button, Checkbox, Input, Form, Label } from 'semantic-ui-react';

import { insertAssignment} from '../../actions/assignment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link, withRouter } from 'react-router-dom';

class AssignmentAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assignment: {
        assignmentDate: '',
        period: 0,
        subject: '',
        academicYear:'',
        description: ''
      }
    }
  }

  componentDidMount() {

  }

  componentWillReceiveProps(props) {
    let newCurriculum = props.curriculum[0];
    newCurriculum.curriculumDate = newCurriculum.curriculumDate.slice(0, 10);
    
    this.setState({ curriculum: newCurriculum });
  }
  
  handleChange = (name) => (event) => {
    const { assignment } = this.state;
    const newAssignment = {
      ...assignment,
      [name]: event.target.value
    };

    this.setState({ assignment: newAssignment });
  }

  create = () => {
    this.props.insertAssignment(this.state.assignment);
    // this.props.history.push('/assignment');
    window.location = '/assignment';
  }

  render() {
    // if (!this.props.curriculum.length) {
    //   return (
    //     <h1>ERROR 404</h1>
    //   );
    // }

    return (
      <Form>
        <Form.Field>
          <Label>Date</Label>
          <input type='date'  onChange={this.handleChange('assignmentDate')} />
        </Form.Field>
        <Form.Field>
          <Label>Period</Label>
          <Input onChange={this.handleChange('period')} />
        </Form.Field>
        <Form.Field>
          <Label>Subject</Label>
          <Input onChange={this.handleChange('subject')} />
        </Form.Field>
        <Form.Field>
          <Label>Academic Year</Label>
          <Input onChange={this.handleChange('academicYear')} />
        </Form.Field>
        <Form.Field>
          <Label>Description</Label>
          <Input  onChange={this.handleChange('description')} />
        </Form.Field>

        <Button type='submit' onClick={this.create}>Save</Button>
        <Link to='/assignment'><Button>Cancel</Button></Link>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ insertAssignment }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AssignmentAdd));