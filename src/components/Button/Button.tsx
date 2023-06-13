import {MainButton} from './Button.styled'

interface Props {
  primary?: boolean
  autoWidth?: boolean
  marginTop?: boolean
  isSearch?: boolean
  clickHandler?:  any
}

const Button: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  primary,
  autoWidth,
  marginTop,
  isSearch,
  clickHandler,
}) => {
  return (
    <MainButton
      primary={primary}
      autoWidth={autoWidth}
      marginTop={marginTop}
      isSearch={isSearch}
      onClick={clickHandler}
    >
      {children}
    </MainButton>
  )
}

export default Button
