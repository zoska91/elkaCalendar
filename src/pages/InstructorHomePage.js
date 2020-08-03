import React from 'react';
import styled from 'styled-components';

import ListCalendar from '../components/Shared/ListCalendar';

const Wrapper = styled.div``;

const LogOut = styled.button``;

const Menu = styled.nav``;

const MenuItem = styled.li``;

const InstructorHomePage = () => {
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
      <LogOut>Wyloguj</LogOut>
      <Menu>
        <ul>
          <MenuItem>Zarządzaj kursantami</MenuItem>
          <MenuItem>Dodanie jazdy</MenuItem>
          <MenuItem>Zadeklaruj wolne terminy</MenuItem>
        </ul>
      </Menu>
      <ListCalendar list={list} title='Najbliższe terminy' />
    </Wrapper>
  );
};

export default InstructorHomePage;
