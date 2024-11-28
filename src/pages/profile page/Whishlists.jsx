import { CiBookmarkRemove, CiShoppingBasket } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";

function Whishlists() {
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
    <div className="df-c">
      <div className="cardcontent  !h-auto">
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
                                        <div className="prodPr"> ${product.price.toFixed(2)}</div> - <div className="rate df !gap-1">{product.rate} <IoMdStar className="!text-white" /></div>
                                    </div>
                                    <p className="desc-cart">لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت. أركيتيكتو ريروم موليتيا نومكوام أوبكياتي موليسيتي! فيتاي بلاسيت إي سولوتا ريسييينديس إمبيديت!</p>
                                </div>
                                
                                <div className="but w-1/5 ta-c font-bold text-2xl cursor-pointer">
                                    <div className="df"><CiBookmarkRemove /> <CiShoppingBasket /></div>
                                </div>
                            </div>
                        ))}
                    </div>
    </div>
  )
}

export default Whishlists