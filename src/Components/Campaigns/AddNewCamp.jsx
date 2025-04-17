import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import Swal from 'sweetalert2'
import { AuthContext } from '../../FireBase/AuthProvider'


function AddNewCamp() {
  const {users} = useContext(AuthContext)
 
  const handleAddCamp = (e) => {
    e.preventDefault();
    const addCampDetails = {
      imageUrl: e.target.imageUrl.value,
      campignsName: e.target.campignsName.value,
      campignsType: e.target.campignsType.value,
      description: e.target.description.value,
      minDonation: Number(e.target.minDonation.value),
      deadline: new Date(e.target.deadline.value).toISOString(),
      userEmail: e.target.userEmail.value,
      userName: e.target.userName.value,
    };
  
    fetch('https://server-croud-funding.vercel.app/campaigns', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(addCampDetails),
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        Swal.fire({
          title: 'Added Campaign',
          text: 'Your Campaign has been added successfully.',
          icon: 'success',
        });
      })
     
  };
  
  return (
    <div className="max-w-4xl bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100 rounded-2xl p-8 md:py-16 mx-auto shadow-lg my-20">
    <Helmet>
      <title>Add New Campaign | PlanMake</title>
    </Helmet>
    <h1 className="text-center font-semibold text-3xl text-purple-700 my-6">Add New Campaign</h1>
    <form onSubmit={handleAddCamp}>
      <div className="grid md:grid-cols-2 gap-8 text-gray-700 font-semibold items-center justify-center">
        
        {/* Left Column: Image URL and Campaign Name */}
        <div>
          <label className="form-control w-full max-w-xs mb-4">
            <div className="label">
              <span className="label-text text-purple-700">Image URL</span>
            </div>
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              className="input input-bordered w-full max-w-xs border-2 border-gray-300 focus:ring-2 focus:ring-purple-500"
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-purple-700">Campaign Name</span>
            </div>
            <input
              type="text"
              name="campignsName"
              placeholder="Campaign Name"
              className="input input-bordered w-full max-w-xs border-2 border-gray-300 focus:ring-2 focus:ring-purple-500"
              required
            />
          </label>
        </div>
        
        {/* Right Column: Campaign Type and Description */}
        <div>
          <label className="form-control w-full max-w-xs mb-4">
            <div className="label">
              <span className="label-text text-purple-700">Select Campaign Type</span>
            </div>
            <select
              name="campignsType"
              className="input input-bordered w-full max-w-xs border-2 border-gray-300 focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Campaign Type</option>
              <option value="Personal Issue">Personal Issue</option>
              <option value="Startup">Startup</option>
              <option value="Business">Business</option>
              <option value="Creative Ideas">Creative Ideas</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs mb-4">
            <div className="label">
              <span className="label-text text-purple-700">Description</span>
            </div>
            <textarea
              maxLength="340"
              name="description"
              placeholder="Description"
              className="input input-bordered w-full max-w-xs border-2 border-gray-300 focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </label>
        </div>

        {/* Middle Column: Minimum Donation and Deadline */}
        <div>
          <label className="form-control w-full max-w-xs mb-4">
            <div className="label">
              <span className="label-text text-purple-700">Minimum Donation Amount</span>
            </div>
            <input
              type="number"
              name="minDonation"
              placeholder="Minimum Donation Amount"
              className="input input-bordered w-full max-w-xs border-2 border-gray-300 focus:ring-2 focus:ring-purple-500"
              required
              min="1"
            />
          </label>
          <label className="form-control w-full max-w-xs mb-4 cursor-pointer">
            <div className="label">
              <span className="label-text text-purple-700">Deadline</span>
            </div>
            <input
              type="date"
              name="deadline"
              placeholder="Deadline"
              className="input input-bordered w-full max-w-xs border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 cursor-pointer"
              required
            />
          </label>
        </div>

        {/* Last Column: User Email and User Name */}
        <div>
          <label className="form-control w-full max-w-xs mb-4">
            <div className="label">
              <span className="label-text text-purple-700">User Email</span>
            </div>
            <input
              type="email"
              name="userEmail"
              value={users?.email}
              className="input input-bordered w-full max-w-xs border-2 border-gray-300 focus:ring-2 focus:ring-purple-500"
              required
            />
          </label>
          <label className="form-control w-full max-w-xs mb-4">
            <div className="label">
              <span className="label-text text-purple-700">User Name</span>
            </div>
            <input
              type="text"
              name="userName"
              value={users?.displayName}
              className="input input-bordered w-full max-w-xs border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 read-only"
              required
            />
          </label>
        </div>
      </div>
      
      <input
        type="submit"
        value="Add Campaign"
        className="btn w-full bg-[#8940d0] text-white font-semibold mt-6 py-3 rounded-lg hover:bg-[#7025a5] transition-all"
      />
    </form>
  </div>
  )
}

export default AddNewCamp
