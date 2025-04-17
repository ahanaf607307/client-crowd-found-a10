import React from 'react';
import { Link } from 'react-router-dom';

const StartCampain = () => {
    return (
        <div className=''>
             
      <div className="bg-purple-700 text-white py-12 text-center">
        <h3 className="text-3xl font-semibold mb-6">Ready to Make an Impact?</h3>
        <p className="text-lg mb-8 max-w-7xl mx-auto">
          Whether you’re looking to support a cause or launch your own campaign, we’re here to help. Join our community today and start making a difference.
        </p>
        <Link
         to='/addNewCamp'
          className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Start a Campaign
        </Link>
      </div>
        </div>
    );
};

export default StartCampain;