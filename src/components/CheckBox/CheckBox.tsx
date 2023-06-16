import {CheckBoxLabelContainer} from './CheckBox.styled'

export interface ICheckBox{
  status:boolean
  changeCheckBoxHandler:any
  hideOnMobile?:boolean
}

const CheckBox:React.FC<ICheckBox> = ({status, changeCheckBoxHandler, hideOnMobile}) => {
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
