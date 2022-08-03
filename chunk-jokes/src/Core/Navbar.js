import UserIcon from '../assets/assets_Homework_Front-End_02/shape.png'
import pathIcon from '../assets/assets_Homework_Front-End_02/path.png'
import RightArrow from '../assets/assets_Homework_Front-End_02/arrow-left-copy.png'



import { useState } from "react"
const NavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [dropdown, setDropdown] = useState(false);
    return (  
        <nav className="navigation">
        <button
            className="hamburger"
            onClick={() => {
            setIsNavExpanded(!isNavExpanded)
            }}
        >
        <svg viewBox="0 0 115 75" width="40" height="18">
            <rect width="50" height="10" className='fill-white'></rect>
            <rect y="30" width="50" height="10" className='fill-white'></rect>
            <rect y="60" width="50" height="10" className='fill-white'></rect>
        </svg>
        </button>
        <div
            className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
        >
        <ul>
          <li>
          <a href="#" className="so-funktionierts">So Funktioniert's</a>
          </li>
          <li>
            <a href="#" className="so-funktionierts">Sonderancebote</a>
          </li>
          <li>
            <a href="#" className='subnavbtn' onClick={() => setDropdown((prev) => !prev)}>
                <img src={UserIcon} alt="icon-usr" height='11px' className='mr-2'/>
                Mein bereich 
                <img src={pathIcon} alt="icon-shape" height='7px' className='ml-1'/>
            </a>
            <img src={RightArrow} alt='' className='hidden-desk' height='7px' />
          </li>
            
        </ul>
            { dropdown ? (
                
                <div>
                    <div className='desk'>
                        <img src={pathIcon} alt="icon-shape" height='10px' className='rotate-180 popup-arow'/>
                        <div className={dropdown ? "subnav-content d-block" : "subnav-content"}>
                            <a href="#" className="so-funktionierts">My published jokes</a>
                            <a href="#" className="so-funktionierts">My saved jokes</a>
                            <a href="#" className="so-funktionierts">Account informations</a>
                            <a href="#" className="so-funktionierts">Publish new joke</a>
                        </div>
                    </div>
                    <div className='mob'>
                        <ul className="subnav-content top-273 left-10">
                            <li><a href="#" className="so-funktionierts">My published jokes</a></li>
                            <li><a href="#" className="so-funktionierts">My saved jokes</a></li>
                            <li><a href="#" className="so-funktionierts">Account informations</a></li>
                            <li><a href="#" className="so-funktionierts">Publish new joke</a></li>
                        </ul>
                    </div>
           </div>
            ) : <></>

            }
        
      </div>
    </nav>
    );
}
 
export default NavBar;