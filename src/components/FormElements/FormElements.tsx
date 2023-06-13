import {ChangeEvent, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {Label} from './FormElements.styled'
import {IconSearch, IconLocation} from '@assets/desktop'
import {locationFilter, titleFilter} from '@redux/reducers/JobsSlice'

const InputElements = () => {
  const dispatch = useDispatch()
  const [inputTitle, setInputTitle] = useState<string>('')
  const [inputLocation, setInputLocation] = useState<string>('')
  const titleValueOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value)
  }
  const locationValueOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputLocation(e.target.value)

  }

  useEffect(() => {
    dispatch(locationFilter(inputLocation))
  }, [inputLocation,inputTitle])
  return (
    <>
      <Label htmlFor='filterByInfos'>
        <IconSearch />
        <input
          type='text'
          placeholder='title'
          value={inputTitle}
          onChange={titleValueOnChange}
        />
      </Label>
      <Label htmlFor='filterByLocation'>
        <IconLocation />
        <input
          type='text'
          placeholder='location'
          value={inputLocation}
          onChange={locationValueOnChange}
        />
      </Label>
    </>
  )
}

export default InputElements
