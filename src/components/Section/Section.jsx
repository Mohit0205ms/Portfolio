
import Card from '../Card/Card';
import './Section.css'

const Section = ({title}) => {
  return(
    <section className='sectionContainer'>
      <h1>{title}</h1>
      <div className='sectionCardContainer'>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <button className='sectionViewMoreButton'>View More</button>
    </section>
  )
}

export default Section;