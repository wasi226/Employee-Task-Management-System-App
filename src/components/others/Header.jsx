// import React from 'react'
// import { setLocalStorage } from '../../Utils/LocalStorage'

// const Header = (props) => {

//   // const [username, setUserName] = useState('')

//   // if(!data){
//   //   setUserName('Admin')
//   // }else{
//   //   setUserName(data.firstName)
//   // }

//   const logOutUser=()=>{
//     localStorage.setItem('loggedInUser','')
//     props.changeUser('')
//     // window.location.reload()

//   }



//   return (
//     <div className='flex items-end justify-between'>
//       <h1 className='text-2xl'>Hello <br /><span className='text-3xl font-semibold'>username 👋</span></h1>
//       <button onClick={logOutUser} className='bg-green-800 hover:bg-green-400 cursor-pointer px-3 py-2 rounded-xl text-lg'>Log out</button>

//     </div>
//   )
// }

// export default Header

// // {data.firstName}

import React from 'react';

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl'>
        Hello <br />
        <span className='text-3xl font-semibold'>{props.data?.firstName || 'Admin'} 👋</span>
      </h1>
      <button 
        onClick={logOutUser} 
        className='bg-green-800 hover:bg-green-400 cursor-pointer px-3 py-2 rounded-xl text-lg'>
        Log out
      </button>
    </div>
  );
};

export default Header;

