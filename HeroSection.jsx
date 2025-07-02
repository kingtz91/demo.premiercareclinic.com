import React from 'react';
export default function HeroSection() {
  return (
    <section className="bg-blue-50 text-center p-10">
      <h2 className="text-3xl font-bold mb-4">Your Health, Our Priority</h2>
      <p className="mb-6">Book appointments, order medicines, and get lab tests at your convenience.</p>
      <div className="space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Book Appointment</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Order Medicine</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Get Lab Test</button>
      </div>
    </section>
  );
}