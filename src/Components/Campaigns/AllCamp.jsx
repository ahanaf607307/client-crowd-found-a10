
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

function AllCamp() {
  const campaign = useLoaderData();
  console.log(campaign);
  const [sorded, setSorted] = useState(campaign);
  const handleSort = () => {
    const sortData = [...sorded].sort((a, b) => b.minDonation - a.minDonation);
    setSorted(sortData);
  };

  return (
    <div className="py-20 bg-gray-100">
      <Helmet>
        <title>All Campaign | PlanMake</title>
      </Helmet>
      <h1 className="text-center text-3xl mt-10 mb-7 font-semibold">
        All Campaigns
      </h1>

      <div className="text-center my-5 flex gap-2 items-center justify-center">
        <h1 className="font-semibold text-gray-500">
          Sort Data by Highest Donation to Lowest Donation :{" "}
        </h1>
        <button
          onClick={handleSort}
          className="py-2 hover:bg-blue-800 hover:scale-105 transition duration-100 rounded-md font-semibold bg-[#de7835] px-5 text-white"
        >
          Sort
        </button>
      </div>
    

      <div  className='grid p-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5  max-w-7xl mx-auto '>
      {sorded.map((camp, index) => (
 
 <div key={camp?._id} className="card flex flex-col h-[470px] card-compact bg-white/90  border ">
<div className="">
<img
  src={camp?.imageUrl}
  alt="campaigns"
  className="h-48 md:h-60 w-full rounded-t-xl"
/>
</div>
<div className="my-3 px-2 flex-1 space-y-2 text-center">
<h1 className="text-2xl my-4 font-bold line-clamp-2">{camp?.campignsName}</h1>
<h2 className="absolute top-44 md:top-52 right-24 text-white rounded-sm bg-[#da7568] px-2 py-1">
  {" "}
  {camp?.campignsType}
</h2>

<div className="flex justify-between text-gray-500 px-3 mt-5">
  <h1>Deadline : {camp?.deadline}</h1>
  <h1>{camp?.minDonation} $</h1>
</div>
</div>
<Link
to={`/details/${camp?._id}`}
className="btn  bg-[#8940d0] text-white"
>
See More
</Link>
</div>
))}
      </div>
    </div>
  );
}

export default AllCamp;
