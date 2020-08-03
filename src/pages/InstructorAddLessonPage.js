import moment from 'moment';
import React, { Component } from 'react';
import InputMoment from '../components/DataPicker/src/input-moment';

class InstructorAddLessonPage extends Component {
  state = {
    m: moment(),
  };

  handleChange = m => {
    this.setState({ m });
  };

  handleSave = () => {
    console.log('saved', this.state.m.format('llll'));
  };

  render() {
    return (
      <div className='app'>
        <h1>hello</h1>
        <form>
          <div className='input'>
            <input type='text' value={this.state.m.format('llll')} readOnly />
          </div>
          <InputMoment
            moment={this.state.m}
            onChange={this.handleChange}
            minStep={5}
            onSave={this.handleSave}
          />
        </form>
      </div>
    );
  }
}

export default InstructorAddLessonPage;
