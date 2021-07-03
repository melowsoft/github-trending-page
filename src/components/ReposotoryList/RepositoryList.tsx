import RepositoryItem from "../RepositoryItem/ReposotoryItem";
import { useQuery } from "react-query"
import axios from "axios"

const getRepositories = async () => {
  try {
      return await axios.get("/repositories")
  } catch (err) {
      throw new Error(err);
  }
}

const RepositoryList: React.FC = () => {
    const {data, isLoading, error} = useQuery('repos', getRepositories) 
  
   if (isLoading){
     return <p>Loading...</p>
   }
   
   if (error){
     return <p>Error...something went wrong</p>
   }

   if (data) {
     console.log(data, "for checks")
   }
  
  return (
    <>
      {
        data && data.data.map((repo: any) => (
          <RepositoryItem repo={repo} key={repo.rank}/>
        ))
      }
    </>
  )
}

export default RepositoryList;