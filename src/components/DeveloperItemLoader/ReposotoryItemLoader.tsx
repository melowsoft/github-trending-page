import OcticonSVG from "../svgs/Octicon";
import StarSVG from "../svgs/Star";
import ForkSVG from "../svgs/Fork";
import AuthorList from "../AuthorList/AuthorList"
import GithubButton from "../GithubButton/GithubButton"
import BlueTitle from "../BlueTitle/BlueTitle"
import LanguageColor from "../LanguageColor/LanguageColor"
import { Repository } from "../../utilities/interfaces"

require('./RepositoryItemLoader.scss')



const RepositoryItemLoader: React.FC = () => {
  return (
      <div className="tweet">
   <div className="skeleton">
      <div className="skeleton-avatar"></div>
      <div className="tweet-content">
         <div className="tweet-header">
            <div className="skeleton-line heading" style={{width: '60%'}}></div>
         </div>
         <div className="tweet-text">
            <div className="skeleton-line" style={{width: '90%'}}></div>
            <div className="skeleton-line" style={{width: '100%'}}></div>
            <div className="skeleton-line" style={{width: '35%'}}></div>
         </div>
      
         <div className="tweet-footer">
            <div className="skeleton-button rounded"></div>
            <div className="skeleton-button rounded"></div>
            <div className="skeleton-button rounded"></div>
            <div className="skeleton-button rounded"></div>
         </div>
      </div> 
   </div>
</div>
  )
}

export default RepositoryItemLoader;