import React from 'react';
import  {CirclesWithBar} from 'react-loader-spinner';


function Spinner({message}) {

  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
        
        <CirclesWithBar
        color="red"
        outerCircleColor="green"
        innerCircleColor="green"
        barColor="green"
      />
    

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  )
}

export default Spinner