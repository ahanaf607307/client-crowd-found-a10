import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from '../Components/Campaigns/Banner'
import Discovar from '../Components/Campaigns/Extra/Discovar'
import Reviews from '../Components/Campaigns/Extra/Reviews'
import RunningCampaigns from '../Components/Campaigns/RunningCampaigns'
import HowItworks from '../Home/HowItworks'
import Faq from '../Home/Faq'
import Advertisement from '../Home/Advertisement'
import StartCampain from '../Components/StartCampain/StartCampain'


function Home() {
const [campLoading , setCampLoading] = useState(true)
const [runningCampData , setRunningCampData] = useState([])
useEffect(()=> {
  fetchData()
} , [])

console.log(runningCampData)

const fetchData = async () => {
  const result = await fetch("https://server-croud-funding.vercel.app/campaigns")
  const data =await result.json()
  setRunningCampData(data)
  setCampLoading(false)
}
  return (
    <div className='my-12'>
      <Helmet>
        <title>Home | PlanMake</title>
      </Helmet>
      <div>
        <Banner/>
      </div>
    <div>
    <RunningCampaigns runningCampData={runningCampData} campLoading={campLoading}/>
    </div>

      <div className='my-16'>
        <Discovar/>
      </div>
      <StartCampain/>
      <div className='my-16'>
        <HowItworks/>
      </div>
      <div >
        <Advertisement/>
      </div>
      <div >
        <Faq/>
      </div>
      <div >
        <Reviews/>
      </div>
    </div>
  )
}

export default Home
