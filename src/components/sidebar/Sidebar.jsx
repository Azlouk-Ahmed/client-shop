import { GiHoneyJar } from "react-icons/gi";
import "./sidebar.css";
import { IoFilter } from "react-icons/io5";
import MultiRangeSlider from "../multirangeSlider/MultiRangeSlider";
import { useState } from "react";
import { Category } from "@mui/icons-material";
import { FaDollarSign } from "react-icons/fa6";

function Sidebar() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);


  return (
    <div className="sidebar m-w-full">
      <div className="df sidetitles">
        <span>تصفية</span><IoFilter />
      </div>
      <hr />
      <div className="df sidetitles"> 
        <span>فئات</span><Category />
      </div>
      <div className="group">
        {/* Move checkbox outside categ-title */}
        <input type="checkbox" id="toggleSubMenu" className="toggle-checkbox" />

        <label className="df categ-title" htmlFor="toggleSubMenu">
          <div className="df">
            <GiHoneyJar /> <span>فئة 1</span>
          </div>
          {/* <IoIosArrowForward className="dropdown mr-auto" /> */}
        </label>

        {/* <div className="sub-categ-menu">
          <div className="df sub-categ"><GiPackedPlanks /> <span>الحزمة 1</span></div>
          <div className="df sub-categ"><GiPadlock /> <span>الحزمة 2</span></div>
          <div className="df sub-categ"><GiBee /> <span>الحزمة 3</span></div>
        </div> */}
      </div>
      
      <div className="group">
        {/* Move checkbox outside categ-title */}
        <input type="checkbox" id="toggleSubMenu2" className="toggle-checkbox" />

        <label className="df categ-title" htmlFor="toggleSubMenu2">
          <div className="df">
            <GiHoneyJar /> <span>فئة 2</span>
          </div>
          {/* <IoIosArrowForward className="dropdown mr-auto" /> */}
        </label>

        {/* <div className="sub-categ-menu">
          <div className="df sub-categ"><GiPackedPlanks /> <span>الحزمة 1</span></div>
          <div className="df sub-categ"><GiPadlock /> <span>الحزمة 2</span></div>
          <div className="df sub-categ"><GiBee /> <span>الحزمة 3</span></div>
        </div> */}
      </div>
      <div className="group">
        {/* Move checkbox outside categ-title */}
        <input type="checkbox" id="toggleSubMenu1" className="toggle-checkbox" />

        <label className="df jc-sb categ-title" htmlFor="toggleSubMenu1">
          <div className="df">
            <GiHoneyJar /> <span>فئة 3</span>
          </div>
          {/* <IoIosArrowForward className="dropdown" /> */}
        </label>

        {/* <div className="sub-categ-menu">
          <div className="df sub-categ"><GiPackedPlanks /> <span>الحزمة 1</span></div>
          <div className="df sub-categ"><GiPadlock /> <span>الحزمة 2</span></div>
          <div className="df sub-categ"><GiBee /> <span>الحزمة 3</span></div>
        </div> */}
      </div>
      
      {/* <div className="df sidetitles"> 
        <span>التقييمات</span><BsStarFill />
      </div> */}
      {/* <div className="group df-c !gap-2">
        {[5, 4, 3, 2, 1, 0].map((num) => (
          <div className="checkbox-wrapper-4" key={num}>
            <input className="inp-cbx" id={`rating-${num}`} type="checkbox" />
            <label className="cbx" htmlFor={`rating-${num}`}>
              <span>
                <svg width="12px" height="10px">
                  <use href="#check-4"></use>
                </svg>
              </span>
              <span><Stars number={num} /></span>
            </label>
            <svg className="inline-svg">
              <symbol id="check-4" viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </symbol>
            </svg>
          </div>
        ))}
      </div> */}
      <div className="df sidetitles">
        <span>الأسعار</span><FaDollarSign />
      </div>
      <div className="df-c">
        <MultiRangeSlider
          min={0}
          max={1000}
          onChange={({ min, max }) => { setMaxValue(max); setMinValue(min); }}
        />
        <div className="df font-bold jc-sb">
          <span>{minValue}</span>
          <span>{maxValue}</span>
        </div>
      </div>
      <div className="simple-btn mt-auto w-full !justify-center">تصفية</div>
    </div>
  );
}

export default Sidebar;
