
import Card from '../Card/Card';
import './Section.css'

const Section = ({title}) => {
  return(
    <div className='sectionContainer'>
      <h1>{title}</h1>
      <div className='sectionCardContainer'>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <button className='sectionViewMoreButton'>View More</button>
    </div>
  )
}

export default Section;