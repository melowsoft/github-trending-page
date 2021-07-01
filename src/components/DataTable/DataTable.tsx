import { useState } from "react" 
import FilterGroup from "../FilterGroup/FilterGroup";
import TableData from "../TableData/TableData"

require('./DataTable.scss')


const DataTable: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("repo")
    return (
      <div className="data-table-wrap">
        <FilterGroup 
        activeFilter={activeFilter} 
        setActiveFilter={setActiveFilter}/>
        <TableData results={activeFilter}/>
      </div>
    )
}

export default DataTable;