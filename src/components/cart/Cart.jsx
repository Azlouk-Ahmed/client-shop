import { GiBee, GiStorkDelivery } from "react-icons/gi";
import "./card.css";
import { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { GoTrash } from "react-icons/go";
import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";
import Empty from "../empty/Empty";
import { motion, AnimatePresence } from 'framer-motion';
import SuccessNotification from "../notifications/SuccessNotification";
import WarningNotification from "../notifications/WarningNotification";
import ErrorNotification from "../notifications/ErrorNotification";

function Cart() {
const itemVariants = {
hidden: { opacity: 0, x: 50 },
visible: { opacity: 1, x: 0 },
exit: { opacity: 0, x: 50, transition: { duration: 0.5, ease: "easeInOut" } },
};
const [showSuccessNotification, setshowSuccessNotification] = useState(false);
const [showWarningNotification, setshowWarningNotification] = useState(false);
const [showErrorNotification, setshowErrorNotification] = useState(false);
const [warningMessage, setwarningMessage] = useState("");

const handleshowSuccessNotification = () => {
  setshowWarningNotification(false);
  setshowErrorNotification(false);
setshowSuccessNotification(true);
setTimeout(() => setshowSuccessNotification(false), 10000); // Automatically close after 3 seconds
};
const handleshowWarningNotification = () => {
  setshowSuccessNotification(false)
  setshowErrorNotification(false)
setshowWarningNotification(true);
setTimeout(() => setshowWarningNotification(false), 10000); // Automatically close after 3 seconds
};
const handleshowErrorNotification = () => {
  setshowWarningNotification(false)
  setshowSuccessNotification(false)
setshowErrorNotification(true);
setTimeout(() => setshowErrorNotification(false), 10000); // Automatically close after 3 seconds
};
const [isOpen, setIsOpen] = useState(false);
const { cart, dispatch } = useCartContext();

// Gift arrays grouped by level
const giftLevels = {
level1: [
{ id: 10,giftLevel: 1, isGift: true, name: "برطمان عسل", price: 0, rate: 4, shortDesc: "لوريم إيبسوم دولار سيت أميت...", img: "/img/spoon.png", quantity: 1 },
{ id: 20,giftLevel: 1, isGift: true, name: "صندوق شوكولاتة", price: 0, rate: 5, shortDesc: "لوريم إيبسوم دولار سيت أميت...", img: "/img/spoon.png", quantity: 1 },
{ id: 30,giftLevel: 1, isGift: true, name: "مجموعة زهور", price: 0, rate: 4.5, shortDesc: "لوريم إيبسوم دولار سيت أميت...", img: "/img/spoon.png", quantity: 1 },
],
level2: [
{ id: 4,giftLevel: 2, isGift: true, name: "ساعة يد", price: 0, rate: 5, shortDesc: "لوريم إيبسوم دولار سيت أميت...", img: "/img/product4.png", quantity: 1 },
{ id: 5,giftLevel: 2, isGift: true, name: "محفظة جلدية", price: 0, rate: 4.7, shortDesc: "لوريم إيبسوم دولار سيت أميت...", img: "/img/product5.png", quantity: 1 },
{ id: 6,giftLevel: 2, isGift: true, name: "عطر فاخر", price: 0, rate: 4.8, shortDesc: "لوريم إيبسوم دولار سيت أميت...", img: "/img/product6.png", quantity: 1 },
],
level3: [
{ id: 7,giftLevel: 3, isGift: true, name: "حقيبة سفر", price: 0, rate: 4.9, shortDesc: "لوريم إيبسوم دولار سيت أميت...", img: "/img/product7.png", quantity: 1 },
{ id: 8,giftLevel: 3, isGift: true, name: "لابتوب", price: 0, rate: 5, shortDesc: "لوريم إيبسوم دولار سيت أميت...", img: "/img/product8.png", quantity: 1 },
{ id: 9,giftLevel: 3, isGift: true, name: "سماعات رأس", price: 0, rate: 4.6, shortDesc: "لوريم إيبسوم دولار سيت أميت...", img: "/img/product9.png", quantity: 1 },
],
};

const totalPrice = cart.reduce((total, product) => {
return total + product.price * product.quantity;
}, 0);
const TotalKG = cart.reduce((total, product) => {
  return total + (typeof product?.weightInKg === "number" && !isNaN(product.weightInKg) ? product.weightInKg * product.quantity : 0);
}, 0);


const addGiftsToCart = () => {

if(100 - TotalKG <= 10 && 100 - TotalKG > 0 ) {
  setwarningMessage(`أنت على بعد ${(100 - TotalKG).toFixed(2)} كجم من هديتك من المستوى 1`);
  handleshowWarningNotification();
}
if(200 - TotalKG <= 10 && 200 - TotalKG > 0 ) {
  setwarningMessage(`أنت على بعد ${(200 - TotalKG).toFixed(2)} كجم من هديتك من المستوى 2`);
  handleshowWarningNotification();
}
if(300 - TotalKG <= 10 && 300 - TotalKG > 0 ) {
  setwarningMessage(`أنت على بعد ${(300 - TotalKG).toFixed(2)} كجم من هديتك من المستوى 3`);
  handleshowWarningNotification();
}

if (TotalKG >= 100 && !cart.some((item) =>item.isGift)) {
  const randomGift1 = giftLevels.level1[Math.floor(Math.random() * giftLevels.level1.length)];
    if (!cart.some(item => item.id === randomGift1.id)) {
      dispatch({ type: "ADD_PRODUCT", payload: randomGift1 });
      handleshowSuccessNotification();
    }
  }
  if (TotalKG >= 200 && !cart.some((item) =>item.giftLevel === 2)) {
    console.log("200 reched !");
    const randomGift2 = giftLevels.level2[Math.floor(Math.random() * giftLevels.level2.length)];
    if (!cart.some(item => item.id === randomGift2.id)) {
      dispatch({ type: "ADD_PRODUCT", payload: randomGift2 });
      handleshowSuccessNotification();
    }
  }
  if (TotalKG >= 300 && !cart.some((item) =>item.giftLevel === 3)) {
    const randomGift3 = giftLevels.level3[Math.floor(Math.random() * giftLevels.level3.length)];
    if (!cart.some(item => item.id === randomGift3.id)) {
      dispatch({ type: "ADD_PRODUCT", payload: randomGift3 });
      handleshowSuccessNotification();
}
}
};

useEffect(() => {
  addGiftsToCart();

  if (TotalKG < 100) {
    const level1Gifts = cart.filter((item) => item.isGift);
    if (level1Gifts.length > 0) {
      level1Gifts.map((item) => dispatch({ type: "REMOVE_PRODUCT", payload: item }));
      handleshowErrorNotification();
    }
  } else if (TotalKG >= 100 && TotalKG < 200) {
    const level2Gifts = cart.filter((item) => item.isGift && item.giftLevel === 2);
    if (level2Gifts.length > 0) {
      level2Gifts.map((item) => dispatch({ type: "REMOVE_PRODUCT", payload: item }));
      handleshowErrorNotification();
    }
  } else if (TotalKG >= 200 && TotalKG < 300) {
    const level3Gifts = cart.filter((item) => item.isGift && item.giftLevel === 3);
    if (level3Gifts.length > 0) {
      level3Gifts.map((item) => dispatch({ type: "REMOVE_PRODUCT", payload: item }));
      handleshowErrorNotification();
    }
  }
}, [TotalKG]);


    const giftCount = cart.filter(product => product.isGift).length;

    return (
    <div className={`cart ${isOpen ? "toggled" : "" } ${cart.length===0 ? "df !items-center !justify-center" : "" }`}>
      {showSuccessNotification && (
      <SuccessNotification message="تهانينا! لقد حصلت للتو على هدية!" img={"/img/successbee.jpg"} onClose={()=> setshowSuccessNotification(false)}
        />
        )}
      {showWarningNotification && (
      <WarningNotification message={warningMessage} img={"/img/successbee.jpg"} onClose={()=> setshowWarningNotification(false)}
        />
        )}
      {showErrorNotification && (
      <ErrorNotification message={"لقد فقدت هديتك للتو"} img={"/img/successbee.jpg"} onClose={()=> setshowErrorNotification(false)}
        />
        )}
        <div className="holder cursor-pointer" onClick={()=> setIsOpen(!isOpen)}>
          {cart.length > 0 && <div className="indicat">{cart.length}</div>}
          <div className="toggler">
            <GiBee />
          </div>
        </div>
        {cart.length > 0 && (

        <>
          <div className="df ta-c men font-bold">
            <div className="product flex1">المنتج</div>
            <div className="qte w-1/5">الكمية</div>
            <div className="price w-1/5">السعر</div>
          </div>
          <div className="cardcontent">
            <AnimatePresence>
              {cart.map(product => (
              <motion.div key={product.id} className="product-cart bg-white p-4" variants={itemVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.4, ease: 'easeInOut' }}>
                <div className="product-img">
                  {product.isGift && <img src="/img/gift.png" alt="" className="gifted" />}
                  <img src="/img/polygon.png" alt="" className="poly" />
                  <img src={product.img} alt={product.name} className="product-cart-img" />
                </div>
                <div className="details-cart-prod flex1">
                  <div className="font-bold">{product.name}</div>
                  {product.weightInKg &&(
                    <>
                      <div className="df">
                      <div className="desc-cart !h-auto">الكمية الإجمالية : </div>
                      <div className="prodPr">كغ {product.weightInKg.toFixed(2) * product.quantity}</div>
                      </div>
                    </>
                    )}
                  {product.isGift && (<div className="status paid">مستوى الهدية : {product.giftLevel}</div>)}
                  <div className="df mt-2">
                  {/* <div className="df sm-w-full sm-justify-sb">
              <div>حالة الدفع :</div>
              <div className="status paid">مدفوع</div>
            </div> */}
                    <div className="prodPr">${product.price.toFixed(2)}</div> -
                    <div className="rate df !gap-1">{product.rate}
                      <IoMdStar className="!text-white" />
                    </div> 
                  </div>
                  <p className="desc-cart">{product.shortDesc}</p>
                </div>
                <div className="but w-1/5 ta-c">
                  {!product.isGift && (
                  <div className="df-c">
                    <div className="df">
                      <div className="contr">
                        <span onClick={()=> dispatch({ type: "INCREASE_QUANTITY", payload: product })}>+</span>
                      </div>
                      <span className="font-bold">{product.quantity}</span>
                      <div className="contr">
                        <span onClick={()=> dispatch({ type: "DECREASE_QUANTITY", payload: product })}>-</span>
                      </div>
                    </div>
                    <span className="df justify-center" onClick={()=> dispatch({ type: "REMOVE_PRODUCT", payload: product })}>
                      <GoTrash /> إزالة
                    </span>
                  </div>
                  )}
                  {product.isGift && <span className="font-bold">1</span>}
                </div>
                <div className="but w-1/5 ta-c">
                  <div className="prodPr">{!product.isGift ? product.price * product.quantity : "مجاني"}</div>
                </div>
              </motion.div>
              ))}
            </AnimatePresence>
            {/* Dynamic Summary Section */}
            <div className="df ta-c men w-1/2 mr-auto font-bold sub-bill">
              <div className="product flex1 ta-c">المنتج</div>
            </div>
            <div className="df jc-sb w-1/2 mr-auto sub-bill">
              <div>إجمالي الكيلوغرام</div>
              <div>
                <div className="prodPr">كغ{TotalKG.toFixed(2)}</div>
              </div>
            </div>
            <div className="df jc-sb w-1/2 mr-auto sub-bill">
              <div>الإجمالي</div>
              <div>
                <div className="prodPr">${totalPrice.toFixed(2)}</div>
              </div>
            </div>
            {giftCount > 0 && (
            <div className="df jc-sb w-1/2 mr-auto sub-bill">
              <div>الهدايا</div>
              <div>
                <div className="prodPr">x {giftCount}</div>
              </div>
            </div>
            )}
            <Link to="/checkout" className="btn !w-1/2 jc-sb mr-auto sub-bill">
            المتابعة إلى الدفع
            <div className="ic">
              <GiStorkDelivery />
            </div>
            </Link>
          </div>
        </>
        )}
        {cart.length === 0 &&
        <Empty />}
    </div>
    );
    }

export default Cart;