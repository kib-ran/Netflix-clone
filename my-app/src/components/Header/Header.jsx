import React from "react";
import "./Header.css";
import NetflixLogo from "../../assets/images/NetflixLogo.svg"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="netflixlogo" width="100" />
            </li>

            <li>Netflix</li>
            <li>Home</li>
            <li>TVShow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Language</li>
          </ul>
        </div>

        <div className="header_right">
          <ul>
            <li><SearchIcon/></li>
         <li><NotificationsOffIcon /></li>
            <li><AccountBoxIcon/></li>
        <li><ArrowDropDownIcon/></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
