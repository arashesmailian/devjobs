import {useRef} from 'react'
import {CheckBoxLabelContainer} from './CheckBox.styled'

const CheckBox = (props: any) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <CheckBoxLabelContainer htmlFor='filterByFullTime'>
      <input type='checkbox' checked={props.status} onChange={() => ''} />
      <span onClick={() => props.changeChackBoxHandler(!props.status)}></span>
      Full Time
    </CheckBoxLabelContainer>
  )
}

export default CheckBox
