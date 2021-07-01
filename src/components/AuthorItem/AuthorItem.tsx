import {useState} from "react"
import UserTooltip from "../UserTooltip/UserTooltip"
import AvatarView from "../AvatarView/AvatarView"

require('./AuthorItem.scss');

const AuthorItem: React.FC = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false)
  return (
    <div className="avatar-wrap" onMouseOver={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
     <AvatarView 
     image="http://i.stack.imgur.com/Dj7eP.jpg"
     size={24}
     />
    <UserTooltip show={showDetails}/>
    </div>
  )
}

export default AuthorItem;