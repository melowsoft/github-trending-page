require('./BodyWrapper.scss')

interface Props {
  children: JSX.Element
}

const BodyWrapper: React.FC<Props> = ({children}: Props) => {
    return (
      <div className="body-wrapper">
          {children}
      </div>
    )
}

export default BodyWrapper;