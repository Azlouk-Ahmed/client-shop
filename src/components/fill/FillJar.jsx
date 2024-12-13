import { useState } from 'react';
import { IoIosCart } from 'react-icons/io';
import { useHoneyContext } from '../../hooks/useAuthContext';
import { useCartContext } from '../../hooks/useCartContext';
import WarningNotification from '../notifications/WarningNotification';

function FillJar() {
  const [showWarningNotification, setshowWarningNotification] = useState(false);
  const [warningmessage, setwarningmessage] = useState("");
  const handleshowWarningNotification = (msg) => {
  setwarningmessage(msg);
  setshowWarningNotification(true);
  setTimeout(() => setshowWarningNotification(false), 10000); // Automatically close after 3 seconds
  };
  const { dispatch } = useCartContext();
  const MAX_GIFT = 250;
  const KG_PRICE = 60;
  const [honeyLevel, setHoneyLevel] = useState(90); // Set initial honeyLevel to 90 kg
  const { selectedHoney } = useHoneyContext();

  // Check if input is valid
  const isValidHoneyLevel = !isNaN(honeyLevel) && honeyLevel > 90 && honeyLevel < 1000;

  // Update honeyLevel
  const handleHoneyLevelChange = (e) => {
    const value = parseFloat(e.target.value);
    setHoneyLevel(value);
  };

  const handleAddToCart = () => {
    // التحقق إذا كانت القيمة المدخلة ليست رقمًا
    if(!isNaN) {
        handleshowWarningNotification("القيمة يجب أن تكون رقمًا");
        return;
    }
    // التحقق إذا كانت القيمة أقل من 90
    if(honeyLevel < 90) {
        handleshowWarningNotification("القيمة يجب أن تكون أكبر من 90");
        return;
    }
    // التحقق إذا كانت القيمة أكبر من 1000
    if(honeyLevel > 1000) {
        handleshowWarningNotification("القيمة يجب أن تكون أقل من 1000");
        return;
    }
    // إنشاء كائن المنتج المراد إضافته إلى السلة
    const prod = {
        id: 99, // معرف المنتج
        weightInKg: honeyLevel, // وزن المنتج بالكيلوغرام
        isGift: false, // هل المنتج هدية أم لا
        name: " عسل بالجملة", // اسم المنتج
        price: honeyLevel * KG_PRICE, // حساب السعر بناءً على الوزن وسعر الكيلوغرام
        isFilled: true, // حالة المنتج (هل هو ممتلئ)
        shortDesc: "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيكينغ إيليت. كوم، نون.", // وصف قصير للمنتج
        rate: 4, // تقييم المنتج
        img: "/img/filljarfilled.png", // رابط صورة المنتج
        quantity: 1, // الكمية المضافة
    };
    // إرسال إجراء لإضافة المنتج إلى السلة باستخدام Redux
    dispatch({ type: "ADD_QTE", payload: prod });
};


  const percentage = ((honeyLevel - 90) / (1000 - 90)) * 100; // Calculate percentage (0% to 100%)
  const progHeight = `${percentage}%`; // Height for the progress bar

  return (
    <div className="fill-jar pt-12 pr-20 pr">
      {
        showWarningNotification && <WarningNotification onClose={()=> setshowWarningNotification(false)} message={warningmessage} />
      }
      <img src="/img/spl.png" className="spl" alt="" />
      <img src="/img/spl2.png" className="spl2" alt="" />
      <img src="/img/flowerleft.png" className="flowerleft !w-20 !top-full" alt="" />
      <div className="df justify-center fdj !items-stretch">
        <img src="/img/fill.png" className="w-2/6 m-d-none sdnone" alt="" />
        <div className="w-1/4 m-w-60 m-items-center honey-fill-instr flex flex-col gap-2 justify-between items-center m-gap-3">
          <div className="title title3">املأ باقتك بالجملة!</div>
          <p className="ta-c">
            املأ باقتك ب{selectedHoney}! كلما زادت كمية العسل التي تختارها بالكيلوغرامات، اقتربت خطوة نحو الحصول على هدية مميزة. اختر الكمية التي ترغب فيها، وشاهد تقدمك نحو الهدية على شريط التقدم. لا تتردد في زيادة الكمية لتحصل على هديتك!
          </p>
          <div className="df justify-between w-full">
            <input
              type="number"
              value={honeyLevel}
              onChange={handleHoneyLevelChange}
              className="input m-mx-auto m-auto !pr-3"
              id="honey-input"
            />
          </div>
          <button className={`btn`} onClick={handleAddToCart}>
            أضف إلى السلة <div className="ic"><IoIosCart /></div>
          </button>
        </div>
        <div className="fill-bar">
          <div className="prop-cont">
            <div
              className="prog"
              style={{ height: progHeight }} // Set height based on calculated percentage
            ></div>
            <div className="indic1"></div>
            <div className="indic2"></div>
            <div className="indic3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FillJar;
