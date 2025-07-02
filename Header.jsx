import React from 'react';
export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">PremierCare+</h1>
      <nav className="space-x-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Doctors</a>
        <a href="#" className="hover:underline">Pharmacy</a>
        <a href="#" className="hover:underline">Lab Tests</a>
        <a href="#" className="hover:underline">Login</a>
      </nav>
    </header>
  );
}