import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useOnlineStatus } from "../hooks";
import { useContext } from "react";
import { UserContext } from "../context";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const { logged_in_user } = useContext(UserContext);

  return (
    <div className='flex justify-between items-center shadow-lg'>
      <Link to='/'>
        <div className='logo-container'>
          <img src={LOGO_URL} className='w-36' alt='logo' />
        </div>
      </Link>

      <div className='nav-items'>
        <ul className='flex'>
          <li className='px-4 font-normal text-2xl'>
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className='px-4 font-normal text-2xl'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4 font-normal text-2xl'>
            <Link to='/about'>About</Link>
          </li>
          <li className='px-4 font-normal text-2xl'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='px-4 font-normal text-2xl'>
            <Link to='/cart'>Cart</Link>
          </li>
          <li className='px-4 font-normal text-2xl'>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li className='px-4 font-normal text-2xl'>
            <Link to='/'>{logged_in_user}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
