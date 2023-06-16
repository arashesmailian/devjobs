import {ChangeEvent, useState} from 'react'
import {useDispatch} from 'react-redux'
import {Form, FromSection} from './SearchContainer.styled'
import CheckBox from '@components/CheckBox/CheckBox'
import Button from '@components/Button/Button'
import FilterModal from '@components/FilterModal/FilterModal'
import {
  filteringByFullTime,
  filteringByLocation,
  filteringOnInfo,
} from '@redux/reducers/newJobSlice'
import iconFilter from '@assets/mobile/iconFilter.svg'
import iconSearch from '@assets/mobile/icon-search.svg'
import Input from '@components/Input/Input'
import {ReactComponent as IconLocation} from '@assets/desktop/IconLocation.svg'
import {ReactComponent as IconSearch} from '@assets/desktop/IconSearch.svg'

const SearchContainer = () => {
  // ***** states ***** //
  const infosStateHook = useState<string>('')
  const locationStateHook = useState<string>('')
  const [checkBoxStatus, setCheckBoxStatus] = useState<boolean>(false)
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  // ***** states ***** //
  const formSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(filteringOnInfo(infosStateHook[0]))
    dispatch(filteringByLocation(locationStateHook[0]))
    dispatch(filteringByFullTime(checkBoxStatus))
  }

  //***** modal functions *****//
  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)
  //***** modal functions *****//
  return (
    <>
      <Form onSubmit={formSubmitHandler}>
        <FromSection>
          <Input
            valueHandler={infosStateHook}
            inputName='filterByInfos'
            iconComponent={<IconSearch />}
            inputPlaceHolder='Filter by title'
          />
          <Input
            valueHandler={locationStateHook}
            inputName='filterByLocation'
            iconComponent={<IconLocation />}
            inputPlaceHolder='Filter by location'
            hideOnMobile
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
            clickHandler={openModal}
            typeOfBtn='button'
          >
            <img src={iconFilter} alt='filter icon' />
          </Button>
          <Button primary autoWidth showOnlyOnMobile>
            <img src={iconSearch} alt='search icon' />
          </Button>
          {showModal && (
            <FilterModal>
              <Input
                valueHandler={locationStateHook}
                inputName='filterByLocation'
                iconComponent={<IconLocation />}
                inputPlaceHolder='Filter by location'
              />
              <CheckBox
                status={checkBoxStatus}
                changeCheckBoxHandler={setCheckBoxStatus}
              />
              {/* <div> */}
              <Button primary autoWidth clickHandler={formSubmitHandler}>
                Search
              </Button>
              {/* </div> */}
            </FilterModal>
          )}
        </FromSection>
      </Form>
    </>
  )
}

export default SearchContainer
