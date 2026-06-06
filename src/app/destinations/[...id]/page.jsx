import DeleteAlert from '@/app/components/DeleteAlert';
import EditModalForm from '@/app/components/EditModalForm';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiEditAlt, BiLeftArrow } from 'react-icons/bi';
import { LuMapPin } from 'react-icons/lu';

const DestinationDetailPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:8000/destinations/${id}`);
  const destination = await res.json();
  console.log(destination);
  return (
    <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-6">

      <div className="flex items-center justify-between mb-4">
        <Link href="/destinations">
          <Button variant="outline" color="primary" size="md" className="mb-4">
            <BiLeftArrow />Destinations
          </Button>
        </Link>
        <div className="flex items-center gap-2">
          <EditModalForm destination={destination} />
          <DeleteAlert destination={destination} />
        </div>
      </div>
      <div className="flex items-center justify-center object-contain h-96 w-full relative mb-4">
        <Image
          className="w-full h-full object-cover"
          alt={destination.destinationName}
          src={destination.imageUrl}
          height={400}
          width={600}
        />
      </div>
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <LuMapPin /> {destination.destinationName}
      </h1>
      <p className="text-gray-600">{destination.country}</p>
      <p className="text-gray-600">Duration: {destination.duration} days / night</p>
      <p className="text-gray-600">Overview: {destination.description}</p>
      <p className="text-2xl font-bold">${destination.price}</p>
    </div>
  );
};

export default DestinationDetailPage;