import InputElements from '@components/FormElements/FormElements'
import {Form, FromSection} from './SearchContainer.styled'
import CheckBox from '@components/CheckBox/CheckBox'
import Button from '@components/Button/Button'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '@redux/store'
import {ChangeEvent, useEffect, useState} from 'react'
import {JobInetrface} from '@typings/JobInterface'
import {fullTimeFilter} from '@redux/reducers/JobsSlice'

const SearchContainer = () => {
  // ***** states ***** //
  const dispatch = useDispatch()
  const jobs = useSelector((state: RootState) => state.jobs)
  const [checkBoxStatus, setCheckBoxStatus] = useState<boolean>(false)
  // ***** states ***** //
  useEffect(() => {
    dispatch(fullTimeFilter(checkBoxStatus))
  }, [checkBoxStatus])
  return (
    <Form>
      <FromSection>
        <InputElements />
        <CheckBox
          status={checkBoxStatus}
          changeChackBoxHandler={setCheckBoxStatus}
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
