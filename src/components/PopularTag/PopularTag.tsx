import FireSVG from "../svgs/Fire"

require('./PopularTag.scss') 

const PopularTag: React.FC = () => {
  return (
    <div className="tag-wrap">
          <FireSVG />
          <h4 className="pop-text">POPULAR REPO</h4>
    </div>
  )
}
 
export default PopularTag;