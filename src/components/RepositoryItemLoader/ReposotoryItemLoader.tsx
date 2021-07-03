
require('./RepositoryItemLoader.scss')



const RepositoryItemLoader: React.FC = () => {
  return (
      <div className="repo">
      <div className="container">
      <div className="title-wrap">

      </div>
          <div className="repo-content">
            <div className="top-flex">
              <div className="repo-header">
                  <div className="repo-line heading repo-icon" style={{width: '20px'}}></div>
                  <div className="repo-line heading" style={{width: '40%'}}></div>
              </div>

              <div className="top-right">
                <div className="repo-line heading star-btn" style={{width: '50px'}}></div>
              </div>
            </div>
            <div className="repo-text">
                <div className="repo-line" style={{width: '50%'}}></div>
                <div className="repo-line" style={{width: '40%'}}></div>
                <div className="repo-line" style={{width: '30%'}}></div>
            </div>
          
            <div className="bottom-section">
                <div className="details-section">
                    <div className="repo-line heading bottom-icon" style={{width: '50px'}}></div>
                    <div className="repo-line heading bottom-icon" style={{width: '50px'}}></div>
                    <div className="repo-line heading bottom-icon" style={{width: '50px'}}></div>

                  <div className="author-list">
                    <div className="repo-button rounded"></div>
                    <div className="repo-button rounded"></div>
                    <div className="repo-button rounded"></div>
                    <div className="repo-button rounded"></div>
                </div>
            </div>
              

              <div className="repo-line today-stars" style={{width: '15%'}}></div>
            </div>
          </div> 
      </div>
    </div>
  )
}

export default RepositoryItemLoader;