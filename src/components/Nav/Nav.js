import React from "react";
import styled from "styled-components";

const Menu = styled.nav``;

const MenuItem = styled.li``;

const Nav = () => {
  return (
    <Menu>
      <ul>
        <MenuItem>Zarządzaj kursantami</MenuItem>
        <MenuItem>Dodanie jazdy</MenuItem>
        <MenuItem>Zadeklaruj wolne terminy</MenuItem>
      </ul>
    </Menu>
  );
};

export default Nav;
