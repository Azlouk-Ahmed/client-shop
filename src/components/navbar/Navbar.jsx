import { useState, useEffect, useRef } from 'react';
import "./navbar.css";
import { GiHoneyJar } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useHoneyContext } from '../../hooks/useAuthContext';
import { Chat, HomeOutlined } from '@mui/icons-material';
import { FaUserGroup } from 'react-icons/fa6';

function Navbar() {
  const { dispatch } = useHoneyContext();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("عسل البرسيم"); // Default to the first item
  const submenuRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev); // Toggle the menu open/close
  };

  const handleClickOutside = (event) => {
    // Close the menu if clicking outside both the submenu and menu trigger
    if (
      submenuRef.current &&
      menuRef.current &&
      !submenuRef.current.contains(event.target) &&
      !menuRef.current.contains(event.target)
    ) {
      setIsOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle item selection and close the submenu
  const handleItemClick = (itemText) => {
    setSelectedItem(itemText);
    setIsOpenMenu(false);
    dispatch({ type: "SET-HONEY", payload: itemText });
  };

  return (
    <nav className={`py-1 px-4 pr ${isOpen ? "nav-open" : ""}`}>
      <div className="!w-fit df comment-user-img">
            <img
              src={'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg'}
              className={`!w-12 !h-12`}
              alt="user"
            />
            <div className="">sana namroud</div>
          </div>
      {/* <img src="/img/honeySplash.png" className='hon' alt="" /> */}
      <button
        className={`menu ${isOpen ? "animate-toggle-nav" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Main Menu"
      >
        <svg width="40" height="40" viewBox="0 0 100 100">
          <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path className="line line2" d="M 20,50 H 80" />
          <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>
      </button>
      <div id="menu" ref={menuRef}>
        <div onClick={toggleMenu} className={`menu-item ${isOpenMenu ? "select" : ""}`}>

            <div className="menu-text">
              <div className="df jc-sb">

              <div className="df">
                <GiHoneyJar /> <div>{selectedItem}</div>
              </div>
                <IoMdArrowDropdown />
              </div>
            </div>
          {isOpenMenu && (
            <div ref={submenuRef} className="sub-menu">
              <div className="icon-box df" onClick={() => handleItemClick("عسل البرسيم")}>
                <GiHoneyJar />
                <div className="text">
                  <div className="title">
                    عسل البرسيم<i className="far fa-arrow-right"></i>
                  </div>
                  <div className="sub-text">عسل البرسيم الطبيعي، غني بالعناصر الغذائية.</div>
                </div>
              </div>
              <div className="icon-box df" onClick={() => handleItemClick("عسل الزهور")}>
                <GiHoneyJar />
                <div className="text">
                  <div className="title">
                    عسل الزهور<i className="far fa-arrow-right"></i>
                  </div>
                  <div className="sub-text">عسل الزهور، طعمه لذيذ ومفيد للصحة.</div>
                </div>
              </div>
              <div className="icon-box df" onClick={() => handleItemClick("عسل الغابة السوداء")}>
                <GiHoneyJar />
                <div className="text">
                  <div className="title">
                    عسل الغابة السوداء<i className="far fa-arrow-right"></i>
                  </div>
                  <div className="sub-text">عسل الغابة السوداء، ذو نكهة غنية ومميزة.</div>
                </div>
              </div>
              <div className="icon-box df" onClick={() => handleItemClick("عسل الكينا")}>
                <GiHoneyJar />
                <div className="text">
                  <div className="title">
                    عسل الكينا<i className="far fa-arrow-right"></i>
                  </div>
                  <div className="sub-text">عسل الكينا، مشهور بفوائده التنفسية.</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <img src="/img/logo.png" alt="" srcSet="" />
      <ul className={`links df !gap-8 ${isOpen ? "opened" : ""}`}>
        <li className="active df"><div className="nav-icon"><HomeOutlined /></div> الصفحة الرئيسية</li>
        <li className='df'><div className="nav-icon"><FaUserGroup /></div> فريقنا</li>
        <li className='df'><div className="nav-icon"><Chat /></div> تواصل</li>

          <li>
            <div className="!w-fit df comment-user-img user-info-login">
            <img
              src={'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg'}
              className={`!w-12 !h-12`}
              alt="user"
            />
            <div className="">sana namroud</div>
          </div>
          </li>

      </ul>
      
      
    </nav>
  );
}

export default Navbar;
