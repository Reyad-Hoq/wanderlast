import React from 'react';
import DestinationCard from '../components/DestinationCard';

const DestinationsPage = async () => {
  const res = await fetch('http://localhost:8000/destinations');
  const destinations = await res.json();
  console.log('Fetched Destinations:', destinations);
  return (
    <div className="container mx-auto p-4">
      <h1>All Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;