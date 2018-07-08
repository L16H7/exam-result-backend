import React, { Component } from 'react';
import { Button, Checkbox, Input, Form, Label } from 'semantic-ui-react';

import { insertFinalResult} from '../../actions/finalResult';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { schoolYears } from '../../constants/schoolYears';
import { Link, withRouter } from 'react-router-dom';

class AddFinalResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: {
        name: '',
        rollNo: '',
        academicYear: '',
        result:''
        
      }
    }
  }

  componentDidMount() {

  }

  componentWillReceiveProps(props) {

  }
  
  handleChange = (name) => (event) => {
    const { result } = this.state;
    const newResult = {
      ...result,
      [name]: event.target.value
    };

    this.setState({ result: newResult });
  }
  onSchoolYearChange = (e, data) => {
    const { result } = this.state;
    const newResult = {
      ...result,
      [name]: data.value
    };
    this.setState({ result: newResult });
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
          <Label>Name</Label>
          <Input onChange={this.handleChange('name')} />

        </Form.Field>
        <Form.Field>
          <Label>Roll No</Label>
          <Input onChange={this.handleChange('rollNo')} />
        </Form.Field>
        <Form.Field>
          <Label>Academic Year</Label>
          <Select placeholder='Select School Year' 
                        options={schoolYears} 
                        onChange={this.onSchoolYearChange} />
        </Form.Field>
        <Form.Field>
          <Label>Result</Label>
          <Input onChange={this.handleChange('result')} />
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
  return bindActionCreators({ insertFinalResult }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddFinalResult));