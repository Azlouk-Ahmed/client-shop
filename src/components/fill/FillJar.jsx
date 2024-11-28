import { useState } from 'react';
import { IoIosCart } from 'react-icons/io';
import { useHoneyContext } from '../../hooks/useAuthContext';

function FillJar() {
  const MAX_GIFT = 250;
  const [honeyLevel, setHoneyLevel] = useState("");
  const {selectedHoney} = useHoneyContext();

  // Update honeyLevel and ensure it's within the 0 - MAX_GIFT range
  const handleHoneyLevelChange = (e) => {
    const value = Math.min(Math.max(e.target.value, 0), MAX_GIFT);
    setHoneyLevel(value);
  };

  // Calculate the height percentage for the .prog element
  const progHeight = (honeyLevel / MAX_GIFT) * 100;

  return (
    <div className='fill-jar pt-12 pr-20 pr'>
      <img src="/img/spl.png" className="spl" alt=""/>
      <img src="/img/spl2.png" className="spl2" alt=""/>
      <img src="/img/flowerleft.png" className='flowerleft !w-20 !top-full' alt="" />
      <div className="df justify-center  !items-stretch">
      <img src="/img/fill.png" className="w-2/6" alt="" />
        <div className="w-1/4 flex flex-col gap-2 justify-between items-center">
          <div className="title title3">املأ باقتك بالعسل!</div>
          <p className='ta-c'>
        املأ باقتك ب{selectedHoney}! كلما زادت كمية العسل التي تختارها بالكيلوغرامات، اقتربت خطوة نحو الحصول على هدية مميزة. اختر الكمية التي ترغب فيها، وشاهد تقدمك نحو الهدية على شريط التقدم. لا تتردد في زيادة الكمية لتحصل على هديتك!
          </p>
          <div className="df justify-between w-full ">
            <label htmlFor="honey-input">Quantity in kg</label>
            <input
              type="number"
              value={honeyLevel}
              onChange={handleHoneyLevelChange}
              className='input !pr-3'
              id="honey-input"
            />
          </div>
          <div className="btn">أضف إلى السلة <div className="ic"><IoIosCart /></div></div>
        </div>
        <div className="fill-bar">
          <div className="prop-cont">
            <div
              className="prog"
              style={{ height: `${progHeight}%` }} // Set height based on calculated percentage
            ></div>
            <div className="indic1"><img src='/img/gift.png' alt="indicator 1" /></div>
            <div className="indic2"><img src='/img/gift.png' alt="indicator 2" /></div>
            <div className="indic3"><img src='/img/gift.png' alt="indicator 3" /></div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default FillJar;
