
import './menuo.css'
import CountUp from 'react-countup';
import ProgressBar from "@ramonak/react-progress-bar";


const Menu = () => {
  return (
 <div className="sweet-loading">
      <CountUp end={15} />
      <div className="sdlkfjskldjfl">
      <ProgressBar completed={50} animateOnRender={true} bgColor='#b22a28' transitionDuration={"3s"} />
      </div>
      <div className="sdlkfjskldjfl">
      <ProgressBar completed={70} animateOnRender={true} bgColor='#2896b2' transitionDuration={"3s"} />
      </div>
      <div className="sdlkfjskldjfl">
      <ProgressBar completed={90} animateOnRender={true} bgColor='linear-gradient(145deg, #f02981 0%, #c81901 100%)' transitionDuration={"3s"} />
      </div>
    </div>
  )
}

export default Menu