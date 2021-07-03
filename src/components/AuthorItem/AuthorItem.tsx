import {useState} from "react"
import UserTooltip from "../UserTooltip/UserTooltip"
import AvatarView from "../AvatarView/AvatarView"
import { Author } from "../../utilities/interfaces"

require('./AuthorItem.scss');

interface Props {
  author: Author;
}

const AuthorItem: React.FC<Props> = ({author}: Props) => {
  const [showDetails, setShowDetails] = useState<boolean>(false)
  return (
    <div className="avatar-wrap" onMouseOver={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
     <AvatarView 
     image={author.avatar ? author.avatar : ""}
     size={24}
     />
    <UserTooltip user={author} show={showDetails}/>
    </div>
  )
}

export default AuthorItem;