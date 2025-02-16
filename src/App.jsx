// import React, { useContext, useEffect, useState } from 'react'
// import Login from './components/Auth/Login'
// import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
// import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
// import { AuthContext } from './context/AuthProvider'

// const App = () => {

//   const [user, setUser] = useState(null)
//   const [loggedInUserData, setLoggedInUserData] = useState(null)
//   const [userData,setUserData]=useContext(AuthContext)

//   useEffect(()=>{
//     const loggedInUser=localStorage.getItem('loggedInUser')

//     if(loggedInUser){
//       const userData=JSON.parse(loggedInUser)
//       setUser(userData.role)
//       setLoggedInUserData(userData.data)
//     }
//   },[])
  

//   const handleLogin = (email,password)=>{
//     if(email == 'admin@gmail.com'  && password == 'wasihaider'){
//       setUser('admin')
//       localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
//     }  
//     else if(userData){
//       const employee = userData.find((e)=>email== e.email && e.password == password)
//       if(employee){
//         setUser('employee')
//         setLoggedInUserData(employee)
//       localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
//       }
//     }
//     else{
//        alert("Invalid Credentials")
//     }
//   }

//   const data = useContext(AuthContext)
//   console.log(data)

//   return (
//     <>
    
//     {!user ?<Login  handleLogin={handleLogin}  />: ''}
//     {user == 'admin' ? <AdminDashboard changeUser={setUser}/>  : (user== 'employee' ? <EmployeeDashboard changeUser={setUser}  data={loggedInUserData} />:null)}
//     </>
//   )
// }

// export default App


import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data || null);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@gmail.com' && password === 'wasihaider') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (userData) {
      const employee = userData.find((e) => e.email === email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert('Invalid Credentials');
      }
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;





