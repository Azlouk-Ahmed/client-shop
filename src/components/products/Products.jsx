import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BsGrid } from "react-icons/bs";
import { Abc, List } from "@mui/icons-material";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Product from "../product/Product";
import Sidebar from "../sidebar/Sidebar";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import "./products.css";
import { useHoneyContext } from "../../hooks/useAuthContext";
import AlarmOnOutlinedIcon from '@mui/icons-material/AlarmOnOutlined';

function Products() {
  const { selectedHoney } = useHoneyContext();
  const [openMenu, setOpenMenu] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="products px-12">
      <div className="title w-fit mx-auto mt-12 pr">منتجات ذات صلة بهذا العسل <div className="wave"></div></div>
      <div className="df-c mt-20 p-8 prods bg-white">
        <div className="df ">
          <div className="df">
            <img src="/img/honey.png" alt="" className="w-12" srcset="" />
            <div className="title pr">{selectedHoney} <div className="wave"></div></div>
          </div>

          <div className="df flex-1">
            <div className="pr w-1/2 mx-auto">
              <input
                type="text"
                className="input ser-in w-full"
                placeholder="Search..."
              />
              <IoIosSearch className="ser" />
            </div>
          </div>
        </div>
        <div className="df ai-stretch h-full sb-wrap">
          <Sidebar />
          <div className="df-c w-full h-full prods">
            <div className="df p-6 bg-white jc-sb">
              <div
                className="w-3/12 df jc-sb prods cursor-pointer pr px-4 py-2"
                onClick={() => setOpenMenu(!openMenu)}
              >
                فرز حسب
                <AnimatePresence>
                  {openMenu && (
                    <motion.div
                    className="sort-menu df-c prods"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="df op">
                      <Abc />
                      الترتيب الأبجدي (تصاعدي)
                    </div>
                    <div className="df op">
                      <Abc  />
                      الترتيب الأبجدي (تنازلي)
                    </div>
                    <div className="df op">
                    <MonetizationOnOutlinedIcon />
                      السعر: من الأقل إلى الأعلى
                    </div>
                    <div className="df op">
                    <MonetizationOnOutlinedIcon />
                      السعر: من الأعلى إلى الأقل
                    </div>
                    <div className="df op">
                    <AlarmOnOutlinedIcon />
                      الأقدم أولاً
                    </div>
                    <div className="df op">
                    <AlarmOnOutlinedIcon />
                      الأحدث أولاً
                    </div>
                  </motion.div>
                  
                  )}
                </AnimatePresence>
                <IoIosArrowDown />
              </div>
              <div className="df">
                {/* Hidden input radios */}
                <input
                  type="radio"
                  id="grid-view"
                  name="view"
                  value="grid"
                  checked={viewMode === "grid"}
                  onChange={() => setViewMode("grid")}
                  style={{ display: "none" }}
                />
                <label htmlFor="grid-view" className={`view cursor-pointer ${viewMode === "grid"? "highlight" : ""}`}>
                  <BsGrid size={24} />
                </label>

                <input
                  type="radio"
                  id="list-view"
                  name="view"
                  value="list"
                  checked={viewMode === "list"}
                  onChange={() => setViewMode("list")}
                  style={{ display: "none" }}
                />
                <label htmlFor="list-view" className={`view cursor-pointer ${viewMode !== "grid"? "highlight" : ""}`}>
                  <List style={{ fontSize: 28 }} />
                </label>
              </div>
            </div>

            {/* Products Layout */}
            <div
              className={`${
                viewMode === "grid" ? "df flex-wrap" : "df-c"
              } !gap-6 p-5 justify-around pr bg`}
            >
              <Product list={viewMode === "list"} />
              <Product list={viewMode === "list"} />
              <Product list={viewMode === "list"} />
              <Product list={viewMode === "list"} />
              <Product list={viewMode === "list"} />
              <Product list={viewMode === "list"} />
            </div>

            <ul className="page">
              <li className="page__numbers">1</li>
              <li className="page__numbers active">2</li>
              <li className="page__numbers">3</li>
              <li className="page__numbers">4</li>
              <li className="page__numbers">5</li>
              <li className="page__numbers">6</li>
              <li className="page__dots">...</li>
              <li className="page__numbers">10</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
