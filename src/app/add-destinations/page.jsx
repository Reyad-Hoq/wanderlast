import React from 'react';
import AddDestination from '../components/AddDestination';

const AddDestinationPage = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Add New Destination</h2>
      <AddDestination />
    </div>
  );
};

export default AddDestinationPage;