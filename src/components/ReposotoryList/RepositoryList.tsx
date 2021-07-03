import RepositoryItem from "../RepositoryItem/ReposotoryItem";
import RepositoryItemLoader from "../RepositoryItemLoader/ReposotoryItemLoader";
import { useQuery, UseQueryResult } from "react-query"
import {Repository} from "../../utilities/interfaces"
import {getRepositories} from "../../api"


const RepositoryList: React.FC = () => {
    const {data, isLoading, error}: UseQueryResult<Repository[], Error> = useQuery<Repository[], Error>('repos', getRepositories, {staleTime: 5 * 1000}) 
     
   if (isLoading){
     return (
        <>
          <RepositoryItemLoader />
          <RepositoryItemLoader />
          <RepositoryItemLoader />
        </>
      )
   }
   
   if (error){
     return <p>Error...something went wrong</p>
   }

  
  return (
    <>
      {
        data && data.map((repo: Repository) => (
          <RepositoryItem repo={repo} key={repo.rank}/>
        ))
      }
    </>
  )
}

export default RepositoryList;