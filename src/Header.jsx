import { GiChefToque } from 'react-icons/gi'
import Navbar from './Navbar'
const Header = () => {
  return (
    <div className="header-restaurant">

        <span>
        
        </span>
        <div>
        <span className='header-icon'>
          <h3 className='header-subtitle'><GiChefToque />tavola</h3>
        </span>

        <span>
            <h1 className="header-title">creativ'Ragazza</h1>
            <Navbar />
        </span>
        </div>

    </div>
  )
}

export default Header
