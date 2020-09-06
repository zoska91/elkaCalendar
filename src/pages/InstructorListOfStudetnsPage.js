import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getAllStudents } from '../components/Firebase/firebase';

const Wrapper = styled.div``;

const LogOut = styled.button``;

const Menu = styled.nav``;

const MenuItem = styled.li``;

const AllStudentsPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getAllStudents();

      const users = data.filter(el => el.role === 'STUD');
      console.log(users);
      setUsers(users);
    };

    getUsers();
  }, []);

  const usersList = users.map(el => <p>{el.name}</p>);

  return (
    <Wrapper>
      <LogOut>Wyloguj</LogOut>
      <Menu>
        <ul>
          <MenuItem>Zarządzaj kursantami</MenuItem>
          <MenuItem>Dodanie jazdy</MenuItem>
          <MenuItem>Zadeklaruj wolne terminy</MenuItem>
        </ul>

        {usersList}
      </Menu>
    </Wrapper>
  );
};

export default AllStudentsPage;
