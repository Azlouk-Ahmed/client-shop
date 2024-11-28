import { CiBookmarkRemove, CiShoppingBasket } from "react-icons/ci";
import { IoIosCart, IoMdStar } from "react-icons/io";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

function Product({ list }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const flyOutImageRef = useRef(null); // Create a ref for the fly-out image

  const handleAddToCart = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false); // Reset animation state after it ends
    }, 1000); // Match the duration of the animation
  };

  const flyImageVariants = {
    hidden: { opacity: 0.5, scale: 1 },
    visible: {
      opacity: 0.7,
      scale: 0.1,
      x: "100vw",
      transition: { duration: 1, ease: "easeInOut" },
    },
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
            <img src="/img/product1.png" alt="" className="prod" srcSet="" />


            {isAnimating && (
              <motion.img
                ref={flyOutImageRef}
                src="/img/product1.png"
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
          <div className="title mt-12">عسل الجراح</div>
          <div className="title v-p">
            18.8$
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
            >
              <path d="M3,146.1c17.1-8.8,33.5-17.8,51.4-17.8c15.6,0,17.1,18.1,30.2,18.1c22.9,0,36-18.6,53.9-18.6 c17.1,0,21.3,18.5,37.5,18.5c21.3,0,31.8-18.6,49-18.6c22.1,0,18.8,18.8,36.8,18.8c18.8,0,37.5-18.6,49-18.6c20.4,0,17.1,19,36.8,19 c22.9,0,36.8-20.6,54.7-18.6c17.7,1.4,7.1,19.5,33.5,18.8c17.1,0,47.2-6.5,61.1-15.6"></path>
            </svg>
          </div>
          <p className="text-sm mt-5">
            لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيكينغ إيليت. كوم، نون.
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
            <img src={"/img/product1.png"} className="product-cart-img" />
          </div>
          <div className="details-cart-prod flex1">
            <div className="font-bold">some name</div>
            <div className="df mt-2">
              <div className="prodPr"> $152</div> -{" "}
              <div className="rate df !gap-1">
                4 <IoMdStar className="!text-white" />
              </div>
            </div>
            <p className="desc-cart">
              لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت.
              أركيتيكتو ريروم موليتيا نومكوام أوبكياتي موليسيتي! فيتاي بلاسيت إي
              سولوتا ريسييينديس إمبيديت!
            </p>
          </div>

          <div className="but w-1/5 ta-c font-bold text-2xl cursor-pointer">
            <div className="df">
              <CiBookmarkRemove /> <CiShoppingBasket />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Product;