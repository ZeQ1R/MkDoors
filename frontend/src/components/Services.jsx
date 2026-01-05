import React from 'react';
import { Card, CardContent } from './ui/card';
import { services } from '../data/mock';
import { DoorOpen, Wrench, Settings, ClipboardCheck } from 'lucide-react';

const iconMap = {
  DoorOpen: DoorOpen,
  Wrench: Wrench,
  Settings: Settings,
  ClipboardCheck: ClipboardCheck,
};

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-slate-600 text-lg">
            Comprehensive garage door solutions tailored to your needs.
            Quality workmanship guaranteed on every job.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="group bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    {IconComponent && (
                      <IconComponent
                        className="text-blue-600 group-hover:text-white transition-colors duration-300"
                        size={28}
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Line */}
                  <div className="h-1 w-0 bg-blue-600 mt-6 group-hover:w-full transition-all duration-300" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
