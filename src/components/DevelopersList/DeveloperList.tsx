import DeveloperItem from "../DeveloperItem/DeveloperItem";
import { useQuery, UseQueryResult } from "react-query"
import {getDevelopers} from "../../api"
import {Developer} from "../../utilities/interfaces"

const DevelopersList: React.FC = () => {
  const {data, isLoading, error}: UseQueryResult<Developer[], Error> = useQuery<Developer[], Error>('devs', getDevelopers, {staleTime: 5 * 1000}) 

  if (isLoading){
    return <p>Loading...</p>
  }
  
  if (error){
    return <p>Error...something went wrong</p>
  }

  if(data){
    console.log(data, "needed")
  }

  return (
    <>
      {
        data && data.map((dev: Developer) => (
          <DeveloperItem dev={dev} key={dev.rank}/>
        ))
      }
   </>
  )
}

export default DevelopersList;