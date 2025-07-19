
import Card from '../Card/Card';
import './Section.css'

const Section = () => {
  return(
    <div className='sectionContainer'>
      <div className='sectionHeaderContainer'>
        <p className='sectionHeaderTitle'>PROJECTS</p>
        <button className='sectionViewMoreButton'>View More</button>
      </div>
      <div className='sectionCardContainer'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Section;