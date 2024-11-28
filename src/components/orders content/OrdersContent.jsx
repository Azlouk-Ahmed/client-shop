import { BsEye } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";

function OrdersContent() {
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
    <div className="orders-content bg-white df-c flex-1 p-4">
        <div className="df jc-sb">
            <div>تفاصيل الطلب - 20240207303639</div>
            <BsEye />
        </div>
        <div className="order-indic df jc-sb mt-4 py-6 px-8">
            <div className="df">
              <div>حالة الطلب :</div>
              <div className="status pending">جارٍ معالجة الطلب</div>
            </div>
            <div className="df">
              <div>حالة الدفع :</div>
              <div className="status paid">مدفوع</div>
            </div>
        </div>
        <div className="df jc-sb ai-fs">
                  <div className="w-3/5 df-c">
                  <div className="font-bold">عنوان الفاتورة</div>
                  <div>عنوان الفاتورة هنا</div>
                  <div className="font-bold">العنوان</div>
                  <div>عنوان هنا</div>
                  </div>
                  <div className="flex-1 df-c">
                    <div className="df jc-sb">
                    <div className="font-bold">الإجمالي الجزئي</div>
                    <div>$14.50</div>
                    </div>
                    <div className="df jc-sb">
                    <div className="font-bold">الإجمالي الجزئي</div>
                    <div>$14.50</div>
                    </div>
                    <div className="df jc-sb">
                    <div className="font-bold">الإجمالي الجزئي</div>
                    <div>$14.50</div>
                    </div>
                    <div className="df jc-sb font-bold">
                    <div className="font-bold">الإجمالي الجزئي</div>
                    <div>$14.50</div>
                    </div>
                  </div>
        </div>
        <div className="order-track">

  <div className="df ai-fs">
						<div className="col-12 col-md-10 hh-grayBox pt45 pb20 w-full scrolable">
							<div className="trackcont">
								<div className="order-tracking completed">
									<span className="is-complete"></span>
									<p>تم الطلب<br /><span>الاثنين، 24 يونيو</span></p>
								</div>
								<div className="order-tracking completed">
									<span className="is-complete"></span>
									<p>تم الطلب<br /><span>الاثنين، 24 يونيو</span></p>
								</div>
								<div className="order-tracking completed">
									<span className="is-complete"></span>
									<p>تم الطلب<br /><span>الاثنين، 24 يونيو</span></p>
								</div>
								<div className="order-tracking completed">
									<span className="is-complete"></span>
									<p>تم الطلب<br /><span>الاثنين، 24 يونيو</span></p>
								</div>
								<div className="order-tracking completed">
									<span className="is-complete"></span>
									<p>تم الشحن<br /><span>الثلاثاء، 25 يونيو</span></p>
								</div>
								<div className="order-tracking">
									<span className="is-complete"></span>
									<p>تم التسليم<br /><span>الجمعة، 28 يونيو</span></p>
								</div>
							</div>
						</div>
					</div>


          <div className="df mt-12 ta-c men font-bold">
                        <div className="product flex1 ">المنتج</div>
                        <div className="qte w-1/5">الكمية</div>
                        <div className="price w-1/5">السعر</div>
                    </div>
                    <div className="cardcontent  !h-auto">
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
                    </div>
        </div>
    </div>
  )
}

export default OrdersContent;
