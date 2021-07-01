require('./AvatarView.scss')

interface Props {
  image: string;
  size: number;
}

const AvatarView: React.FC<Props> = ({image, size}: Props) => {
  return (
      <div className="avatar" style={{backgroundImage: `url(${image})`, width: `${size}px`, height: `${size}px`}}>
      </div>
  )
}

export default AvatarView;