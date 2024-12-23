import { useState } from "react";
import Authentification from "../../components/Modal/Authentification";
import ModalContainer from "../../components/Modal/ModalContainer";
import useModal from "../../hooks/useModal";
import "./checkout.css";
import { GiCheckMark } from "react-icons/gi";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoWhatsapp, IoMdStar } from "react-icons/io";
import { GoComment, GoReport, GoTrash } from "react-icons/go";
import { Link } from "react-router-dom";
import { Add, AddCard, PhoneAndroid, RemoveCircle } from "@mui/icons-material";
import { useCartContext } from "../../hooks/useCartContext";
import Empty from "../../components/empty/Empty";

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
    const {cart, dispatch} = useCartContext();

    const totalPrice = cart.reduce((total, product) => {
        return total + product.price * product.quantity;
        }, 0);
        const TotalKG = cart.reduce((total, product) => {
          return total + (typeof product?.weightInKg === "number" && !isNaN(product.weightInKg) ? product.weightInKg * product.quantity : 0);
        }, 0);

        const giftCount = cart.filter(product => product.isGift).length;
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
    {/* <div className="title" onClick={open}>إتمام الشراء</div> */}

            {cart.length >0 &&(<div className="df w-full sm-df-c ai-stretch checkout">
        <div className="df-c !w-1/2 sm-w-full">
        <div className="df-c !gap-12 contact p-4 bg-white">
            <div className="title">رقم الهاتف</div>
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
                
               
                <div className="df-c bg-white p-4">
                <div className="title2 ">معلومات الشحن</div>
                <div className="df ms-df-c flex-wrap mt-8">
                <div className="adressbox sm-w-full">
                <div className="df-c">
                    <div className="title ">الفوترة</div>
                    <p>
                    2231 Kidd Avenue, AK, Kipnuk, 99614, الولايات المتحدة
                    </p>
                </div>
            </div><div className="adressbox sm-w-full">
                <div className="df-c">
                    <div className="title ">الفوترة</div>
                    <p>
                    2231 Kidd Avenue, AK, Kipnuk, 99614, الولايات المتحدة
                    </p>
                </div>
            </div><div className="adressbox sm-w-full">
                <div className="df-c">
                    <div className="title ">الفوترة</div>
                    <p>
                    2231 Kidd Avenue, AK, Kipnuk, 99614, الولايات المتحدة
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
                <div className="df-c bg-white p-4">
                <div className="title2 ">معلومات الشحن</div>
                <div className="df sm-df-c flex-wrap mt-8">
                <div className="adressbox sm-w-full">
                <div className="df-c">
                    <div className="title ">الفوترة</div>
                    <p>
                    2231 Kidd Avenue, AK, Kipnuk, 99614, الولايات المتحدة
                    </p>
                </div>
            </div><div className="adressbox sm-w-full">
                <div className="df-c">
                    <div className="title ">الفوترة</div>
                    <p>
                    2231 Kidd Avenue, AK, Kipnuk, 99614, الولايات المتحدة
                    </p>
                </div>
            </div><div className="adressbox sm-w-full">
                <div className="df-c">
                    <div className="title ">الفوترة</div>
                    <p>
                    2231 Kidd Avenue, AK, Kipnuk, 99614, الولايات المتحدة
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
                            <div className="df sm-df-c wrap mt-4 w-full justify-around">
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
                                        <img src="/img/mastercard.png" alt="ماستر كارد" />
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
                    {cart.map(product => (
              <div key={product.id} className="product-cart bg-white p-4" initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.4, ease: 'easeInOut' }}>
                <div className="product-img">
                  {product.isGift && <img src="/img/gift.png" alt="" className="gifted" />}
                  <img src="/img/polygon.png" alt="" className="poly" />
                  <img src={product.img} alt={product.name} className="product-cart-img" />
                </div>
                <div className="details-cart-prod flex1">
                  <div className="font-bold">{product.name}</div>
                  {product.weightInKg &&(
                    <>
                      <div className="df sm-w-fit sm-mx-auto">
                      <div className="desc-cart !h-auto">الكمية الإجمالية : </div>
                      <div className="prodPr">كغ {product.weightInKg.toFixed(2) * product.quantity}</div>
                      </div>
                    </>
                    )}
                  {product.isGift && (<div className="status paid">مستوى الهدية : {product.giftLevel}</div>)}
                  <div className="df mt-2">
                    <div className="prodPr">ر.س{product.price.toFixed(2)}</div> -
                    <div className="rate df !gap-1">{product.rate}
                      <IoMdStar className="!text-white" />
                    </div> 
                  </div>
                </div>
                <div className="but w-1/5 ta-c">
                  {!product.isGift && (
                  <div className="df-c">
                    {
                      !product.isFilled && (
                        <div className="df">
                          <div className="contr">
                            <span onClick={()=> dispatch({ type: "INCREASE_QUANTITY", payload: product })}>+</span>
                          </div>
                          <span className="font-bold">{product.quantity}</span>
                          <div className="contr">
                            <span onClick={()=> dispatch({ type: "DECREASE_QUANTITY", payload: product })}>-</span>
                          </div>
                        </div>

                      )
                    }
                    {!product.isGift &&(<span className="df justify-center cursor-pointer" onClick={()=> dispatch({ type: "REMOVE_PRODUCT", payload: product })}>
                      <GoTrash /> إزالة
                    </span>)}
                  </div>
                  )}
                  {product.isGift && <span className="font-bold">1</span>}
                </div>
                <div className="but w-1/5 ta-c">
                  <div className="prodPr">{!product.isGift ? product.price * product.quantity : "مجاني"}</div>
                </div>
              </div>
              ))}
                        <div className="df ta-c men w-full mr-auto font-bold">
                            <div className="product flex1 ta-c">المنتج</div>
                        </div>
                        <div className="df jc-sb sub-bill">
                        <div>إجمالي الكيلوغرام</div>
                        <div>
                            <div className="prodPr">كغ{TotalKG.toFixed(2)}</div>
                        </div>
                        </div>
                        <div className="df jc-sb ">
                            <div>المجموع الفرعي</div>
                            <div><div className="prodPr">ر.س{totalPrice.toFixed(2)}</div></div>
                        </div>
                        {giftCount > 0 && (
                            <div className="df jc-sb sub-bill">
                            <div>الهدايا</div>
                            <div>
                                <div className="prodPr">x {giftCount}</div>
                            </div>
                            </div>
                            )}
                        <div className="df jc-sb">
                            <div>رسوم الشحن</div>
                            <div><div className="prodPr">50</div></div>
                        </div>
                        <div className={`df jc-sb bg-amber-200 p-4 ${coupanvalue ? "bg-success" : ""}`}>
                            {!coupan && !coupanvalue && (
                                <div className="cursor-pointer col-succ df" onClick={() => setDispalycoupan(true)}>
                                    <AddCard />
                                    هل لديك كوبون خصم؟
                                </div>
                            )}
                            {coupan && !coupanvalue && (
                                <div className="df pr w-full">
                                    <input type="text" className="w-full input ser-in" placeholder="أدخل الكوبون هنا" />
                                    <Add className="ser" onClick={() => setCoupanvalue(10)} />
                                </div>
                            )}
                            {coupanvalue && (
                                <>
                                    <div className="df cursor-pointer col-err" onClick={() => { setDispalycoupan(false); setCoupanvalue(false); }}>
                                        <RemoveCircle />
                                        إزالة الكوبون
                                    </div>
                                    <div>
                                        <div className="prodPr">خصم 10%</div>
                                    </div>
                                </>
                            )}
                        </div>


                        <div className="df jc-sb">
                            <div>المجموع الكلي</div>
                            <div>
                                {!coupanvalue &&<div className="prodPr">{`${((totalPrice+ 50).toFixed(2))}`}</div>}
                                {coupanvalue &&<div className="prodPr">{`${((totalPrice.toFixed(2)+ 50)* 0.1).toFixed(2)}`}</div>}
                            </div>
                        </div>
                    </div>
                    <div className="title2 mt-12">اختر مندوبك المفضل</div>
                    <div className="df-c mandoub-list mt-8">
                        <label htmlFor="mandoub1" className={`mandoub df sm-df-c sm-items-center ai-stretch payment-label ${selectedPayment === "mandoub1" ? "selected" : ""}`}>
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
                                <div className="df sm-justify-center">
                                    <div className="font-bold !text-xl">محمد علي</div> <div className="prodPr">#7586</div>
                                    <div className="simple-btn !px-4 mr-auto !p-0">انقر للاختيار</div>

                                </div>
                                <div className="df sm-justify-center mt-2">
                                    <div className="rate df !gap-1">4.3 <IoMdStar className="!text-white" /></div> -
                                    <div className=" df !gap-1 text-sm">(98)  <GoComment className="" /></div> -
                                    <div className=" df !gap-1 text-sm">(0)  <GoReport /></div>
                                </div>
                                <p className="desc-cart mt-2 sm-text-center !h-auto">لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت. أركيتيكتو ريروم موليتيا نومكوام أوبكياتي موليسيتي! فيتاي بلاسيت إي سولوتا ريسييينديس إمبيديت!</p>
                                <Link to={"/team/7586"} className="sm-dis-inline-link link-sec sm-text-center sm-mx-auto">معرفة المزيد عن هذا المندوب</Link>
                                <div className="df med">
                                    <IoLogoWhatsapp />
                                    <IoLogoTwitter />
                                    <IoLogoInstagram />
                                    <IoLogoFacebook />
                                </div>
                            </div>
                        </label>
                        <label htmlFor="mandoub2" className={`mandoub df sm-df-c sm-items-center ai-stretch payment-label ${selectedPayment === "mandoub2" ? "selected" : ""}`}>
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
                                <div className="df  sm-justify-center">
                                    <div className="font-bold !text-xl">منير عبيدي</div>
                                    <div className="prodPr">#6701</div>
                                    <div className="simple-btn !px-4 mr-auto !p-0">انقر للاختيار</div>
                                </div>
                                <div className="df mt-2 sm-justify-center">
                                    <div className="rate df !gap-1">3.5 <IoMdStar className="!text-white" /></div> -
                                    <div className=" df !gap-1 text-sm">(6)  <GoComment className="" /></div> -
                                    <div className=" df !gap-1 text-sm">(1)  <GoReport /></div>
                                </div>
                                <p className="desc-cart mt-2 !h-auto sm-text-center">لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت. أركيتيكتو ريروم موليتيا نومكوام أوبكياتي موليسيتي! فيتاي بلاسيت إي سولوتا ريسييينديس إمبيديت!</p>
                                <Link to={"/team/7586"} className="link-sec sm-dis-inline-link sm-text-center sm-dis-inline">معرفة المزيد عن هذا المندوب</Link>
                                <div className="df med">
                                    <IoLogoWhatsapp />
                                    <IoLogoTwitter />
                                    <IoLogoInstagram />
                                    <IoLogoFacebook />
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="btn sm-w-full sm-justify-sb mr-auto mt-10" onClick={handleSubmit}>
                        إرسال
                        <div className="ic ">
                            <GiCheckMark />
                        </div>
                    </div>
                </div>
            </div>)}
            {
                cart.length === 0 && (
                    <Empty />
                )
            }
        </div>
    );
}

export default Checkout;
