import {CheckBoxLabelContainer} from './CheckBox.styled'

const CheckBox = ({status, changeCheckBoxHandler, hideOnMobile}) => {
  return (
    <CheckBoxLabelContainer
      htmlFor='filterByFullTime'
      hideOnMobile={hideOnMobile}
    >
      <input type='checkbox' checked={status} onChange={() => ''} />
      <span onClick={() => changeCheckBoxHandler(!status)}></span>
      Full Time
    </CheckBoxLabelContainer>
  )
}

export default CheckBox
