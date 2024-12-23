import { useState } from 'react';
import { motion } from 'framer-motion';
import "./modal.css";
import Backdrop from '../Backdrop';
import { dropIn } from '../../utils/modals';
import { Warning } from '@mui/icons-material';

function ReportModal({ handleClose }) {
  const [activeOption, setActiveOption] = useState("احتيال");

  const options = [
    "احتيال",
    "إساءة",
    "غير لائق",
    "مزيف",
    "رسائل غير مرغوبة",
    "شيء آخر",
    "أخرى",
  ];

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal !justify-start !w-2/3 !h-4/5"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="df-c w-full">
          <div className="df jc-sb">
            <div className="title">تقرير</div>
            <Warning />
          </div>
          <hr />
          <div className="mt-6">
            <div className="font-bold">أسباب الإبلاغ عن سنا مغروني</div>
            <div className="options flex-wrap ta-c df">
              {options.map((option, index) => (
                <div
                  key={index}
                  className={`option !mt-6 ${activeOption === option ? "active" : ""}`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
          <div className="font-bold">هل يمكنك توضيح المشكلة؟ ساعدنا في الفهم</div>
          <p>
            لوريم إيبسوم، نص شكلي يستخدم في صناعة الطباعة والتنضيد. النص نفسه ليس له معنى،
            لكنه يوفر شكلاً جيدًا للتصميم.
          </p>
          <textarea name="" id=""></textarea>
          <div className="simple-btn !mt-6 !w-1/2 mx-auto justify-center">تأكيد</div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default ReportModal;
