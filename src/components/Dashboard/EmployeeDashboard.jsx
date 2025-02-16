  // import React from 'react'
  // import Header from '../others/Header'
  // import TaskList from '../others/TaskList'
  // import TaskList1 from '../TaskList/TaskList1'

  // const EmployeeDashboard = (props) => {
  //   return (
  //     <div className='p-10 h-screen bg-gradient-to-br from-black to-green-800 text-white' >
  //       <Header changeUser={props.changeUser} data={props.data}/>
  //       <TaskList data={props.data}/>
  //       <TaskList1 data={props.data}/>
  //     </div>
  //   )
  // }

  // export default EmployeeDashboard


  import React from 'react';
import Header from '../others/Header';
import TaskList from '../others/TaskList';
import TaskList1 from '../TaskList/TaskList1';

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 h-screen bg-gradient-to-br from-black to-green-800 text-white'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskList data={props.data} />
      <TaskList1 data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;

