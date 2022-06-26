import {ReactComponent as PicLogo} from '../../assets/apps.svg';
import {ReactComponent as SearchIcon} from '../../assets/search.svg';

const Navbar = ()=>{

  return(
    <div className="navbar">
      <div className="navber__name-box">
        <h1>Death Standing</h1>
      </div>
      <div className="navber__logo-box">
        <PicLogo className="navbar__logo  icon"/>
        {/* <img src={picLogo} alt="logo" className="navbar__logo"/> */}
        {/* <i class="fi fi-rr-apps"></i> */}
        <h2 className="navbar__logo-name">Hided Kojima</h2>
      </div>
      <div className="navbar__search-box">
        <h1>Search</h1>
        <SearchIcon className='navbar__searchIcon icon'/>
        <button className='NavbarBtn'>Pre Order</button>

      </div>
    </div>
  )

}


export default Navbar