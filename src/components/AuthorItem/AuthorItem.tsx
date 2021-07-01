import {useState} from "react"
import UserTooltip from "../UserTooltip/UserTooltip"

require('./AuthorItem.scss');

const AuthorItem: React.FC = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false)
  return (
    <div className="avatar-wrap">
     <div className="avatar" onMouseOver={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
      </div>
    <UserTooltip show={showDetails}/>
    </div>
  )
}

export default AuthorItem;