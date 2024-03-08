import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain' />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hey, name&apos;s <span className='font-semibold'>Richard</span> 👋
      <br /> A Software Developer
    </h1>
  ),
  2: (
    <InfoBox
      text='Looking to explore various software developement topics and opportunities'
      link='/about'
      btnText='Learn more'
    />
  ),
  3: (
    <InfoBox
      text='Some projects I created to experiment around with a few concepts I wanted to explore.'
      link='/projects'
      btnText='See projects'
    />
  ),
  4: (
    <InfoBox
      text='Looking for a dev? Feel free to contact me!'
      link='/contact'
      btnText="Let's Talk"
    />
  ),
}

const HomeInfo = ({ curStage }) => {
  return renderContent[curStage] || null
}

export default HomeInfo
