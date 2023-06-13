import {CheckBoxLabelContainer} from './CheckBox.styled'

const CheckBox = ({status, changeCheckBoxHandler}) => {
  return (
    <CheckBoxLabelContainer htmlFor='filterByFullTime'>
      <input type='checkbox' checked={status} onChange={() => ''} />
      <span onClick={() => changeCheckBoxHandler(!status)}></span>
      Full Time
    </CheckBoxLabelContainer>
  )
}

export default CheckBox
