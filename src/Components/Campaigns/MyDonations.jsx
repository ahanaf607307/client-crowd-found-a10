import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Helmet } from 'react-helmet-async'
import { useLoaderData } from 'react-router-dom'

function MyDonations() {
  const camps = useLoaderData()

  return (
  

    <div className=' py-20  bg-gray-200'>
    <Helmet>
        <title>My Donation | PlanMake</title>
      </Helmet>
    <Fade>
    <h1 className='text-center font-semibold text-3xl md:text-4xl mt-10'>You Donated At : <span className='text-[#fd9940]'>{camps.length}</span> Campaign's</h1>
       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 mb-5 max-w-7xl mx-auto ' >
     {
   camps?.map(camp => <div key={camp.detail._id} className="card flex flex-col h-[420px] card-compact border bg-white/90">
     <div className='flex-1'>
       <img
         src={camp.detail?.imageUrl}
         alt="campaigns"
         className='h-48 md:h-56 w-full rounded-t-xl' />
      </div>
     <div className="my-3 px-2 flex-1 space-y-2 text-gray-500 font-semibold">
          
       <h1 className='text-xl my-3 font-bold text-gray-700'>{camp.detail?.campignsName}</h1>
       <h2>Tpye : {camp.detail?.campignsType}</h2>
       
        
       <h1>Deadline : {camp.detail?.deadline}</h1>
       <h1>Donated Amount : {camp.detail?.minDonation}</h1>
        
      
     </div>
       
   </div>)
 }
 </div> 
    
    </Fade>
    </div>
  )
}

export default MyDonations
