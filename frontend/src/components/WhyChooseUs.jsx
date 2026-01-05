import React from 'react';
import { benefits } from '../data/mock';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mt-3 mb-6">
              Your Trusted Partner for{' '}
              <span className="text-blue-600">Garage Door</span> Solutions
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              With years of experience and hundreds of satisfied customers,
              we deliver exceptional garage door services that you can rely on.
              Our commitment to quality and customer satisfaction sets us apart.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.id}
                  className="group flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <CheckCircle2 className="text-blue-600 group-hover:text-white transition-colors" size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1696339691287-23b60fa70f8d?w=800&h=600&fit=crop"
                alt="Professional garage door installation"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">15+</p>
                    <p className="text-slate-600 text-sm">Years Experience</p>
                  </div>
                  <div className="h-12 w-px bg-slate-200" />
                  <div>
                    <p className="text-3xl font-bold text-blue-600">500+</p>
                    <p className="text-slate-600 text-sm">Happy Customers</p>
                  </div>
                  <div className="h-12 w-px bg-slate-200" />
                  <div>
                    <p className="text-3xl font-bold text-blue-600">100%</p>
                    <p className="text-slate-600 text-sm">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-50 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
