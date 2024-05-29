import images from '../src/assets/imgaes.png'
import './App.css'
import Counter from './conuntup/Counter'
import Menu from './menu/Menu'


function App() {

  return (
    <>
    <Menu/>
    <div className="mainmain">
    <div className="main">
      <img src={images} alt="" />
      <div className="overly">
        <div className="icon">
          ksldfjasdhfkjsdhfkj
        </div>
      </div>
    </div>
    </div>
    <Counter/>
    </>
  )
}

export default App
