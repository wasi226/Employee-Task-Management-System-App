// import React from 'react'
// import AcceptTask from './AcceptTask'
// import NewTask from './NewTask'
// import CompleteTask from './CompleteTask'
// import FailedTask from './FailedTask'

// const TaskList1 = ({data}) => {
//   return (
//     <div className='h-[45%] overflow-x-auto  w-full bg-green-400 mt-9 py-2 flex items-center justify-start gap-2 flex-nowrap'>
//       {data.tasks.map((elem,idx)=>{
//         if(elem.active){
//         return <AcceptTask key={idx} data={elem}/>
//         }
//         if(elem.newTask){
//           return <NewTask key={idx} data={elem}/>
//         }
//         if(elem.CompleteTask){
//           return <CompleteTask key={idx} data={elem}/>
//         }
//         if(elem.failed){
//           return <FailedTask key={idx} data={elem}/>
//         }
//       })}
//     </div>
//   )
// }

// export default TaskList1


import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList1 = ({ data }) => {
  return (
    <div className='h-[45%] overflow-x-auto w-full bg-green-400 mt-9 py-2 flex items-center justify-start gap-2 flex-nowrap'>
      {data?.tasks?.map((elem, idx) => {
        if (elem.active) return <AcceptTask key={idx} data={elem} />;
        if (elem.newTask) return <NewTask key={idx} data={elem} />;
        if (elem.completedTask) return <CompleteTask key={idx} data={elem} />;
        if (elem.failed) return <FailedTask key={idx} data={elem} />;
        return null;
      })}
    </div>
  );
};

export default TaskList1;
