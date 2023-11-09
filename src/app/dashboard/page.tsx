import CardList from '@/common/CardList'
import Image from 'next/image'


async function getData() {
  const res = await fetch('https://dog.ceo/api/breeds/list/all')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data = await getData()

  const test = Object.keys(data.message)
console.log(test);

 
  return (
   <div><CardList/></div>
  )
}
