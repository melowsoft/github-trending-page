import AvatarView from "../AvatarView/AvatarView"
import Loc from "../../assets/images/placeholder.svg"

require('./UserTooltip.scss')

interface Props {
  show: boolean;
}

const UserTooltip: React.FC<Props> = ({show}: Props) => {
  if (!show) return null;
  return (
    <div className="user-tooltip">
        <div className="header">Online store 2.0</div>
        <div className="tooltip-body">
        <AvatarView 
          image="http://i.stack.imgur.com/Dj7eP.jpg"
          size={70}
          />

          <div className="author-details">
              <div className="author-fullname">
                <div className="firstname">Author</div>
                 <div className="lastname">Name</div>
              </div>
              <div className="location">
                <img src={Loc} className="location-icon" alt="location"/>
                <p>Lagos, Nigeria</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default UserTooltip;