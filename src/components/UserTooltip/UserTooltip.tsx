require('./UserTooltip.scss')

interface Props {
  show: boolean;
}

const UserTooltip: React.FC<Props> = ({show}: Props) => {
  if (!show) return null;
  return (
    <div className="user-tooltip">
        <div className="header">Online store 2.0</div>
    </div>
  )
}

export default UserTooltip;