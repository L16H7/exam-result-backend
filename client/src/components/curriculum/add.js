import React, { Component } from 'react';
import { Button, Checkbox, Input, Form, Label } from 'semantic-ui-react';

import { insertCurriculum} from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link, withRouter } from 'react-router-dom';

class CurriculumAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curriculum: {
        curriculumDate: '',
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
    const { curriculum } = this.state;
    const newCurriculum = {
      ...curriculum,
      [name]: event.target.value
    };

    this.setState({ curriculum: newCurriculum });
  }

  create = () => {
    this.props.insertCurriculum(this.state.curriculum);
    this.props.history.push('/curriculum');
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
          <input type='date'  onChange={this.handleChange('curriculumDate')} />
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
        <Link to='/curriculum/manage'><Button type='submit'>Cancel</Button></Link>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ insertCurriculum }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurriculumAdd));