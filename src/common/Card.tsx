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
  breedImage: string;
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
        width={48}
        height={48}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{breedName}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  );
};

export default Card;
