import {MainButton} from './Button.styled'

interface Props {
  primary?: boolean
  autoWidth?: boolean
  marginTop?: boolean
  isSearch?: boolean
}

const Button: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  primary,
  autoWidth,
  marginTop,
  isSearch,
}) => {
  return (
    <MainButton
      primary={primary}
      autoWidth={autoWidth}
      marginTop={marginTop}
      isSearch={isSearch}
    >
      {children}
    </MainButton>
  )
}

export default Button
