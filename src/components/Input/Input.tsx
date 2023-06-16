import {Label} from '@components/FormElements/FormElements.styled'
import {ChangeEvent, ReactElement} from 'react'

const Input = (props: {
  valueHandler: [string, any]
  inputName: string
  iconComponent: any
  hideOnMobile?:boolean
  inputPlaceHolder: string
}) => {
  const [value, setValue] = props.valueHandler
  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
      <Label hideOnMobile={props.hideOnMobile} htmlFor={props.inputName}>
        {props.iconComponent}
        <input
          type='text'
          placeholder={props.inputPlaceHolder}
          value={value}
          onChange={changeValueHandler}
        />
      </Label>
  )
}

export default Input
