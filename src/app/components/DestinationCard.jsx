import { Button } from "@heroui/react";
import { LuMapPin } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";
import { Calendar } from '@gravity-ui/icons';
import Image from "next/image";
import Link from "next/link";
const DestinationCard = ({ destination }) => {
  const { _id, imageUrl, price, destinationName, duration, country } = destination;

  return (
    <div className="border flex flex-col rounded-lg overflow-hidden shadow-md min-h-full">
      <div className="flex items-center justify-center object-contain h-64 w-full relative">
        <Image
          className="w-full h-full object-cover"
          alt={destinationName}
          src={imageUrl}
          height={200}
          width={400}
        />
      </div>
      <div className="p-2">
        <div className="flex items-center gap-1">
          <LuMapPin /> <span>{country}</span>
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <h2 className="text-xl font-bold">{destinationName}</h2>
            </div>
            <div className="flex gap-1 items-center">
              <Calendar /> {duration}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold">$ {price}</h3>
          </div>
        </div>
        <Link href={`/destinations/${_id}`}><Button variant="ghost" className={'mt-1 text-cyan-500'}> <FiExternalLink /> Book Now</Button></Link>
      </div>
    </div>
  );
};

export default DestinationCard;