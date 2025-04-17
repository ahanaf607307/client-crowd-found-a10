import React from "react";

function AboutUs() {
  return (
    <section className="bg-gray-50 py-16 mt-10">
      {/* Section 1: Introduction */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-purple-700">Welcome to Our Crowdfunding Platform</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          We are a community-driven crowdfunding platform that helps turn your ideas into reality. Whether you're raising funds for social impact, innovation, or personal projects, we make the process seamless, transparent, and impactful.
        </p>
      </div>

      {/* Section 2: Our Mission & Vision */}
      <div className="max-w-6xl mx-auto text-center py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-semibold text-purple-700">Our Mission</h3>
            <p className="text-lg text-gray-700 mt-4">
              Our mission is to empower individuals and organizations to fund impactful projects. We make it easier to bring ideas to life through collective contributions, creating a platform that fosters trust and transparency.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-purple-700">Our Vision</h3>
            <p className="text-lg text-gray-700 mt-4">
              We envision a future where every idea, no matter how big or small, has the chance to succeed with the support of a passionate, engaged community. We aim to create a world where individuals have the power to bring positive change through collective action.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Our Values */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-purple-700 mb-8">Our Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-purple-700">Integrity</h4>
              <p className="text-gray-600 mt-2">
                We maintain the highest level of transparency and trust in all our operations. Integrity is at the core of everything we do.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-purple-700">Community</h4>
              <p className="text-gray-600 mt-2">
                We are committed to fostering a supportive and inclusive environment where everyone’s contribution matters.
              </p>
            </div>
            
            <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-purple-700">Empowerment</h4>
              <p className="text-gray-600 mt-2">
                We empower individuals and organizations to turn their dreams into reality by providing them with the tools and resources they need to succeed.
              </p>
            </div>
          </div>
        </div>
      </div>

     

     
    </section>
  );
}

export default AboutUs;
