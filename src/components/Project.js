import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <div style={{ backgroundImage: `url(${item.image})` }} className='rounded-2xl w-[21rem] h-[21rem] sm:w-[23rem] sm:h-[23rem] bg-cover bg-left-top  ease-in-out duration-[5000ms] cursor-pointer hover:bg-right-bottom' >
        </div>
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      {/*      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3> */}
      <p className='text-base max-w-md'>
        {item.name}
      </p>
    </div>
  );
};

export default Project;
