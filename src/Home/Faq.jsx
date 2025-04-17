import React from 'react';

const Faq = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <section className="py-20 bg-white text-center">
  <h2 className="text-3xl font-bold text-purple-700 mb-8">Frequently Asked Questions</h2>
  <div className="max-w-3xl mx-auto">
    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title font-semibold">How can I create a campaign?</div>
      <div className="collapse-content text-sm">To create a campaign, sign up and click on 'Create a Campaign'. Fill in the required details such as your goal, story, and campaign duration.</div>
    </div>
    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title font-semibold">How do I donate to a campaign?</div>
      <div className="collapse-content text-sm">You can donate directly on the campaign page by choosing a donation amount and clicking 'Donate'. We offer multiple payment methods for your convenience.</div>
    </div>
    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title font-semibold">Is my donation secure?</div>
      <div className="collapse-content text-sm">Yes, we use industry-standard encryption and secure payment methods to ensure your donation is processed safely and securely.</div>
    </div>
    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title font-semibold">How do I track my campaign progress?</div>
      <div className="collapse-content text-sm">You can track your campaign’s progress in your dashboard. You’ll see how much you’ve raised and which supporters have donated.</div>
    </div>
    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title font-semibold">Can I share my campaign on social media?</div>
      <div className="collapse-content text-sm">Absolutely! After creating your campaign, we provide easy-to-use sharing options so you can spread the word on your social media channels.</div>
    </div>
  </div>
</section>


        </div>
    );
};

export default Faq;