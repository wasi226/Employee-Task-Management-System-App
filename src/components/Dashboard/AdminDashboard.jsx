// import React from 'react'
// import Header from '../others/Header'
// import CreateTask from '../others/CreateTask'
// import AllTask from '../others/AllTask'

// const AdminDashboard = (props) => {
//   return (
//     <div className='h-screen w-full bg-gradient-to-b from-black to-green-800 text-white p-2'>
//       <Header changeUser={props.changeUser}/>
//       <CreateTask/>
//       <AllTask/>
//     </div>
//   )
// }

// export default AdminDashboard


import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-black to-green-800 text-white p-2'>
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
