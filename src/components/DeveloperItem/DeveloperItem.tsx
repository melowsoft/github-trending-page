import OcticonSVG from "../svgs/Octicon";
import StarSVG from "../svgs/Star";
import ForkSVG from "../svgs/Fork";
import LikeSVG from "../svgs/Like";
import AuthorList from "../AuthorList/AuthorList"
import GithubButton from "../GithubButton/GithubButton"
import AvatarView from "../AvatarView/AvatarView";
import BlueTitle from "../BlueTitle/BlueTitle"
import PopularTag from "../PopularTag/PopularTag"
import RepoName from "../RepoName/RepoName"

require('./DeveloperItem.scss')

const DeveloperItem: React.FC = () => {
  return (
    <div className="single-dev">
      <div className="numbering">1</div>
      <div className="avatar-wrap">
        <AvatarView 
          image="http://i.stack.imgur.com/Dj7eP.jpg"
          size={48}
         />
      </div>
      <div className="name-section">
          <BlueTitle size={20} title="Brandon"/>
          <h4 className="dev-lastname">
            Williams
          </h4>
      </div>

      <div className="repo-data-section">
          <PopularTag />
          <RepoName repoName="Sub repository name"/>
          <p className="repo-description">
          Monitor for any changes in your node.js application and automatically restart the server - perfect for development
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