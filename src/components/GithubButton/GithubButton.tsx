require('./GithubButton.scss')

interface Props {
  svgIcon?: JSX.Element;
  text: string;
}

const GithubButton: React.FC<Props> = ({svgIcon, text}: Props) => {

    return (
      <div className="github-button">
          {svgIcon && svgIcon}

          <span className="text">{text}</span> 
      </div>
    )
}

export default GithubButton;