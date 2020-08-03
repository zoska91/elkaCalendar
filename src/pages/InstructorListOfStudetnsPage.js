import React from 'react';

import ListOfStudents from '../components/Shared/ListOfStudents';

const list = [
  {
    id: 1,
    name: 'Adam Nowak',
    tel: '505605956',
  },
  {
    id: 2,
    name: 'Adam Nowak',
    tel: '505605956',
  },
  {
    id: 3,
    name: 'Adam Nowak',
    tel: '505605956',
  },
  {
    id: 4,
    name: 'Adam Nowak',
    tel: '505605956',
  },
  {
    id: 5,
    name: 'Adam Nowak',
    tel: '505605956',
  },
];

const InstructorListOfStudetnsPage = () => {
  return (
    <div>
      <p>
        <ListOfStudents list={list} />
      </p>
    </div>
  );
};

export default InstructorListOfStudetnsPage;
