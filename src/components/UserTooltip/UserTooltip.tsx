import AvatarView from "../AvatarView/AvatarView"
import Loc from "../../assets/images/placeholder.svg"
import { Author } from "../../utilities/interfaces"

require('./UserTooltip.scss')

interface Props {
  show: boolean;
  user: Author;
}

const UserTooltip: React.FC<Props> = ({show, user}: Props) => {
  if (!show) return null;
  return (
    <div className="user-tooltip">
        <div className="tooltip-body">
        <AvatarView 
          image={user ? user.avatar : ""}
          size={70}
          />

          <div className="author-details">
              <div className="author-fullname">
                <div className="firstname"></div>
                 <div className="lastname">{user.username ? user.username : ""}</div>
              </div>
              <div className="location">
                <img src={Loc} className="location-icon" alt="location"/>
                <p></p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default UserTooltip;