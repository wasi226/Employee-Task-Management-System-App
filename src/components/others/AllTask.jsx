// import React, { useContext } from 'react'
// import { AuthContext } from '../../context/AuthProvider'
// /*yaha problem ha scroll bar wala */
// const AllTask = () => {

//    const [userData,setUserData]=useContext(AuthContext)
//   return (
//     <div className='w-full h-45 bg-black p-2 overflow-auto scrollbar-hide'>
//       {userData.map(function(elem,idx){

//         return <div key={idx} className='flex justify-between px-4 py-2 mb-2 rounded-xl bg-green-500'>
//                 <h2 className='w-1/5'>{elem.firstName}</h2>
//                 <h3 className='w-1/5'>{elem.taskCount.active}</h3>
//                 <h5 className='w-1/5'>{elem.taskCount.newTask}</h5>
//                 <h5 className='w-1/5'>{elem.taskCount.completedTask}</h5>
//                 <h5 className='w-1/5'>{elem.taskCount.failed}</h5>
//                  </div>
//       })}
//     </div>
//   )
// }

// export default AllTask


import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className='w-full h-[45%] bg-black p-2 overflow-auto scrollbar-hide'>
      {userData?.map((elem, idx) => (
        <div key={idx} className='flex justify-between px-4 py-2 mb-2 rounded-xl bg-green-500'>
          <h2 className='w-1/5'>{elem.firstName}</h2>
          <h3 className='w-1/5'>{elem.taskCount?.active || 0}</h3>
          <h5 className='w-1/5'>{elem.taskCount?.newTask || 0}</h5>
          <h5 className='w-1/5'>{elem.taskCount?.completedTask || 0}</h5>
          <h5 className='w-1/5'>{elem.taskCount?.failed || 0}</h5>
        </div>
      ))}
    </div>
  );
};

export default AllTask;

