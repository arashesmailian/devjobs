import {MainTag} from './MainBox.styled'
import SearchContainer from '@components/Search/SearchContainer'
import JobCardsSection from '@components/CardsSection/JobCardsSection'
import Button from '@components/Button/Button'
import {useDispatch} from 'react-redux'
import {loadMore} from '@redux/reducers/JobsSlice'
const MainBox = () => {
  const dispatch = useDispatch()
  const click = () => {
    dispatch(loadMore(''))
  }
  return (
    <MainTag>
      <SearchContainer />
      <JobCardsSection />
      <Button primary marginTop clickHandler={click}>
        Load More
      </Button>
    </MainTag>
  )
}

export default MainBox
