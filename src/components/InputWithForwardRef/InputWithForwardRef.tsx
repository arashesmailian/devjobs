import {Label} from '@components/FormElements/FormElements.styled'
import {forwardRef} from 'react'

interface Props {
  valueHandler?: string
  inputName: string
  iconComponent: React.ReactNode
  hideOnMobile?: boolean
  inputPlaceHolder: string
  defaultValue: string
}

const InputWithForwardRef = forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    return (
      <Label hideOnMobile={props.hideOnMobile} htmlFor={props.inputName}>
        {props.iconComponent}
        <input
          type='text'
          placeholder={props.inputPlaceHolder}
          ref={ref}
          defaultValue={props.defaultValue}
          key={Math.random()} //force input to re-render
        />
      </Label>
    )
  }
)

export default InputWithForwardRef
