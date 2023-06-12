import {useEffect, useState} from 'react'
import {CompanyImageContainer} from './CompanyImage.styled'
import {logoNameCraetor} from '../../helper/logoNameCreator'


const CompanyImage = (props: {
  small?: boolean
  company: string
  backGroundColor: string
}) => {
  const [logoImg, setLogoImg] = useState('')

  useEffect(() => {
    const fetchLogo = async (Name: string) => {
      const res = await import(`@assets/logos/${Name}.svg`)
      setLogoImg(res.default)
    }
    let LogoName = logoNameCraetor(props.company)
    fetchLogo(LogoName)
  }, [props.company])

  return (
    <CompanyImageContainer
      backGroundColor={props.backGroundColor}
      small={props.small}
    >
      <img src={logoImg} alt='company logo' />
    </CompanyImageContainer>
  )
}

export default CompanyImage
