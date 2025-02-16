import React from 'react'

const TaskList = ({data}) => {
  return (
    <div className='flex justify-between mt-10 gap-4'>
        <div className='p-10 w-[45%] bg-green-700  rounded-3xl'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3 >
        </div>

        <div className='p-10 w-[45%] bg-green-600  rounded-3xl'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.completedTask}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3 >
        </div>

        <div className='p-10 w-[45%] bg-green-500  rounded-3xl'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3 >
        </div>

        <div className='p-10 w-[45%] bg-green-400  rounded-3xl'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3 >
        </div>
      
    </div>
  )
}

export default TaskList
