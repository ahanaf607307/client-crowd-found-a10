import React from 'react';

const HowItworks = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <section className="py-20 bg-gray-100 text-center">
  <h2 className="text-3xl font-bold text-purple-700 mb-8">How It Works</h2>
  <div className="flex flex-wrap justify-center gap-12 max-w-5xl mx-auto">
    <div className="w-full sm:w-1/3 bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-purple-700 mb-4">Create a Campaign</h3>
      <p className="text-gray-600">Start by creating a campaign, set your funding goal, and tell your story to engage supporters.</p>
    </div>
    <div className="w-full sm:w-1/3 bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-purple-700 mb-4">Share Your Campaign</h3>
      <p className="text-gray-600">Share your campaign with friends, family, and on social media to get noticed and start receiving donations.</p>
    </div>
    <div className="w-full sm:w-1/3 bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-purple-700 mb-4">Receive Support</h3>
      <p className="text-gray-600">Once funded, the donations will help you achieve your goals. Keep your supporters updated with progress!</p>
    </div>
  </div>
</section>

        </div>
    );
};

export default HowItworks;