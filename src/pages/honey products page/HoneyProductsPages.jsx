import "./styles.css";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BsGrid } from "react-icons/bs";
import { Abc, List } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../../components/sidebar/Sidebar";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AlarmOnOutlinedIcon from '@mui/icons-material/AlarmOnOutlined';
import { useHoneyContext } from "../../hooks/useAuthContext";
import { useState } from "react";
import Product from "./Product";
function HoneyProductsPages() {
    const { selectedHoney } = useHoneyContext();
  const [openMenu, setOpenMenu] = useState(false);
  const [viewMode, setViewMode] = useState("list"); // "grid" or "list"

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const products = [
      {
        name: "حذاء الجري للسيدات",
        isGift: false,
        title: "إيبيك رياكت فلايكنيت",
        price: 150,
        rate: 4,
        shortDesc:
          "وسادة نايك إيبيك رياكت فلايكنيت توفر الراحة والاستجابة، فهي خفيفة الوزن، متينة وناعمة. هذا التصميم يضيف إحساسًا ممتعًا أثناء الجري ويعزز شعورك بالتقدم للأمام.",
        img: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C5158Q5XbN1L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
        colors: ["yellow", "orange", "orangered"],
        sizes: ["S", "L", "XL", "XXL"],
        quantity: 1
      },{
        name: "حذاء الجري للسيدات",
        isGift: false,
        title: "إيبيك رياكت فلايكنيت",
        price: 150,
        rate: 4,
        shortDesc:
          "وسادة نايك إيبيك رياكت فلايكنيت توفر الراحة والاستجابة، فهي خفيفة الوزن، متينة وناعمة. هذا التصميم يضيف إحساسًا ممتعًا أثناء الجري ويعزز شعورك بالتقدم للأمام.",
        img: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C5158Q5XbN1L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
        colors: ["yellow", "orange", "orangered"],
        sizes: ["S", "L", "XL", "XXL"],
        quantity: 1
      },{
        name: "حذاء الجري للسيدات",
        isGift: false,
        title: "إيبيك رياكت فلايكنيت",
        price: 150,
        rate: 4,
        shortDesc:
          "وسادة نايك إيبيك رياكت فلايكنيت توفر الراحة والاستجابة، فهي خفيفة الوزن، متينة وناعمة. هذا التصميم يضيف إحساسًا ممتعًا أثناء الجري ويعزز شعورك بالتقدم للأمام.",
        img: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C5158Q5XbN1L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
        colors: ["yellow", "orange", "orangered"],
        sizes: ["S", "L", "XL", "XXL"],
        quantity: 1
      },{
        name: "حذاء الجري للسيدات",
        isGift: false,
        title: "إيبيك رياكت فلايكنيت",
        price: 150,
        rate: 4,
        shortDesc:
          "وسادة نايك إيبيك رياكت فلايكنيت توفر الراحة والاستجابة، فهي خفيفة الوزن، متينة وناعمة. هذا التصميم يضيف إحساسًا ممتعًا أثناء الجري ويعزز شعورك بالتقدم للأمام.",
        img: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C5158Q5XbN1L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
        colors: ["yellow", "orange", "orangered"],
        sizes: ["S", "L", "XL", "XXL"],
        quantity: 1
      },{
        name: "حذاء الجري للسيدات",
        isGift: false,
        title: "إيبيك رياكت فلايكنيت",
        price: 150,
        rate: 4,
        shortDesc:
          "وسادة نايك إيبيك رياكت فلايكنيت توفر الراحة والاستجابة، فهي خفيفة الوزن، متينة وناعمة. هذا التصميم يضيف إحساسًا ممتعًا أثناء الجري ويعزز شعورك بالتقدم للأمام.",
        img: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C5158Q5XbN1L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
        colors: ["yellow", "orange", "orangered"],
        sizes: ["S", "L", "XL", "XXL"],
        quantity: 1
      },{
        name: "حذاء الجري للسيدات",
        isGift: false,
        title: "إيبيك رياكت فلايكنيت",
        price: 150,
        rate: 4,
        shortDesc:
          "وسادة نايك إيبيك رياكت فلايكنيت توفر الراحة والاستجابة، فهي خفيفة الوزن، متينة وناعمة. هذا التصميم يضيف إحساسًا ممتعًا أثناء الجري ويعزز شعورك بالتقدم للأمام.",
        img: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C5158Q5XbN1L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
        colors: ["yellow", "orange", "orangered"],
        sizes: ["S", "L", "XL", "XXL"],
        quantity: 1
      },
  ]
  return (
    <div className="products px-12">
      <div className="title w-fit mx-auto mt-12 pr">منتجات العسل

      <div className="wave"></div></div>
      <div className="df-c mt-20 p-8 prods bg-white">
        <div className="df sm-df-c m-df-c sm-g-3">
          <div className="df mx-auto">
          <img src="/img/logo.png" alt="" className="w-12 mx-auto" srcset="" />
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
              <div className="df sdnone">
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
              className={`df flex-wrap !justify-start !gap-6 p-5 pr`}
            >
              {
                products.map((prod,index) => {
                  return (
                    <Product product={{id:index*100, ...prod}} list={viewMode ==="list"} />

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
  )
}

export default HoneyProductsPages