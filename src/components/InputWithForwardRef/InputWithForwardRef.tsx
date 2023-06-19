import {Label} from '@components/FormElements/FormElements.styled'
import {ForwardedRef, forwardRef} from 'react'

const InputWithForwardRef = forwardRef(
  (
    props: {
      valueHandler?: string
      inputName: string
      iconComponent: any
      hideOnMobile?: boolean
      inputPlaceHolder: string
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    // const localRef = useRef<HTMLInputElement>(null)
    // useEffect(() => {
    //   if (localRef.current && ref) {
    //     localRef.current.value = ref.current.value || ''
    //   }
    // }, [ref])

    return (
      <Label hideOnMobile={props.hideOnMobile} htmlFor={props.inputName}>
        {props.iconComponent}
        <input
          type='text'
          placeholder={props.inputPlaceHolder}
          ref={ref}
          //   value={ref.current.value}
        />
      </Label>
    )
  }
)

export default InputWithForwardRef
