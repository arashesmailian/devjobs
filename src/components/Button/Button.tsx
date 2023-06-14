import {MainButton} from './Button.styled'

interface Props {
  typeOfBtn?: 'submit' | 'button' | 'reset'
  primary?: boolean
  autoWidth?: boolean
  marginTop?: boolean
  hideOnMobile?: boolean
  noBackground?: boolean
  showOnlyOnMobile?: boolean
  clickHandler?: any
}

const Button: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  typeOfBtn,
  primary,
  autoWidth,
  marginTop,
  hideOnMobile,
  showOnlyOnMobile,
  noBackground,
  clickHandler,
}) => {
  return (
    <MainButton
      type={typeOfBtn}
      primary={primary}
      autoWidth={autoWidth}
      marginTop={marginTop}
      hideOnMobile={hideOnMobile}
      showOnlyOnMobile={showOnlyOnMobile}
      noBackground={noBackground}
      onClick={clickHandler}
    >
      {children}
    </MainButton>
  )
}

export default Button
