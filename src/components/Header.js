import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useOnlineStatus } from "../hooks";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo-container'>
          <img src={LOGO_URL} className='logo' alt='logo' />
        </div>
      </Link>

      <div className='nav-items'>
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
          <li>
            <Link to='/grocery'>Grocery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
