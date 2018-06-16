import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

import { getCurriculumById } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CurriculumEdit extends Component {
  componentDidMount() {
    this.props.getCurriculumById(this.props.id);
  }
  
  render() {
    if (!this.props.curriculum.length) {
      return (
        <h1>ERROR 404</h1>
      );
    }
    return (
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getCurriculumById }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumEdit);