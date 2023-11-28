import React from "react";
import Image from "next/image";

async function getData(breedName: string) {
  const res = await fetch(`https://dog.ceo/api/breed/${breedName}/images`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export interface Props {
  breedName: string;
}

const Card: React.FC<Props> = async ({ breedName }) => {
  const data = await getData(breedName);

  const breedImage: string = data.message[0];
  console.log(data.message[0]);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        className=""
        src={breedImage}
        alt="Sunset in the mountains"
        width={100}
        height={100}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{breedName}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
    </div>
  );
};

export default Card;
