import React from 'react';
import { Link } from 'react-router-dom';

const Advertisement = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <section className="py-16 bg-gradient-to-r from-indigo-700 to-purple-600 text-white text-center">
  <h2 className="text-3xl font-bold mb-6">Support Your Favorite Campaigns</h2>
  <p className="text-lg mb-8">Discover campaigns that inspire you, and help make a difference with your contribution.</p>
  <div className="flex justify-center gap-6">
    <div className="bg-white text-black p-6 rounded-lg shadow-lg w-80">
      <h3 className="text-xl font-semibold mb-4">Running Campaign  </h3>
      <p className="text-gray-700 mb-4">This campaign is aimed at helping children get education in underprivileged areas.</p>
      <Link to="/allCamp" className="inline-block bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition">Support Now</Link>
    </div>
    <div className="bg-white text-black p-6 rounded-lg shadow-lg w-80">
      <h3 className="text-xl font-semibold mb-4">Popular Campaign </h3>
      <p className="text-gray-700 mb-4">Join hands with others to fund health programs and medical supplies for the needy.</p>
      <Link to="/allCamp" className="inline-block bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition">Support Now</Link>
    </div>
  </div>
</section>

        </div>
    );
};

export default Advertisement;