import { useState } from "react";
import Authentification from "../../components/Modal/Authentification";
import ModalContainer from "../../components/Modal/ModalContainer";
import useModal from "../../hooks/useModal";
import "./checkout.css";
import { GiCheckMark } from "react-icons/gi";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoWhatsapp, IoMdStar } from "react-icons/io";
import { GoComment, GoReport } from "react-icons/go";
import { Link } from "react-router-dom";
import { Add, PhoneAndroid } from "@mui/icons-material";

function Checkout() {
    const [selectedPayment, setSelectedPayment] = useState("");
    const [coupan, setDispalycoupan] = useState(false);
    const [coupanvalue, setCoupanvalue] = useState(false);
    const [selectedMandoub, setSelectedMandoub] = useState("");
    const [shippingAddress, setShippingAddress] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        government: ""
    });
    const [billingAddress, setBillingAddress] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        government: ""
    });

    const handleSelect = (value) => {
        setSelectedPayment(value);
    };
    const handleSelectMandoub = (value) => {
        setSelectedPayment(value);
    };

    const handleShippingChange = (e) => {
        const { name, value } = e.target;
        setShippingAddress((prev) => ({ ...prev, [name]: value }));
    };

    const handleBillingChange = (e) => {
        const { name, value } = e.target;
        setBillingAddress((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        console.log("Shipping Address:", shippingAddress);
        console.log("Billing Address:", billingAddress);
        console.log("Selected Payment:", selectedPayment);
    };

    const { modalOpen, close, open } = useModal();

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
        <div className="container-padding mt-20">
            <ModalContainer>
                {modalOpen && (
                    <Authentification
                        modalOpen={modalOpen}
                        handleClose={close}
                    />
                )}
            </ModalContainer>
            <div className="title" onClick={open}>checkout</div>

            <div className="df w-full ai-stretch checkout">
                <div className="df-c !w-1/2">
                <div className="df-c !gap-12 contact p-4 bg-white" >
                    <div className="title">phone number</div>
                    <div className="df pr">
                        <input type="text" className="input ser-in !w-full" />
                        <PhoneAndroid className="ser" />
                    </div>

                </div>
                    <div
                        className={`df-c indic ${shippingAddress.fullName.trim() &&
                                shippingAddress.email.trim() &&
                                shippingAddress.phoneNumber.trim() &&
                                shippingAddress.government.trim()
                                ? "filled"
                                : ""
                            }`}
                    >
                        <span className="filledindic"></span>
                        
                        {/* <div className="p-8 w-full df-c">
                            <div className="df-c !gap-3">
                            <label htmlFor="shippingFullName">الاسم الكامل</label>
                            <input
                            type="text"
                            className="input"
                            name="fullName"
                            value={shippingAddress.fullName}
                                    onChange={handleShippingChange}
                                />
                            </div>
                            <div className="df-c !gap-3">
                                <label htmlFor="shippingEmail">البريد الإلكتروني</label>
                                <input
                                    type="text"
                                    className="input"
                                    name="email"
                                    value={shippingAddress.email}
                                    onChange={handleShippingChange}
                                />
                            </div>
                            <div className="df-c !gap-3">
                                <label htmlFor="shippingPhoneNumber">رقم الهاتف</label>
                                <input
                                    type="text"
                                    className="input"
                                    name="phoneNumber"
                                    value={shippingAddress.phoneNumber}
                                    onChange={handleShippingChange}
                                />
                            </div>
                            <div className="df-c !gap-3">
                                <label htmlFor="shippingGovernment">المحافظة</label>
                                <input
                                    type="text"
                                    className="input"
                                    name="government"
                                    value={shippingAddress.government}
                                    onChange={handleShippingChange}
                                />
                            </div>
                        </div> */}
                        <div className="df-c bg-white p-4">
                        <div className="title2 ">معلومات الشحن</div>
                        <div className="df flex-wrap mt-8">
                        <div className="adressbox">
                        <div className="df-c">
                            <div className="title ">billing </div>
                            <p>
                            2231 Kidd Avenue, AK, Kipnuk, 99614, United States
                            </p>
                        </div>
                    </div><div className="adressbox">
                        <div className="df-c">
                            <div className="title ">billing </div>
                            <p>
                            2231 Kidd Avenue, AK, Kipnuk, 99614, United States
                            </p>
                        </div>
                    </div><div className="adressbox">
                        <div className="df-c">
                            <div className="title ">billing </div>
                            <p>
                            2231 Kidd Avenue, AK, Kipnuk, 99614, United States
                            </p>
                        </div>
                    </div>
                        </div>
                        </div>
                    </div>


                    <div className={`df-c mt-8 indic ${(
                        billingAddress.fullName.trim() &&
                        billingAddress.email.trim() &&
                        billingAddress.phoneNumber.trim() &&
                        billingAddress.government.trim()
                    ) ? "filled" : ""}`}>
                        <span className="filledindic"></span>
                        {/* <div className="title2">عنوان الفاتورة</div>
                        <div className="p-8 w-full df-c">
                            <div className="df-c !gap-3">
                                <label htmlFor="billingFullName">الاسم الكامل</label>
                                <input type="text" className="input" name="fullName" value={billingAddress.fullName} onChange={handleBillingChange} />
                            </div>
                            <div className="df-c !gap-3">
                                <label htmlFor="billingEmail">البريد الإلكتروني</label>
                                <input type="text" className="input" name="email" value={billingAddress.email} onChange={handleBillingChange} />
                            </div>
                            <div className="df-c !gap-3">
                                <label htmlFor="billingPhoneNumber">رقم الهاتف</label>
                                <input type="text" className="input" name="phoneNumber" value={billingAddress.phoneNumber} onChange={handleBillingChange} />
                            </div>
                            <div className="df-c !gap-3">
                                <label htmlFor="billingGovernment">المحافظة</label>
                                <input type="text" className="input" name="government" value={billingAddress.government} onChange={handleBillingChange} />
                            </div>
                        </div> */}
                        <div className="df-c bg-white p-4">
                        <div className="title2 ">معلومات الشحن</div>
                        <div className="df flex-wrap mt-8">
                        <div className="adressbox">
                        <div className="df-c">
                            <div className="title ">billing </div>
                            <p>
                            2231 Kidd Avenue, AK, Kipnuk, 99614, United States
                            </p>
                        </div>
                    </div><div className="adressbox">
                        <div className="df-c">
                            <div className="title ">billing </div>
                            <p>
                            2231 Kidd Avenue, AK, Kipnuk, 99614, United States
                            </p>
                        </div>
                    </div><div className="adressbox">
                        <div className="df-c">
                            <div className="title ">billing </div>
                            <p>
                            2231 Kidd Avenue, AK, Kipnuk, 99614, United States
                            </p>
                        </div>
                    </div>
                        </div>
                        </div>
                    </div>

                    <div className={`df-c mt-8 indic ${(
                        selectedPayment
                    ) ? "filled" : ""}`}>
                        <span className="filledindic"></span>
                        <div className="title2">طرق الدفع</div>
                        <div className="p-8 w-full ">
                            <div className="df wrap mt-4 w-full justify-around">
                                <label
                                    htmlFor="payment1"
                                    className={`df-c payment-label ${selectedPayment === "payment1" ? "selected" : ""}`}
                                >
                                    <div className="payment-card !w-44 !h-28">
                                        <img src="/img/cash.jpg" alt="نقداً" />
                                    </div>
                                    <span className="ta-c font-bold text-sm ">نقداً</span>
                                    <input
                                        type="radio"
                                        name="payment"
                                        id="payment1"
                                        value="payment1"
                                        onChange={() => handleSelect("payment1")}
                                        checked={selectedPayment === "payment1"}
                                    />
                                </label>

                                <label
                                    htmlFor="payment2"
                                    className={`df-c payment-label ${selectedPayment === "payment2" ? "selected" : ""}`}
                                >
                                    <div className="payment-card !w-44 !h-28">
                                        <img src="https://w7.pngwing.com/pngs/962/794/png-transparent-mastercard-credit-card-mastercard-logo-mastercard-logo-love-text-heart-thumbnail.pnglook for a product" alt="ماستر كارد" />
                                    </div>
                                    <span className="ta-c font-bold text-sm">ماستر كارد</span>
                                    <input
                                        type="radio"
                                        name="payment"
                                        id="payment2"
                                        value="payment2"
                                        onChange={() => handleSelect("payment2")}
                                        checked={selectedPayment === "payment2"}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex1">
                    <div className="df ta-c men font-bold">
                        <div className="product flex1 ">المنتج</div>
                        <div className="qte w-1/5">الكمية</div>
                        <div className="price w-1/5">السعر</div>
                    </div>
                    <div className="cardcontent !h-auto">
                        {products.map(product => (
                            <div key={product.prodid} className="product-cart">
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
                                <div className="but w-1/5 ta-c">
                                    {!product.isGift && (
                                        <div className="df-c">
                                            <div className="df"><span className="font-bold">1</span> </div>

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
                        <div className="df ta-c men w-full mr-auto font-bold">
                            <div className="product flex1 ta-c">المنتج</div>
                        </div>
                        <div className="df jc-sb ">
                            <div>المجموع الفرعي</div>
                            <div><div className="prodPr">120.24</div></div>
                        </div>
                        <div className="df jc-sb ">
                            <div>الهدايا</div>
                            <div><div className="prodPr">x 2</div></div>
                        </div>
                        <div className="df jc-sb">
                            <div>رسوم الشحن</div>
                            <div><div className="prodPr">50</div></div>
                        </div>
                        <div className="df jc-sb bg-amber-200 p-4">
                            {!coupan && !coupanvalue &&<><div className="cursor-pointer" onClick={()=>setDispalycoupan(true)}>do you have a coupan?</div>
                            </>}
                            {
                                coupan && !coupanvalue &&  <>
                                <div className="df pr">
                                    <input type="text" className="input ser-in" />
                                    <Add className="ser" onClick={()=>setCoupanvalue(10)} />
                                </div>
                                </>
                            }
                            {
                                coupanvalue && <>
                                <><div className="cursor-pointer" onClick={()=>{setDispalycoupan(false); setCoupanvalue(false)}}>discount</div>
                                <div><div className="prodPr">10 %</div></div></>
                                </>
                            }
                        </div>

                        <div className="df jc-sb">
                            <div>المجموع الكلي</div>
                            <div><div className="prodPr">170</div></div>
                        </div>
                    </div>
                    <div className="title2 mt-12">اختر مندوبك المفضل</div>
                    <div className="df-c mandoub-list mt-8">
                        <label htmlFor="mandoub1" className={`mandoub df ai-stretch payment-label ${selectedPayment === "mandoub1" ? "selected" : ""}`}>
                            <input
                                type="radio"
                                name="mandoub"
                                id="mandoub1"
                                value="mandoub1"
                                className="dnone"
                                onChange={() => handleSelectMandoub("mandoub1")}
                                checked={selectedMandoub === "mandoub1"}
                            />
                            <div className="mandoub-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQLwDqDwd2JfzifvfBTFT8I7iKFFevcedYg&s" />
                            </div>
                            <div className="flex1 pr py-1">
                                <div className="df">
                                    <div className="font-bold !text-xl">محمد علي</div> <div className="prodPr">#7586</div>

                                </div>
                                <div className="df mt-2">
                                    <div className="rate df !gap-1">4.3 <IoMdStar className="!text-white" /></div> -
                                    <div className=" df !gap-1 text-sm">(98)  <GoComment className="" /></div> -
                                    <div className=" df !gap-1 text-sm">(0)  <GoReport /></div>
                                </div>
                                <p className="desc-cart mt-2 !h-auto">لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت. أركيتيكتو ريروم موليتيا نومكوام أوبكياتي موليسيتي! فيتاي بلاسيت إي سولوتا ريسييينديس إمبيديت!</p>
                                <Link to={"/team/#7586"} className="link-sec">معرفة المزيد عن هذا المندوب</Link>
                                <div className="df med">
                                    <IoLogoWhatsapp />
                                    <IoLogoTwitter />
                                    <IoLogoInstagram />
                                    <IoLogoFacebook />
                                </div>
                            </div>
                        </label>
                        <label htmlFor="mandoub2" className={`mandoub df ai-stretch payment-label ${selectedPayment === "mandoub2" ? "selected" : ""}`}>
                            <input
                                type="radio"
                                name="mandoub"
                                id="mandoub2"
                                value="mandoub2"
                                className="dnone"
                                onChange={() => handleSelectMandoub("mandoub2")}
                                checked={selectedMandoub === "mandoub2"}
                            />
                            <div className="mandoub-img">
                                <img src="https://cdn.pixabay.com/photo/2023/08/27/13/42/man-8217116_640.jpg" />
                            </div>
                            <div className="flex1 pr py-1">
                                <div className="df">
                                    <div className="font-bold !text-xl">منير عبيدي</div>
                                    <div className="prodPr">#6701</div>
                                </div>
                                <div className="df mt-2">
                                    <div className="rate df !gap-1">3.5 <IoMdStar className="!text-white" /></div> -
                                    <div className=" df !gap-1 text-sm">(6)  <GoComment className="" /></div> -
                                    <div className=" df !gap-1 text-sm">(1)  <GoReport /></div>
                                </div>
                                <p className="desc-cart mt-2 !h-auto">لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت. أركيتيكتو ريروم موليتيا نومكوام أوبكياتي موليسيتي! فيتاي بلاسيت إي سولوتا ريسييينديس إمبيديت!</p>
                                <p className="link-sec">معرفة المزيد عن هذا المندوب</p>
                                <div className="df med">
                                    <IoLogoWhatsapp />
                                    <IoLogoTwitter />
                                    <IoLogoInstagram />
                                    <IoLogoFacebook />
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="btn mr-auto mt-10" onClick={handleSubmit}>
                        إرسال
                        <div className="ic">
                            <GiCheckMark />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;
