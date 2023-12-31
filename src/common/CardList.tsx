import React from "react";
import Card from "./Card";

async function getData() {
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const CardList = async () => {
  const data = await getData();

  const breedList = Object.keys(data.message);

  return <div className="d-flex flex-row bg-black justify-between">
   { breedList.map((breedName) => (
    <Card breedName={breedName} key={breedName}/>
  ))}
  </div> 
};

export default CardList;
