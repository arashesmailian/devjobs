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
import iconFilter from '@assets/mobile/iconFilter.svg'
import iconSearch from '@assets/mobile/icon-search.svg'

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
  const testOnClick = () => {
    console.log('filter click')
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
          hideOnMobile
        />
        <Button primary hideOnMobile>
          Search
        </Button>
        <Button
          autoWidth
          showOnlyOnMobile
          noBackground
          clickHandler={testOnClick}
          typeOfBtn='button'
        >
          <img src={iconFilter} alt='filter icon' />
        </Button>
        <Button primary autoWidth showOnlyOnMobile>
          <img src={iconSearch} alt='search icon' />
        </Button>
      </FromSection>
    </Form>
  )
}

export default SearchContainer
