import {ChangeEvent} from 'react'
import {Label} from './FormElements.styled'
import {IconSearch, IconLocation} from '@assets/desktop'

const InputElements = (props: {
  infosStateHook: [string, any]
  locationStateHook: [string, any]
}) => {
  const [info, setInfo] = props.infosStateHook
  const [location, setLocation] = props.locationStateHook

  const titleValueOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInfo(e.target.value)
  }
  const locationValueOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value)
  }

  return (
    <>
      <Label htmlFor='filterByInfos'>
        <IconSearch />
        <input
          type='text'
          placeholder='title'
          value={info}
          onChange={titleValueOnChange}
        />
      </Label>
      <Label htmlFor='filterByLocation'>
        <IconLocation />
        <input
          type='text'
          placeholder='location'
          value={location}
          onChange={locationValueOnChange}
        />
      </Label>
    </>
  )
}

export default InputElements
