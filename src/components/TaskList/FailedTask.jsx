import React from 'react'

const FailedTask = () => {
  return (
      <div className='h-full p-3 w-[24%] bg-black rounded-xl shrink-0'>
          <div className='flex justify-between items-center'>
          <h3 className='px-3 py-1 bg-red-600 rounded-xl text-sm'>{data.category}</h3>
          <h4 className='text-sm'>{data.taskDate}</h4>
          </div>

          <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
          <p className='text-sm mt-2'>{data.taskDescription}</p>
          <div className='mt-2'>
            <button className='bg-green-600 p-1 text-sm cursor-pointer'>Failed Task</button>
          </div>
    </div>
  )
}

export default FailedTask
