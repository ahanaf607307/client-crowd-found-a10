import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

function RunningCampCard({camps , campLoading}) {
  const {_id,imageUrl,campignsName,campignsType,minDonation,deadline,userEmail,userName} = camps

  return (
    < >
   {
    campLoading ? <Loading/> :  <Fade>
    <div className="card flex flex-col h-[470px] card-compact bg-base-100  shadow-xl  ">
    <div className=''>
      <img
        src={imageUrl}
        alt="campaigns"
        className='h-48 md:h-60 w-full rounded-t-xl'/>
    </div>
    <div className="my-3 px-2 flex-1 space-y-2 text-center">
      
      <h1 className='text-2xl my-4 font-bold'>{campignsName}</h1>
      <h2 className='absolute top-44 md:top-52 right-24 text-white rounded-sm bg-[#da7568] px-2 py-1'> {campignsType}</h2>
   
    
    <div className='flex justify-between text-gray-500 px-3 mt-5'>
    <h1>Deadline : {deadline}</h1>
    <h1>{minDonation} $</h1>
    </div>
    
  
    </div>
    <Link to={`/details/${_id}`} className='btn w-full bg-[#8940d0] text-white/90'>See more </Link>
  </div>
    </Fade>
   }
    </>
  )
}

export default RunningCampCard
