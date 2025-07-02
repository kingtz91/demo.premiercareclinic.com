import React from 'react';
export default function ServicesSection() {
  return (
    <section className="p-10 bg-white">
      <h3 className="text-2xl font-semibold text-center mb-6">Our Services</h3>
      <div className="flex justify-center gap-6 flex-wrap">
        <div className="bg-gray-100 p-6 rounded shadow w-60 text-center">👨‍⚕️ 24/7 Doctor Consultation</div>
        <div className="bg-gray-100 p-6 rounded shadow w-60 text-center">💊 Online Pharmacy</div>
        <div className="bg-gray-100 p-6 rounded shadow w-60 text-center">🧪 At-Home Lab Testing</div>
      </div>
    </section>
  );
}