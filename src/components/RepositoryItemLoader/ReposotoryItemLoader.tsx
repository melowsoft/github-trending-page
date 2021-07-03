
require('./RepositoryItemLoader.scss')



const RepositoryItemLoader: React.FC = () => {
  return (
      <div className="tweet">
      <div className="skeleton">
      <div className="title-wrap">

      </div>
          <div className="tweet-content">
            <div className="top-flex">
              <div className="tweet-header">
                  <div className="skeleton-line heading repo-icon" style={{width: '20px'}}></div>
                  <div className="skeleton-line heading" style={{width: '40%'}}></div>
              </div>

              <div className="top-right">
                <div className="skeleton-line heading star-btn" style={{width: '50px'}}></div>
              </div>
            </div>
            <div className="tweet-text">
                <div className="skeleton-line" style={{width: '50%'}}></div>
                <div className="skeleton-line" style={{width: '40%'}}></div>
                <div className="skeleton-line" style={{width: '30%'}}></div>
            </div>
          
            <div className="bottom-section">
                <div className="details-section">
                    <div className="skeleton-line heading bottom-icon" style={{width: '50px'}}></div>
                    <div className="skeleton-line heading bottom-icon" style={{width: '50px'}}></div>
                    <div className="skeleton-line heading bottom-icon" style={{width: '50px'}}></div>

                  <div className="author-list">
                    <div className="skeleton-button rounded"></div>
                    <div className="skeleton-button rounded"></div>
                    <div className="skeleton-button rounded"></div>
                    <div className="skeleton-button rounded"></div>
                </div>
            </div>
              

              <div className="skeleton-line today-stars" style={{width: '15%'}}></div>
            </div>
          </div> 
      </div>
    </div>
  )
}

export default RepositoryItemLoader;