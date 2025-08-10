import './Card.css';

const Card = () => {
  return(
    <div className="cardContainer">
      {/* Card image */}
      <div className='cardImageContainer'>
        <img src='https://www.shutterstock.com/image-vector/vision-ideas-creative-project-selection-600nw-2000850218.jpg' alt='E-Commerce project preview' className='cardImage' />
      </div>
      {/* Name */}
      <div className='cardInfoContainer'>
        <p className='cardTitle'>E-Commerce</p>
        <p className='cardSkills'>React, MogoDB, Express, Node.js,</p>
      </div>
      <div className='cardButtonContainer'>
        <button className='cardButton'>Live</button>
        <button className='cardButton'>Github</button>
      </div>
    </div>
  )
}

export default Card;
