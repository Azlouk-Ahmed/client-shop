import { useState, useEffect, useRef } from 'react';
import "./navbar.css";
import { GiHoneyJar } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useHoneyContext } from '../../hooks/useAuthContext';
import { Chat, HiveRounded, HomeOutlined } from '@mui/icons-material';
import { FaUserGroup } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

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
    <>
    <nav className={`py-1 px-4 m-w-full pr sm-ai-fs ${isOpen ? "nav-open" : ""}`}>
      <NavLink to="/profile" className="!w-fit sm-min df comment-user-img">
            <img
              src={'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg'}
              className={`!w-12 !h-12`}
              alt="user"
            />
            <div className="m-d-none">ليلى حسن</div>
          </NavLink>
      <div id="menu" className='sm-mx-auto' ref={menuRef}>
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
      <img src="/img/logo.png" alt="" className='m-d-none' srcSet="" />
      <ul className={` links df !gap-8 ${isOpen ? "opened" : ""}`}>
        <NavLink to="/" className="df"><div className="nav-icon"><HomeOutlined /></div> الصفحة الرئيسية</NavLink>
        <NavLink to="/team" className='df'><div className="nav-icon"><FaUserGroup /></div> فريقنا</NavLink>
        <NavLink to="/faq" className='df'><div className="nav-icon"><Chat /></div> أسئلة</NavLink>
        <NavLink to="/honey-products" className='df'><div className="nav-icon"><Chat /></div> منتجات العسل</NavLink>

          <NavLink to="/profile">
            <div className="!w-fit df comment-user-img user-info-login">
            <img
              src={'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg'}
              className={`!w-12 !h-12`}
              alt="user"
            />
            <div className="">sana namroud</div>
          </div>
          </NavLink>

      </ul>
      
      
    </nav>
    <ul className={`phone-menu links jc-sa df !gap-8`}>
        <NavLink to="/" className="df-c !items-center"><div className="nav-icon"><HomeOutlined /></div> <div className='ta-c'> الرئيسية</div> </NavLink>
        <NavLink to="/team" className='df-c !items-center'><div className="nav-icon"><FaUserGroup /></div>  <div  className='ta-c'>فريقنا </div> </NavLink>
        <NavLink to="/faq" className='df-c !items-center'><div className="nav-icon"><Chat /></div>  <div  className='ta-c'> أسئلة</div></NavLink>
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
