import { motion } from "framer-motion";
import Backdrop from "../Backdrop/index";
import { TiWarningOutline } from "react-icons/ti";
import { badSuspension, dropIn, flip, newspaper } from "../../utils/modals";

const Modal = ({ handleClose, text, handleConfirm, type }) => {
  return (
    <Backdrop onClick={handleClose}>
      {type === "dropIn" && (
        <motion.div
          onClick={(e) => e.stopPropagation()} 
          className="modal flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16 orange-gradient"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {text !== "holiday" && <ModalText text={text} />}
          {text === "holiday" && (
            <div className="df-c w-full !alighn-start">
              <div className="title">طلب إجازة</div>
              <div className="df-c pr w-full">
                <label htmlFor="" className="label-trans">السبب</label>
                <input type="text" className="" style={{ width: "50vh", height: "7rem" }} />
              </div>
              <div className="df jc-sb">
                <div className="df-c pr">
                  <label className="label-trans">تاريخ البداية</label>
                  <input type="date" name="" id="" />
                </div>
                <div className="df-c pr">
                  <label className="label-trans">تاريخ النهاية</label>
                  <input type="date" name="" id="" />
                </div>
              </div>
            </div>
          )}
          <div className="df">
            <div className="outline-btn" onClick={handleClose}>إغلاق</div>
            <ModalButton label="تأكيد" />
          </div>
        </motion.div>
      )}

      {type === "flip" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}   
          className="modal orange-gradient"
          variants={flip}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={text} />
          <ModalButton onClick={handleClose} label="إغلاق" />
        </motion.div>
      )}

      {type === "newspaper" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}   
          className="modal orange-gradient"
          variants={newspaper}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={text} />
          <ModalButton onClick={handleClose} label="إغلاق" />
        </motion.div>
      )}

      {type === "badSuspension" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}   
          className="modal orange-gradient"
          variants={badSuspension}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={text} />
          <ModalButton onClick={handleClose} label="إغلاق" />
        </motion.div>
      )}
    </Backdrop>
  );
};

const ModalText = ({ text }) => (
  <div className="df-c ai-center">
    <TiWarningOutline className="warning-icon" />
    <h5>
      {text}
    </h5>
  </div>
);

const ModalButton = ({ onClick, label }) => (
  <motion.button
    className="btn"
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

export default Modal;
