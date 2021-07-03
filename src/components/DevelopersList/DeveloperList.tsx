import DeveloperItem from "../DeveloperItem/DeveloperItem";
import { useQuery, UseQueryResult } from "react-query"
import {getDevelopers} from "../../api"
import {Developer} from "../../utilities/interfaces"
import DeveloperItemLoader from "../DeveloperItemLoader/DeveloperItemLoader";

const DevelopersList: React.FC = () => {
  const {data, isLoading, error}: UseQueryResult<Developer[], Error> = useQuery<Developer[], Error>('devs', getDevelopers, {staleTime: 5 * 1000}) 

  if (isLoading){
    return (
      <>
          <DeveloperItemLoader />
          <DeveloperItemLoader />
          <DeveloperItemLoader />
          <DeveloperItemLoader />
      </>
    )
  }
  
  if (error){
    return <p>Error...something went wrong</p>
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