import {ChangeEvent, useRef, useState} from 'react'
import {useDispatch} from 'react-redux'

import {Form, FromSection} from './SearchContainer.styled'
import CheckBox from '@components/CheckBox/CheckBox'
import Button from '@components/Button/Button'
import FilterModal from '@components/FilterModal/FilterModal'
import ModalWithDialog from '@components/ModalWithDialog/ModalWithDialog'
import {
  filteringByFullTime,
  filteringByLocation,
  filteringOnInfo,
} from '@redux/reducers/JobSlice'
import iconFilter from '@assets/mobile/iconFilter.svg'
import iconSearch from '@assets/mobile/icon-search.svg'
import Input from '@components/Input/Input'
import {ReactComponent as IconLocation} from '@assets/desktop/IconLocation.svg'
import {ReactComponent as IconSearch} from '@assets/desktop/IconSearch.svg'
import InputWithForwardRef from '@components/InputWithForwardRef/InputWithForwardRef'

const SearchContainer = () => {
  const titleInputRef = useRef<HTMLInputElement>(null)
  const locationInputRef = useRef<HTMLInputElement>(null)
  // const infosStateHook = useState<string>('')
  // const locationStateHook = useState<string>('')
  const [checkBoxStatus, setCheckBoxStatus] = useState<boolean>(false)
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false)
  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  const formSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(filteringOnInfo(titleInputRef.current.value))
    dispatch(filteringByLocation(locationInputRef.current.value))
    dispatch(filteringByFullTime(checkBoxStatus))
    closeModal()
  }
  return (
    <>
      <Form onSubmit={formSubmitHandler}>
        <FromSection>
          {/* <Input
            valueHandler={infosStateHook}
            inputName='filterByInfos'
            iconComponent={<IconSearch />}
            inputPlaceHolder='Filter by title'
          /> */}
          <InputWithForwardRef
            inputName='filterByInfos'
            iconComponent={<IconSearch />}
            inputPlaceHolder='Filter by title'
            ref={titleInputRef}
          />
          {/* <Input
            valueHandler={locationStateHook}
            inputName='filterByLocation'
            iconComponent={<IconLocation />}
            inputPlaceHolder='Filter by location'
            hideOnMobile
          /> */}
          <InputWithForwardRef
            inputName='filterByLocation'
            iconComponent={<IconLocation />}
            inputPlaceHolder='Filter by location'
            hideOnMobile
            ref={locationInputRef}
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
            <FilterModal isOpen={showModal}>
              {/* <Input
                valueHandler={locationStateHook}
                inputName='filterByLocation'
                iconComponent={<IconLocation />}
                inputPlaceHolder='Filter by location'
              /> */}
              <InputWithForwardRef
                inputName='filterByLocation'
                iconComponent={<IconLocation />}
                inputPlaceHolder='Filter by location'
                ref={locationInputRef}
              />
              <CheckBox
                status={checkBoxStatus}
                changeCheckBoxHandler={setCheckBoxStatus}
              />
              <Button primary autoWidth clickHandler={formSubmitHandler}>
                Search
              </Button>
            </FilterModal>
            // <ModalWithDialog
            //   open={showModal}
            //   onClose={() => setShowModal(false)}
            // >
            //   {/* <Input
            //     valueHandler={locationStateHook}
            //     inputName='filterByLocation'
            //     iconComponent={<IconLocation />}
            //     inputPlaceHolder='Filter by location'
            //   /> */}
            //   <InputWithForwardRef
            //     inputName='filterByLocation'
            //     iconComponent={<IconLocation />}
            //     inputPlaceHolder='Filter by location'
            //     ref={locationInputRef}
            //   />
            //   <CheckBox
            //     status={checkBoxStatus}
            //     changeCheckBoxHandler={setCheckBoxStatus}
            //   />
            //   <Button primary autoWidth clickHandler={formSubmitHandler}>
            //     Search
            //   </Button>
            // </ModalWithDialog>
          )}
        </FromSection>
      </Form>
    </>
  )
}

export default SearchContainer
