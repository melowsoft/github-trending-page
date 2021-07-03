import OcticonSVG from "../svgs/Octicon";
import StarSVG from "../svgs/Star";
import ForkSVG from "../svgs/Fork";
import AuthorList from "../AuthorList/AuthorList"
import GithubButton from "../GithubButton/GithubButton"
import BlueTitle from "../BlueTitle/BlueTitle"
import LanguageColor from "../LanguageColor/LanguageColor"
import { Repository } from "../../utilities/interfaces"

require('./RepositoryItem.scss')


interface Props {
  repo: Repository;
}

const RepositoryItem: React.FC<Props> = ({repo}: Props) => {
  return (
    <div className="single-repo">
      <div className="title-wrap">
        <div className="title-flex">
            <OcticonSVG />
          <BlueTitle size={20} title={repo.repositoryName ? repo.repositoryName : ""}/>
        </div>
        
        <div className="right-side">
          <GithubButton svgIcon={<StarSVG />} text="Star"/>
        </div>
      </div>
      <p className="description">
          {repo.description ? repo.description : ""}
      </p>

      <div className="stacks-section">
          <div className="left-section">
            {
              repo.language 
              &&  (<div className="language section-item">
              <LanguageColor color={repo.languageColor ? repo.languageColor : "grey"} />
              <div className="language-name">{repo.language ? repo.language : ""}</div>
              </div>)
            }
           
            {
              repo.totalStars 
              &&  (<div className="stars section-item">
                  <StarSVG />

                  <span className="star-figure">{repo.totalStars ? repo.totalStars : 0}</span> 
                  </div>)
            }

            <div className="fork section-item">
              <ForkSVG />

              <span className="fork-figure">{repo.forks ? repo.forks : 0}</span> 
            </div>
            <div className="built section-item">
                <span className="built-by">Built by</span>
              
              <AuthorList authors={repo.builtBy}/>
            </div>
          </div>

          <div className="right-section">
          <div className="stars-today section-item">
              <StarSVG />

              <span className="star-figure">{repo.starsSince ? repo.starsSince : 0} stars today</span> 
            </div>
          </div>
      </div>
    </div>
  )
}

export default RepositoryItem;