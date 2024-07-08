import { useCountriesQuery } from "@/types/graphql";
import Link from "next/link";

export default function Countries() {

  const {data, loading} = useCountriesQuery({
    fetchPolicy: "no-cache"
  })

  console.log(data)

  if(loading){
    return <div>Chargement en cours</div>;
  }

    return (
      <>
      <h1 className="text-blue-600">Countries !</h1>
      <h2>List:</h2>
      <ul className="flex flex-row flex-wrap gap-4">
      {data?.countries?.map((c)=>
        <li className="px-6 py-2 border border-gray-500 rounded-xl">
          <Link href={`/countries/${c.code}`}>{c.name}</Link>
        </li>)
      }
      </ul>
      </>
      
    ) 
  }