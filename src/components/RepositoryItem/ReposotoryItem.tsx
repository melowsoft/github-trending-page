import OcticonSVG from "../svgs/Octicon";
import StarSVG from "../svgs/Star";
import ForkSVG from "../svgs/Fork";
import AuthorList from "../AuthorList/AuthorList"

require('./RepositoryItem.scss')

const RepositoryItem: React.FC = () => {
  return (
    <div className="single-repo">
      <div className="title-wrap">
        <div className="title-flex">
            <OcticonSVG />
          <h3 className="repo-title">GTAmodding / re3</h3>
        </div>
        
        <div className="repo-star"><StarSVG /> <span className="star-text">Star</span></div>
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
                <span>Built by</span>
              
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