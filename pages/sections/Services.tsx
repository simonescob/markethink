import React from "react";

function Services() {
  const servicesList = [
    {
      title: 'Content Strategy',
      icon: '/square-service.svg',
      text: 'All our content marketing service packages include a custom content strategy'
    },
    {
      title: 'Content Development',
      icon: '/develop-service.svg',
      text: 'We create some content calendar for your company’s must-share content'
    },
    {
      title: 'Content Creation',
      icon: '/circle-service.svg',
      text: 'Experienced in copywriting and marketing team begins creating content'
    },
    {
      title: 'Content Optimization',
      icon: '/optimization-service.svg',
      text: 'Your content marketing management services also include SEO'
    },
  ]
  return (
    <section id="services" className="flex justify-center">
      <div className="max-w-6xl flex flex-col my-14">
        <div className="flex">
          <div className="w-1/2 space-y-8">
            <h2 className="font-semibold text-4xl text-[#253D32]">We’re Strategic Digital <br /> Marketing Agency</h2>
            <p className="text-gray-500 text-xl w-[65%]">We’ve created a full-stack structure for our working workflow processe, were from the funny the century initial all made, have spare to negatives </p>
            <button className="text-green-primary font-medium underline text-xl">See more</button>
          </div>
          <div className="w-1/2 flex flex-wrap">
            {servicesList.map(service => 
              <div className="w-[50%] space-y-6 mb-16">
                <img src={service.icon} alt="" />
                <div className="font-medium text-xl text-gray-700">{service.title}</div>
                <div className="w-[80%] text-gray-500">{service.text}</div>
              </div>
            )}
          </div>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
}

export default Services;