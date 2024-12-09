import { CiBookmarkRemove, CiShoppingBasket } from "react-icons/ci";
import { IoIosCart, IoMdStar } from "react-icons/io";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";

function Product({ list, prod }) {
  const {dispatch} = useCartContext();
  const [isAnimating, setIsAnimating] = useState(false);
  const flyOutImageRef = useRef(null); // Create a ref for the fly-out image

  

  const flyImageVariants = {
    hidden: { opacity: 0.5, scale: 1 },
    visible: {
      opacity: 0.7,
      scale: 0.1,
      x: "100vw",
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

 

  const handleAddToCart = () => {
    dispatch({type : "ADD_PRODUCT", payload : prod})
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false); 
    }, 1000); 
  };


  return (
    <>
      {!list && (
        <motion.div
          className="df-c !gap-0 ta-c ai-c product"
          style={{ direction: "rtl" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="pos"></div>
          <div className="product-img">
            <img src="/img/polygon.png" alt="" className="poly" srcSet="" />
            <img src="/img/shadow.png" alt="" className="shad" srcSet="" />
            <img src={prod.img} alt="" className="prod" srcSet="" />


            {isAnimating && (
              <motion.img
                ref={flyOutImageRef}
                src={prod.img}
                alt=""
                className="fly-out-image"
                initial="hidden"
                animate="visible"
                variants={flyImageVariants}
                onAnimationComplete={() => {
                  setIsAnimating(false);
                }}
              />
            )}
          </div>
          <Link to="/details/15" className="title mt-12">{prod.name}</Link>
          <div className="title v-p">
            {prod.price}$
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
            >
              <path d="M3,146.1c17.1-8.8,33.5-17.8,51.4-17.8c15.6,0,17.1,18.1,30.2,18.1c22.9,0,36-18.6,53.9-18.6 c17.1,0,21.3,18.5,37.5,18.5c21.3,0,31.8-18.6,49-18.6c22.1,0,18.8,18.8,36.8,18.8c18.8,0,37.5-18.6,49-18.6c20.4,0,17.1,19,36.8,19 c22.9,0,36.8-20.6,54.7-18.6c17.7,1.4,7.1,19.5,33.5,18.8c17.1,0,47.2-6.5,61.1-15.6"></path>
            </svg>
          </div>
          <p className="text-sm mt-5">
            {prod.shortDesc}
          </p>
          <div className="btn mt-8" onClick={handleAddToCart}>
            أضف إلى السلة
            <div className="ic">
              <IoIosCart />
            </div>
          </div>
          
        </motion.div>
      )}

      {list && (
        <motion.div
          className="product-cart bg-white px-8 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="product-img">
            <img src="/img/polygon.png" alt="" className="poly" srcSet="" />
            <img src={prod.img} className="product-cart-img" />
            {isAnimating && (
              <motion.img
                ref={flyOutImageRef}
                src={prod.img}
                alt=""
                className="fly-out-image"
                initial="hidden"
                animate="visible"
                variants={flyImageVariants}
                onAnimationComplete={() => {
                  setIsAnimating(false);
                }}
              />
            )}
          </div>
          <div className="details-cart-prod flex1">
            <Link to="/details/15" className="font-bold">{prod.name}</Link>
            <div className="df mt-2">
              <div className="prodPr"> ${prod.price}</div> -{" "}
              <div className="rate df !gap-1">
                4 <IoMdStar className="!text-white" />
              </div>
            </div>
            <p className="desc-cart">
              {
                prod.shortDesc
              }
            </p>
          </div>

          <div className="but w-1/5 ta-c font-bold text-2xl cursor-pointer">
            <div className="df">
              <CiBookmarkRemove /> <CiShoppingBasket onClick={handleAddToCart}/>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Product;