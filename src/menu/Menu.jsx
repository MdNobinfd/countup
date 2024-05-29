import { useState} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import './menuo.css'
import CountUp from 'react-countup';


const Menu = () => {
  return (
 <div className="sweet-loading">


      <ClipLoader
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <CountUp end={100} />
    </div>
  )
}

export default Menu