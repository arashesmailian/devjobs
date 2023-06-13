import {ChangeEvent, useState} from 'react'
import {useDispatch} from 'react-redux'
import InputElements from '@components/FormElements/FormElements'
import {Form, FromSection} from './SearchContainer.styled'
import CheckBox from '@components/CheckBox/CheckBox'
import Button from '@components/Button/Button'
import {
  filteringByFullTime,
  filteringByLocation,
  filteringOnInfo,
} from '@redux/reducers/newJobSlice'

const SearchContainer = () => {
  // ***** states ***** //
  const infosStateHook = useState<string>('')
  const locationStateHook = useState<string>('')
  const [checkBoxStatus, setCheckBoxStatus] = useState<boolean>(false)
  const dispatch = useDispatch()
  // ***** states ***** //

  const formSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(filteringOnInfo(infosStateHook[0]))
    dispatch(filteringByLocation(locationStateHook[0]))
    dispatch(filteringByFullTime(checkBoxStatus))
  }

  return (
    <Form onSubmit={formSubmitHandler}>
      <FromSection>
        <InputElements
          infosStateHook={infosStateHook}
          locationStateHook={locationStateHook}
        />
        <CheckBox
          status={checkBoxStatus}
          changeCheckBoxHandler={setCheckBoxStatus}
        />
        <div>
          <Button primary autoWidth isSearch>
            Search
          </Button>
        </div>
      </FromSection>
    </Form>
  )
}

export default SearchContainer
