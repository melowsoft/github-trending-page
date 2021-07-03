require('./LanguageColor.scss')

interface Props {
  color: string;
}

const LanguageColor: React.FC<Props> = ({color}: Props) => {
  return (
        <div className="language-color" style={{background: `${color}`}}>
        </div>
        )
  } 

export default LanguageColor;