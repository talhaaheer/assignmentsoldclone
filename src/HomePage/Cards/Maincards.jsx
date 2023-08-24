import Cards from './Cards'
function ncard(val, index) {
    console.log("I am running")
    return (
      <Cards
        key={index}
        Name={val.name}
        price={val.price}
        city={val.city}
      />
    );
  }
export default function Maincards() {
  return (
    <div>
      {Carddata.map(ncard)}
    </div>
  )
}
const Carddata = [
    {
        id: 1,
        name : "Toll Brothers",
        price : "$650,000",
        city : "Toronto"

    },
    {
        id: 2,
        name : "Toll Brothers",
        price : "$650,000",
        city : "Toronto"

    },
    {
        id: 3,
        name : "Toll Brothers",
        price : "$650,000",
        city : "Toronto"

    },
    {
        id: 4,
        name : "Toll Brothers",
        price : "$650,000",
        city : "Toronto"

    },
    {
        id: 5,
        name : "Toll Brothers",
        price : "$650,000",
        city : "Toronto"

    },
    {
        id: 6,
        name : "Toll Brothers",
        price : "$650,000",
        city : "Toronto"

    },
    {
        id: 7,
        name : "Toll Brothers",
        price : "$650,000",
        city : "Toronto"

    },
    {
        id: 8,
        name : "Toll Brothers",
        price : "$650,000",
        city : "Toronto"

    },
   
];