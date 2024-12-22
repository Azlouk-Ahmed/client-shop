import { useState, useEffect, useRef } from 'react';
import "./navbar.css";
import { GiHoneyJar } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useHoneyContext } from '../../hooks/useAuthContext';
import { Chat, HiveRounded, HomeOutlined, Login, Logout } from '@mui/icons-material';
import { FaUserGroup } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const { dispatch } = useHoneyContext();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("اختر العسل الذي تريده"); // Default to the first item
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
    <>
    <nav className={`py-1 px-4 m-w-full sm-gapping pr sm-ai-fs ${isOpen ? "nav-open" : ""}`}>
      <NavLink to="/profile" className="!w-fit sm-min df comment-user-img">
            <img
              src={'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg'}
              className={`!w-12 !h-12`}
              alt="user"
            />
            <div className="m-d-none">ليلى حسن</div>
          </NavLink>
      <div id="menu" className='sm-mx-auto sm-w-full' ref={menuRef}>
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
              <div className="icon-box df" onClick={() => handleItemClick("عسل سدر")}>
                <GiHoneyJar />
                <div className="text">
                  <div className="title">
                  سدر<i className="far fa-arrow-right"></i>
                  </div>
                  <div className="sub-text">عسل سدر الطبيعي، غني بالعناصر الغذائية.</div>
                </div>
              </div>
              <div className="icon-box df" onClick={() => handleItemClick("عسل المراعي")}>
                <GiHoneyJar />
                <div className="text">
                  <div className="title">
                    عسل المراعي<i className="far fa-arrow-right"></i>
                  </div>
                  <div className="sub-text">عسل المراعي، طعمه لذيذ ومفيد للصحة.</div>
                </div>
              </div>
              <div className="icon-box df" onClick={() => handleItemClick("عسل السمرة")}>
                <GiHoneyJar />
                <div className="text">
                  <div className="title">
                    عسل السمرة <i className="far fa-arrow-right"></i>
                  </div>
                  <div className="sub-text">عسل  عسل السمرة ، ذو نكهة غنية ومميزة.</div>
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
      <div className="nav-icon log-tf-out"><Logout /></div>
      <Link to='/' className='sdnone m-d-none'>
        <img src="/img/logo.png" alt="" className='m-d-none' srcSet="" />
      </Link>
      <ul className={` links df pr !gap-4 ${isOpen ? "opened" : ""}`}>
        
        <NavLink to="/" className="df"><div className="nav-icon"><HomeOutlined /></div> الصفحة الرئيسية</NavLink>
        <NavLink to="/team" className='df bordered'><div className="nav-icon"><FaUserGroup /></div> سُفَراؤنا</NavLink>
        <NavLink to="/faq" className='df bordered'><div className="nav-icon"><Chat /></div> تواصل </NavLink>
        <NavLink to="/honey-products" className='df bordered'><div className="nav-icon"><Chat /></div> منتجات العسل</NavLink>
        <NavLink to="/honey-products" className='df bordered'><div className="nav-icon"><Login /></div> تسجيل الخروج</NavLink>

          

      </ul>
      
      
    </nav>
    <ul className={`phone-menu links jc-sa df !gap-8`}>
          
        <NavLink to="/" className="df-c !items-center"><div className="nav-icon"><HomeOutlined /></div> <div className='ta-c'> الرئيسية</div> </NavLink>
        <NavLink to="/team" className='df-c !items-center'><div className="nav-icon"><FaUserGroup /></div>  <div  className='ta-c'>فريقنا </div> </NavLink>
        <NavLink to="/faq" className='df-c !items-center'><div className="nav-icon"><Chat /></div>  <div  className='ta-c'> تواصل </div></NavLink>
        <NavLink to="/honey-products" className='df-c !items-center'><div className="nav-icon"><HiveRounded /></div>  <div  className='ta-c'>منتجات  </div> </NavLink>

          <NavLink to="/profile">
            <div className="!w-fit df comment-user-img user-info-login">
            <img
              src={'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg'}
              className={`!w-12 !h-12`}
              alt="user"
            />
          </div>
          </NavLink>

      </ul>
    </>
  );
}

export default Navbar;
