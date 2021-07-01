import OcticonSVG from "../svgs/Octicon";
import StarSVG from "../svgs/Star";
import ForkSVG from "../svgs/Fork";
import LikeSVG from "../svgs/Like";
import AuthorList from "../AuthorList/AuthorList"
import GithubButton from "../GithubButton/GithubButton"
import BlueTitle from "../BlueTitle/BlueTitle"

require('./RepositoryItem.scss')

const RepositoryItem: React.FC = () => {
  return (
    <div className="single-repo">
      <div className="title-wrap">
        <div className="title-flex">
            <OcticonSVG />
          <BlueTitle size={20} title="Repository name"/>
        </div>
        
        <div className="right-side">
        <GithubButton svgIcon={<LikeSVG />} text="Sponsor"/>
        <GithubButton svgIcon={<StarSVG />} text="Star"/>
        </div>
      </div>
      <p className="description">
          Cloud-native neural search framework for 𝙖𝙣𝙮 kind of data
      </p>

      <div className="stacks-section">
          <div className="left-section">
            <div className="language section-item">
                JavaScript
            </div>

            <div className="stars section-item">
              <StarSVG />

              <span className="star-figure">3,798</span> 
            </div>
            <div className="fork section-item">
              <ForkSVG />

              <span className="fork-figure">226</span> 
            </div>
            <div className="built section-item">
                <span className="built-by">Built by</span>
              
              <AuthorList />
            </div>
          </div>

          <div className="right-section">
          <div className="stars-today section-item">
              <StarSVG />

              <span className="star-figure">385 stars today</span> 
            </div>
          </div>
      </div>
    </div>
  )
}

export default RepositoryItem;