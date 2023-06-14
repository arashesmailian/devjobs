import {MainTag} from './MainBox.styled'
import SearchContainer from '@components/Search/SearchContainer'
import JobCardsSection from '@components/CardsSection/JobCardsSection'

const MainBox = () => {
  return (
    <MainTag>
      <SearchContainer />
      <JobCardsSection />
    </MainTag>
  )
}

export default MainBox
