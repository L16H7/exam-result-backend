import React, { Component } from 'react';
import { Button, Checkbox, Input, Form, Label } from 'semantic-ui-react';

import { getCurriculumById } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CurriculumEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curriculum: {
        curriculumDate: '2018-06-30',
        period: 0,
        subject: '',
        description: ''
      }
    }
  }

  componentDidMount() {
    this.props.getCurriculumById(this.props.id);
  }

  componentWillReceiveProps(props) {
    let newCurriculum = props.curriculum[0];
    newCurriculum.curriculumDate = newCurriculum.curriculumDate.slice(0, 10);
    
    console.log(newCurriculum);

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

  render() {
    if (!this.props.curriculum.length) {
      return (
        <h1>ERROR 404</h1>
      );
    }

    return (
      <Form>
        <Form.Field>
          <Label>Date</Label>
          <input type='date' value={this.state.curriculum.curriculumDate} onChange={this.handleChange('curriculumDate')} />
        </Form.Field>
        <Form.Field>
          <Label>Period</Label>
          <Input value={this.state.curriculum.period} onChange={this.handleChange('period')} />
        </Form.Field>
        <Form.Field>
          <Label>Subject</Label>
          <Input value={this.state.curriculum.subject} onChange={this.handleChange('subject')} />
        </Form.Field>
        <Form.Field>
          <Label>Description</Label>
          <Input value={this.state.curriculum.description} onChange={this.handleChange('description')} />
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