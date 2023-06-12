import {ChangeEvent, useState} from 'react'
import {useDispatch} from 'react-redux'
import {Label} from './FormElements.styled'
import {IconSearch, IconLocation} from '@assets/desktop'
import {titleFilter} from '@redux/reducers/JobsSlice'

const InputElements = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState<string>('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    dispatch(titleFilter(inputValue))
  }
  return (
    <>
      <Label htmlFor='filterByInfos'>
        <IconSearch />
        <input
          type='text'
          placeholder='title'
          value={inputValue}
          onChange={onChange}
        />
      </Label>
      <Label htmlFor='filterByLocation'>
        <IconLocation />
        <input
          type='text'
          placeholder='location'
          value={inputValue}
          onChange={onChange}
        />
      </Label>
    </>
  )
}

export default InputElements
