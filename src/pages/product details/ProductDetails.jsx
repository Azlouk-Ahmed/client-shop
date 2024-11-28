// Arabic Version
import { BsCart, BsPersonCircle } from "react-icons/bs";
import ProductImages from "../../components/product-img/ProductImages";
import Stars from "../../components/stars rate/Stars";
import "./prodcudetails.css";
import { GiTick } from "react-icons/gi";
import ReviewsPage from "../../components/reviews/ReviewsPage";

function ProductDetails() {
  return (
    <div className="df-c mt-40">
        <div className="product-details df !gap-20 ai-fs">
        <div className="w-1/2 swp df-c gap-12">
            <ProductImages />
            <div className="df w-fit mx-auto">
              <img src="/img/product1.png" className="w-20 h-20 object-contain rounded bg-amber-200 p-2" alt="" />
              <img src="/img/product2.png" className="w-20 h-20 object-contain rounded bg-amber-200 p-2" alt="" />
            </div>
        </div>
        <div className="description w-5/12">
            <div className="df-c">
            <div className="title pr w-fit">
                عسل الجراح <div className="wave"></div>
            </div>
            <div className="df">
                <Stars number={4} />
                (25)
            </div>
            <div className="price-det">57.99 £</div>
            <p className="text-xs text-gray-500">
                عسل الهيمالايا الخام مستخرج من رحيق شجرة السدر في مناطق ريفية نائية
                في الهيمالايا. مليء بالفوائد والنكهات.
            </p>
            <div className="attributes !gap-5 !gap-x-8 df flex-wrap">
                <div className="df w-2/5">
                <BsPersonCircle /> 100% عسل طبيعي
                </div>
                <div className="df w-2/5">
                <BsPersonCircle /> غير مبستر
                </div>
                <div className="df w-2/5">
                <BsPersonCircle /> حاصل على جوائز
                </div>
                <div className="df w-2/5">
                <BsPersonCircle /> تغذية قصوى
                </div>
            </div>
            <div className="btn !w-full mt-12 jc-sb">
                أضف إلى السلة <div className="ic"><BsCart /></div>
            </div>
            <div className="title">التفاصيل</div>
            <p className="pr-10 text-xs text-gray-500">
                مزيج من العسل اليمني الخام مع الجنسنج، يُستخدم كعنصر في الطب
                الصيني التقليدي. يزيد من الخصوبة والرغبة الجنسية، ويحسن مستويات
                الطاقة، والوضوح الذهني، والتنبيه، ويقلل من التوتر والقلق
                والكوليسترول. يعزز الهضم، وقوة التحمل الرياضي، وتجديد الخلايا،
                ويمنع نمو الخلايا السرطانية.
            </p>
            <div className="title">الفوائد الصحية</div>
            <div className="pr-10">
                <div className="df text-xs text-gray-500">
                <GiTick /> مزيج من العسل اليمني الخام مع الجنسنج
                </div>
                <div className="df text-xs text-gray-500">
                <GiTick /> مزيج من العسل اليمني الخام مع الجنسنج
                </div>
                <div className="df text-xs text-gray-500">
                <GiTick /> مزيج من العسل اليمني الخام مع الجنسنج
                </div>
            </div>
            <div className="title">معلومات الشحن</div>
<p className="pr-10 text-xs text-gray-500">
    سيتم توصيل هذا المنتج إلى أي مكان تتواجد فيه داخل اليمن. نضمن لك تجربة شحن سريعة وآمنة، حيث نسعى لتقديم أفضل الخدمات لضمان وصول طلباتك في الوقت المحدد وبأفضل حالة ممكنة. نحن ملتزمون بتلبية احتياجاتك أينما كنت.
</p>

            </div>
        </div>
        </div>
        <ReviewsPage product={true} />
    </div>
  );
}

export default ProductDetails;
