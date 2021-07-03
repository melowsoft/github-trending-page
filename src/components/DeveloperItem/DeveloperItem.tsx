import LikeSVG from "../svgs/Like";
import GithubButton from "../GithubButton/GithubButton"
import AvatarView from "../AvatarView/AvatarView";
import BlueTitle from "../BlueTitle/BlueTitle"
import PopularTag from "../PopularTag/PopularTag"
import RepoName from "../RepoName/RepoName"
import {Developer} from "../../utilities/interfaces"

require('./DeveloperItem.scss')

interface Props {
  dev: Developer;
}

const DeveloperItem: React.FC<Props> = ({dev}: Props) => {
  return (
    <div className="single-dev">
      <div className="numbering">{dev.rank}</div>
      <div className="avatar-wrap">
        <AvatarView 
          image={dev.avatar ? dev.avatar : ""}
          size={48}
         />
      </div>
      <div className="name-section">
          <BlueTitle size={20} title={dev.name ? dev.name : ""}/>
          <h4 className="dev-lastname">
            {dev.username ? dev.username : ""}
          </h4>
      </div>

      <div className="repo-data-section">
          <PopularTag />
          {
            dev.popularRepository.repositoryName && ( <RepoName repoName={dev.popularRepository.repositoryName ? dev.popularRepository.repositoryName : ""}/>)
          }
         
          <p className="repo-description">
          {dev.popularRepository.description ? dev.popularRepository.description : ""}
          </p>
      </div>

      <div className="buttons-section">
         <GithubButton svgIcon={<LikeSVG />} text="Sponsor"/>
          <GithubButton text="Follow"/>
         
      </div>
   
    </div>
  )
}

export default DeveloperItem;