import AuthorItem from "../AuthorItem/AuthorItem"
import { Author } from "../../utilities/interfaces"

interface Props {
  authors: Author[];
}

const AuthorList: React.FC<Props> = ({authors}: Props) => {
  return (
    <>
       {
         authors && authors.map((author: Author, index: number) => (
          <AuthorItem author={author} key={index}/>
         ))
       }
    </>
  )
}

export default AuthorList;