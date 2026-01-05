import React from 'react';
import { Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1675747158954-4a32e28812c0?w=700&h=500&fit=crop"
                alt="Garage door service"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-2xl p-6 shadow-xl hidden sm:block">
              <Shield size={40} className="mb-3" />
              <p className="font-bold text-2xl">Licensed & Insured</p>
              <p className="text-blue-100 text-sm">Full coverage for your peace of mind</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
              Your Local Garage Door Experts
            </h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Elite Garage Doors is a trusted local company with years of experience
              providing professional garage door solutions. We focus on quality workmanship,
              safety, and customer satisfaction.
            </p>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Our team of certified technicians is trained to handle all types of garage
              door systems, from traditional to modern smart-enabled doors. We take pride
              in our work and stand behind every job we complete.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                'Licensed & Certified',
                'Fully Insured',
                'Free Estimates',
                '24/7 Emergency Service',
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-slate-200"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
