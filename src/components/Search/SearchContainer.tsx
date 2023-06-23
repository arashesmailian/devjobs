import {useRef, useState} from 'react'

import {Form, FromSection} from './SearchContainer.styled'
import CheckBox from '@components/CheckBox/CheckBox'
import Button from '@components/Button/Button'
import FilterModal from '@components/FilterModal/FilterModal'
import iconFilter from '@assets/mobile/iconFilter.svg'
import iconSearch from '@assets/mobile/icon-search.svg'
import {ReactComponent as IconLocation} from '@assets/desktop/IconLocation.svg'
import {ReactComponent as IconSearch} from '@assets/desktop/IconSearch.svg'
import InputWithForwardRef from '@components/InputWithForwardRef/InputWithForwardRef'

import {useQueryParams} from '@hooks/useSearchParamsState'

const SearchContainer = () => {
  const titleInputRef = useRef<HTMLInputElement>(null)
  const locationInputRef = useRef<HTMLInputElement>(null)
  const {info, loc, fullTime, setQueryParams} = useQueryParams()
  const [checkBoxStatus, setCheckBoxStatus] = useState<boolean>(fullTime)

  const [showModal, setShowModal] = useState(false)
  const openModal: React.MouseEventHandler<HTMLButtonElement> = () =>
    setShowModal(true)
  const closeModal = () => setShowModal(false)

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setQueryParams(
      titleInputRef.current.value,
      locationInputRef.current.value,
      checkBoxStatus
    )
    closeModal()
  }

  return (
    <>
      <Form onSubmit={formSubmitHandler}>
        <FromSection>
          <InputWithForwardRef
            inputName='filterByInfos'
            iconComponent={<IconSearch />}
            inputPlaceHolder='Filter by title'
            ref={titleInputRef}
            defaultValue={info}
          />
          <InputWithForwardRef
            inputName='filterByLocation'
            iconComponent={<IconLocation />}
            inputPlaceHolder='Filter by location'
            hideOnMobile
            ref={locationInputRef}
            defaultValue={loc}
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
              <InputWithForwardRef
                inputName='filterByLocation'
                iconComponent={<IconLocation />}
                inputPlaceHolder='Filter by location'
                ref={locationInputRef}
                defaultValue={loc}
              />
              <CheckBox
                status={checkBoxStatus}
                changeCheckBoxHandler={setCheckBoxStatus}
              />
              <Button primary autoWidth clickHandler={formSubmitHandler}>
                Search
              </Button>
            </FilterModal>
          )}
        </FromSection>
      </Form>
    </>
  )
}

export default SearchContainer
