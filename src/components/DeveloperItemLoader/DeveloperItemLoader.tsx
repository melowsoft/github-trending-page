
require('./DeveloperItemLoader.scss')



const DeveloperItemLoader: React.FC = () => {
  return (
      <div className="tweet">
   <div className="skeleton">
      <div>
         <div className="skeleton-avatar"></div>
         <div className="tweet-content">
            <div className="tweet-header">
               <div className="skeleton-line heading" style={{width: '100%'}}></div>
            </div>
            <div className="tweet-text">
               <div className="skeleton-line" style={{width: '35%'}}></div>
            </div>
         </div> 
      </div>

      <div className="tweet-content">
            <div className="tweet-header">
               <div className="skeleton-line heading" style={{width: '60%'}}></div>
            </div>
            <div className="tweet-text">
               <div className="skeleton-line" style={{width: '90%'}}></div>
               <div className="skeleton-line" style={{width: '100%'}}></div>
               <div className="skeleton-line" style={{width: '35%'}}></div>
            </div>
       </div> 
      <div className="tweet-content">
            <div className="right-btn">
               <div className="skeleton-line heading" style={{width: '25%'}}></div>
               <div className="skeleton-line heading" style={{width: '25%', marginLeft: 10}}></div>
            </div>
            
       </div> 
   </div>
</div>
  )
}

export default DeveloperItemLoader;