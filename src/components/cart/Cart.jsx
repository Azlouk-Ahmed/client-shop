import { GiBee, GiStorkDelivery } from "react-icons/gi";
import "./card.css";
import { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { GoTrash } from "react-icons/go";
import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";
import Empty from "../empty/Empty";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, dispatch } = useCartContext();

  // Calculate total price
  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  // Count gift items
  const giftCount = cart.filter(product => product.isGift).length;

  return (
    <div className={`cart ${isOpen ? "toggled" : ""} ${cart.length === 0 ? "df !items-center !justify-center" : ""}`}>
      <div className="holder cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {cart.length > 0 && <div className="indicat">{cart.length}</div>}
        <div className="toggler"><GiBee /></div>
      </div>
      {cart.length > 0 && (
        <>
          <div className="df ta-c men font-bold">
            <div className="product flex1">المنتج</div>
            <div className="qte w-1/5">الكمية</div>
            <div className="price w-1/5">السعر</div>
          </div>
          <div className="cardcontent">
            {cart.map(product => (
              <div key={product.prodid} className="product-cart bg-white p-4">
                <div className="product-img">
                  {product.isGift && <img src="/img/gift.png" alt="" className="gifted" />}
                  <img src="/img/polygon.png" alt="" className="poly" />
                  <img src={product.img} alt={product.name} className="product-cart-img" />
                </div>
                <div className="details-cart-prod flex1">
                  <div className="font-bold">{product.name}</div>
                  <div className="df mt-2">
                    <div className="prodPr">${product.price.toFixed(2)}</div> - 
                    <div className="rate df !gap-1">{product.rate} <IoMdStar className="!text-white" /></div>
                  </div>
                  <p className="desc-cart">لوريم إيبسوم دولور سيت أميت...</p>
                </div>
                <div className="but w-1/5 ta-c">
                  {!product.isGift && (
                    <div className="df-c">
                      <div className="df">
                        <div className="contr">
                          <span onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: product })}>+</span>
                        </div> 
                        <span className="font-bold">{product.quantity}</span> 
                        <div className="contr">
                          <span onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: product })}>-</span>
                        </div>
                      </div>
                      <span className="df justify-center" onClick={() => dispatch({ type: "REMOVE_PRODUCT", payload: product })}>
                        <GoTrash /> إزالة
                      </span>
                    </div>
                  )}
                  {product.isGift && <span className="font-bold">1</span>}
                </div>
                <div className="but w-1/5 ta-c">
                  <div className="prodPr">{!product.isGift ? product.price * product.quantity : "مجاني"}</div>
                </div>
              </div>
            ))}
            {/* Dynamic Summary Section */}
            <div className="df ta-c men w-1/2 mr-auto font-bold sub-bill">
              <div className="product flex1 ta-c">المنتج</div>
            </div>
            <div className="df jc-sb w-1/2 mr-auto sub-bill">
              <div>الإجمالي</div>
              <div><div className="prodPr">${totalPrice.toFixed(2)}</div></div>
            </div>
            {giftCount > 0 && (
              <div className="df jc-sb w-1/2 mr-auto sub-bill">
                <div>الهدايا</div>
                <div><div className="prodPr">x {giftCount}</div></div>
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
      {cart.length === 0 && <Empty />}
    </div>
  );
}

export default Cart;
