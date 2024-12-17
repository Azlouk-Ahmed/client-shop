import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Abc } from "@mui/icons-material";
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
  const [viewMode, setViewMode] = useState("list"); // "grid" or "list"

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const products = [{
    id: 1,
    isGift: false,
    name: "برطمان عسل",
    price: 9.99,
    weightInKg: 10,
    rate: 4,
    shortDesc: "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيكينغ إيليت. كوم، نون.",
    img: "/img/product1.png",
    quantity: 1
  },
  {
    id: 2,
    isGift: false,
    weightInKg: 5,
    name: "برطمان عسل",
    price: 9.99,
    rate: 4,
    shortDesc: "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيكينغ إيليت. كوم، نون.",
    img: "/img/product1.png",
    quantity: 1
  },
  {
    id: 3,
    isGift: false,
    weightInKg: 17,
    name: "برطمان عسل",
    price: 9.99,
    rate: 4,
    shortDesc: "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيكينغ إيليت. كوم، نون.",
    img: "/img/product1.png",
    quantity: 1
  },
  {
    id: 4,
    isGift: true,
    weightInKg: 6.5,
    name: "برطمان عسل",
    price: 9.99,
    rate: 4,
    img: "/img/product1.png",
    shortDesc: "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيكينغ إيليت. كوم، نون.",
    quantity: 1
  },
  {
    id: 5,
    weightInKg: 8,
    isGift: false,
    name: "برطمان عسل",
    price: 9.99,
    shortDesc: "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيكينغ إيليت. كوم، نون.",
    rate: 4,
    img: "/img/product1.png",
    quantity: 1
  },
  {
    id: 6,
    weightInKg: 12,
    isGift: false,
    name: "برطمان عسل",
    price: 9.99,
    rate: 4,
    shortDesc: "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيكينغ إيليت. كوم، نون.",
    img: "/img/product1.png",
    quantity: 1
  }
]
  return (
    <div className="products px-12">
      <div className="title w-fit mx-auto mt-12 pr">منتجات ذات صلة بهذا العسل <div className="wave"></div></div>
      <div className="df-c mt-20 p-8 prods bg-white">
        <div className="df sm-df-c m-df-c sm-g-3">
          <div className="df">
            <img src="/img/honey.png" alt="" className="w-12" srcset="" />
            <div className="title pr">{selectedHoney} <div className="wave"></div></div>
          </div>

          <div className="df sm-w-full m-w-full flex-1">
            <div className="pr w-1/2 sm-w-full m-w-full mx-auto">
              <input
                type="text"
                className="input ser-in w-full"
                placeholder="ابحث..."
              />
              <IoIosSearch className="ser" />
            </div>
          </div>
        </div>
        <div className="df ai-stretch h-full m-df-c sb-wrap">
          <Sidebar />
          <div className="df-c w-full h-full prods">
            <div className="df p-6 bg-white jc-sb">
              <div
                className="w-3/12 m-w-60 df jc-sb prods cursor-pointer pr px-4 py-2"
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
            </div>

            {/* Products Layout */}
            <div
              className={`df flex-wrap !gap-6 p-5 justify-around pr bg`}
            >
              {
                products.map((prod) => {
                  return (
                    <Product prod={prod} />

                  )
                })
              }
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
