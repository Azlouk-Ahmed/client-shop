import { IoIosCart } from "react-icons/io";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";
import Stars from "../stars rate/Stars";

function Product({ list, prod }) {
  const {dispatch} = useCartContext();
  const [isAnimating, setIsAnimating] = useState(false);
  const flyOutImageRef = useRef(null);

  

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
            <img src="/img/logo.png" alt="" className="prod-logo" srcSet="" />

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
            {prod.price} ر.ي
            
          </div> 
          <div className="df w-fit">
            <Stars number={4} /> - <div className="prodPr">300 كغ</div>
          </div>
          <div className="btn mt-8" onClick={handleAddToCart}>
            أضف إلى السلة
            <div className="ic">
              <IoIosCart />
            </div>
          </div>
          
        </motion.div>
      )}

      {/* {list && (
        <motion.div
        className="product-cart bg-white px-8 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        >
          <div className="product-img">
        <img src="/img/logo.png" alt="" className="prod-logo" srcSet="" />
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
              <div className="prodPr"> ر.ي{prod.price}</div> -{" "}
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
      )} */}
    </>
  );
}

export default Product;