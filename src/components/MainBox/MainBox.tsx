import {MainTag} from './MainBox.styled'
import SearchContainer from '@components/Search/SearchContainer'
import JobCardsSection from '@components/CardsSection/JobCardsSection'
import {useDispatch} from 'react-redux'
const MainBox = () => {
  return (
    <MainTag>
      <SearchContainer />
      <JobCardsSection />
    </MainTag>
  )
}

export default MainBox
