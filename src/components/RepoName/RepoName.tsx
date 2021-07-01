import BlueTitle from "../BlueTitle/BlueTitle"
import OcticonSVG from "../svgs/Octicon"

require('./RepoName.scss')

interface Props {
  repoName: string;
}

const RepoName: React.FC<Props> = ({repoName}: Props) => {
  return (
      <div className="repo-info-wrap">
        <OcticonSVG />
        <BlueTitle title={repoName} size={15}/>
      </div>
  )
}

export default RepoName;