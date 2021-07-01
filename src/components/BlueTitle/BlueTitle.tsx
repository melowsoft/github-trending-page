require('./BlueTitle.scss')

interface Props {
    title: string;
    size: number;
}

const BlueTitle: React.FC<Props> = ({title, size}: Props) => {
    return (
      <h3 className="repo-title" style={{fontSize: `${size}px`}}>{title}</h3>
    )
}

export default BlueTitle