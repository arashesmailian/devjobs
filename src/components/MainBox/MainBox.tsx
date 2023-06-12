import {MainTag} from './MainBox.styled'
import SearchContainer from '@components/Search/SearchContainer'
import JobCardsSection from '@components/CardsSection/JobCardsSection'
import Button from '@components/Button/Button'
const MainBox = () => {
  return (
    <MainTag>
      <SearchContainer />
      <JobCardsSection />
      <Button primary marginTop>
        Load More
      </Button>
    </MainTag>
  )
}

export default MainBox
