import DevelopersList from "../DevelopersList/DeveloperList";
import RepositoryList from "../ReposotoryList/RepositoryList"

require('./TableData.scss')

interface Props {
  results: string;
}

const TableData: React.FC<Props> = ({results}: Props) => {
    return (
      <div className="data-list-wrap">
        {
          results === 'repo' 
          && <RepositoryList />
        }
        {
          results === 'dev' 
          && <DevelopersList />
        }
      </div>
    )
}

export default TableData;