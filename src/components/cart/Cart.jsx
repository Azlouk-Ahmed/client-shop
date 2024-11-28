import { GiBee, GiStorkDelivery } from "react-icons/gi";
import "./card.css";
import { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { GoTrash } from "react-icons/go";
import { Link } from "react-router-dom";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  // Define the products array
  const products = [
    {
      prodid: 1,
      isGift: false,
      name: "برطمان عسل",
      price: 9.99,
      rate: 4,
      img: "/img/product1.png",
      quantity: 1
    },
    {
      prodid: 2,
      isGift: false,
      rate: 3,
      name: "شمعة شمع النحل",
      price: 14.99,
      img: "/img/product1.png",
      quantity: 2
    },
    {
      prodid: 3,
      isGift: true,
      name: "حبوب لقاح النحل",
      rate: 4.5,
      price: 19.99,
      img: "/img/spoon.png",
      quantity: 1
    }
  ];

  return (
    <div className={`cart ${isOpen ? "toggled" : ""}`}>
      <div className="holder cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="indicat">3</div>
      <div className="toggler" ><GiBee /> </div>
      </div>
        <div className="df ta-c men font-bold">
          <div className="product flex1 ">المنتج</div>
          <div className="qte w-1/5">الكمية</div>
          <div className="price w-1/5">السعر</div>
        </div>
      <div className="cardcontent">
        {products.map(product => (
          <div key={product.prodid} className="product-cart bg-white p-4">
            <div className="product-img">
              {product.isGift && <img src="/img/gift.png" alt="" className="gifted" srcSet="" />}
              <img src="/img/polygon.png" alt="" className="poly" srcSet="" />
              <img src={product.img} alt={product.name} className="product-cart-img" />
            </div>
            <div className="details-cart-prod flex1">
              <div className="font-bold">{product.name}</div>
              <div className="df mt-2">
                <div className="prodPr"> ${product.price.toFixed(2)}</div> - <div className="rate df !gap-1">{product.rate} <IoMdStar className="!text-white"/></div>
              </div>
              <p className="desc-cart">لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت. أركيتيكتو ريروم موليتيا نومكوام أوبكياتي موليسيتي! فيتاي بلاسيت إي سولوتا ريسييينديس إمبيديت!</p>
            </div>
            <div className="but w-1/5 ta-c">
              {!product.isGift && (
                <div className="df-c">
                  <div className="df"><div className="contr"><span>+</span></div> <span className="font-bold">1</span> <div className="contr"><span>-</span></div></div>
                  <span className="df justify-center">
                    <GoTrash />
                    إزالة
                  </span>  
                </div>           
              )}
              {product.isGift && (
                <span className="font-bold">1</span>       
              )}
            </div>
            <div className="but w-1/5 ta-c">
              <div className="prodPr">{(!product.isGift) ? product.price * product.quantity : "مجاني"}</div>
            </div>
          </div>
        ))}
        <div className="df ta-c men w-1/2 mr-auto font-bold">
          <div className="product flex1 ta-c">المنتج</div>
        </div>
        <div className="df jc-sb w-1/2 mr-auto">
          <div>الإجمالي</div>
          <div><div className="prodPr">120.24</div></div>
        </div>
        <div className="df jc-sb w-1/2 mr-auto">
          <div>الهدايا</div>
          <div><div className="prodPr">x 2</div></div>
        </div>
        <Link to ="/checkout" className="btn !w-1/2 jc-sb mr-auto">
          المتابعة إلى الدفع
          <div className="ic">
            <GiStorkDelivery />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
