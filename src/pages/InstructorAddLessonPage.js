import moment from 'moment';
import React, { Component } from 'react';
import InputMoment from '../components/input-moment/src/input-moment';
import styled from 'styled-components';

import '../components/input-moment/src/scss/input-moment.scss';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: white;
  }
`;

const Input = styled.div`
  text-align: center;
  padding-bottom: 2vh;

  label {
    display: block;
    margin: 2vh 0;
    color: #0d528a;
  }

  input {
    background-color: transparent;
    color: #0d528a;
    font-weight: 600;
    border: 2px solid white;
    padding: 5px 15px;
    width: 90%;
  }
`;

class InstructorAddLessonPage extends Component {
  state = {
    m: moment(),
    studentName: '',
    during: null,
  };

  handleChange = m => {
    this.setState({ m });
  };

  handleChangeName = value => {
    console.log(value);
    this.setState({ studentName: value });
  };

  handleChangeDuring = value => {
    console.log(value);
    this.setState({ during: value });
  };

  handleSave = () => {
    console.log('saved', this.state.m.format());
  };

  render() {
    return (
      <Wrapper>
        <h1>Dodaj termin jazdy</h1>
        <form>
          <Input>
            <div>
              <label>Imię i nazwisko kursanta</label>
              <input
                type='text'
                value={this.state.studentName}
                onChange={e => this.handleChangeName(e.target.value)}
              />
            </div>
            <sidv>
              <label>Czas trwania jazdy (min)</label>
              <input
                type='number'
                value={this.state.during}
                onChange={e => this.handleChangeDuring(e.target.value)}
              />
            </sidv>
          </Input>
          <InputMoment
            moment={this.state.m}
            onChange={this.handleChange}
            minStep={5}
            onSave={this.handleSave}
          />
        </form>
      </Wrapper>
    );
  }
}

export default InstructorAddLessonPage;
