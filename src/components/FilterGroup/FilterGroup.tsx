
require('./FilterGroup.scss')

interface Props {
  activeFilter: string;
  setActiveFilter(name: string): any;
}

const FilterGroup: React.FC<Props> = ({activeFilter, setActiveFilter}: Props) => {

    return (
      <div className="filter-group-wrap">
          <div className="trend-filter">
            <div onClick={() => setActiveFilter('repo')} className={`filter-item ${activeFilter === 'repo' ? 'selected' : '' }`}>Repositories</div>
            <div onClick={() => setActiveFilter('dev')} className={`filter-item ${activeFilter === 'dev' ? 'selected' : '' }`}>Developers</div>
          </div>

          <div className="dropdown-group">
            {activeFilter === 'repo' 
            && (<div className="single-dropdown"> <span className="select-menu-button">Spoken language: Any</span></div>)}
            <div className="single-dropdown"> <span>Language : Any</span></div>
            <div className="single-dropdown"> <span>Date range: Today</span></div>
          </div>
      </div>
    )
}

export default FilterGroup;