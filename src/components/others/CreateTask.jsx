// import React, { useState } from 'react'
// import { useContext } from 'react'
// import { AuthContext } from '../../context/AuthProvider'

// const CreateTask = () => {

//     const [userData,setUserData]=useContext(AuthContext)


//     const [taskTitle, setTaskTitle] = useState('')
//     const [taskDescription, setTaskDescription] = useState('')
//     const [taskDate, setTaskDate] = useState('')
//     const [asignto, setAsignTo] = useState('')
//     const [category, setCategory] = useState('')

//     const [newTask, setNewTask] = useState({})


//     const submitHandler =(e)=>{
//         e.preventDefault()

//         setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})

//         const data = userData


//         data.forEach(function(elem){
//             if(asignto == elem.firstName){
//                elem.tasks.push(newTask)
//                elem.taskCounts.newTask=elem.taskCounts.newTask+1
//             }
//         })
//         setUserData(data)
//         console.log(data)

//         setTaskTitle('')
//         setTaskDescription('')
//         setTaskDate('')
//         setAsignTo('')
//         setCategory('')
//     }



//   return (
//     <div>
//         <form onClick={(e)=>{
//            submitHandler(e)
//         }} className='w-full bg-gradient-to-br from-green-800 to-black flex items-center justify-between mt-3 p-5'>
//             <div className='left w-1/2'>
//                 <div>
//                 <h3 className='text-xl'>Task Title</h3>
//                 <input
//                 value={taskTitle}
//                 onChange={(e)=>{
//                     setTaskTitle(e.target.value)
//                 }}
//                  className='w-full border-1 p-1.5 mt-0.5' type="text" placeholder='Make a UI design' />
//                 </div>

//                 <div>
//                 <h3 className='text-xl'>Date</h3>
//                 <input 
//                  value={taskDate}
//                  onChange={(e)=>{
//                     setTaskDate(e.target.value)
//                  }}
//                  className='w-full border-1 p-1.5 mt-0.5' type="date" />
//                 </div>

//                 <div>
//                 <h3 className='text-xl'>Assign to</h3>
//                 <input
//                  value={asignto}
//                  onChange={(e)=>{
//                      setAsignTo(e.target.value)
//                  }}
//                  className='w-full border-1 p-1.5 mt-0.5' type="text" placeholder='Employee Name' />
//                 </div>

//                 <div>
//                 <h3 className='text-xl'>category</h3>
//                 <input
//                  value={category}
//                  onChange={(e)=>{
//                      setCategory(e.target.value)
//                  }}
//                 className='w-full border-1 p-1.5 mt-0.5' type="text" placeholder='Design,dev,etc...'/>
//                 </div>
//             </div>

//             <div className='Right w-[40%]'>
//                 <div>
//                     <h3 className='text-xl'>Description</h3>
//                     <textarea 
//                      value={taskDescription}
//                      onChange={(e)=>{
//                          setTaskDescription(e.target.value)
//                      }}
//                     className='w-full h-44 py-2 px-4 border-1 mt-1 text-lg' name="" id=""></textarea>
//                 </div>
//                 <div className='text-center'>
//                <button className='px-3 py-2 rounded-xl bg-green-600 text-xl mt-2 active:scale-95 cursor-pointer'>Create Task</button>
//                </div>
//             </div>
//         </form>
//        </div>
//   )
// }

// export default CreateTask



import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false };

    const updatedData = userData.map((elem) => {
      if (assignTo === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskCount: { ...elem.taskCount, newTask: elem.taskCount.newTask + 1 },
        };
      }
      return elem;
    });

    setUserData(updatedData);

    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
  };

  return (
    <div>
      <form onSubmit={submitHandler} className='w-full bg-gradient-to-br from-green-800 to-black flex items-center justify-between mt-3 p-5'>
        <div className='left w-1/2'>
          <label className='text-xl'>Task Title</label>
          <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} className='w-full border p-1.5 mt-0.5' type="text" placeholder='Make a UI design' />

          <label className='text-xl'>Date</label>
          <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)} className='w-full border p-1.5 mt-0.5' type="date" />

          <label className='text-xl'>Assign to</label>
          <input value={assignTo} onChange={(e) => setAssignTo(e.target.value)} className='w-full border p-1.5 mt-0.5' type="text" placeholder='Employee Name' />

          <label className='text-xl'>Category</label>
          <input value={category} onChange={(e) => setCategory(e.target.value)} className='w-full border p-1.5 mt-0.5' type="text" placeholder='Design, Dev, etc...' />
        </div>

        <div className='Right w-[40%]'>
          <label className='text-xl'>Description</label>
          <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} className='w-full h-44 py-2 px-4 border mt-1 text-lg'></textarea>
          
          <div className='text-center'>
            <button type='submit' className='px-3 py-2 rounded-xl bg-green-600 text-xl mt-2 active:scale-95 cursor-pointer'>Create Task</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

