import React from 'react';
import styled from 'styled-components';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { auth } from '../components/Firebase/firebase';

import ListCalendar from '../components/Shared/ListCalendar';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const Wrapper = styled.div``;

const LogOut = styled.button``;

const Menu = styled.nav``;

const MenuItem = styled.li``;
const events = [
  {
    start: moment().toDate(),
    end: moment().add(1, 'days').toDate(),
    title: 'Some title',
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
];

const InstructorHomePage = () => {
  const localizer = momentLocalizer(moment);

  const list = [
    {
      id: 1,
      date: '8.09.2019',
      name: 'Jan Nowak',
    },
    {
      id: 2,
      date: '8.09.2019',
      name: 'Jan Nowak',
    },
    {
      id: 3,
      date: '8.09.2019',
      name: 'Jan Nowak',
    },
  ];

  return (
    <Wrapper>
      <LogOut
        onClick={() => {
          auth.signOut();
        }}
      >
        {' '}
        Wyloguj
      </LogOut>
      <Menu>
        <ul>
          <MenuItem>Zarządzaj kursantami</MenuItem>
          <MenuItem>Dodanie jazdy</MenuItem>
          <MenuItem>Zadeklaruj wolne terminy</MenuItem>
        </ul>
      </Menu>
      <ListCalendar list={list} title='Najbliższe terminy' />
      <div>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView='week'
          events={events}
          style={{ minHeight: '50vh' }}
        />
      </div>
    </Wrapper>
  );
};

export default InstructorHomePage;
