import { motion } from 'framer-motion';
import "./modal.css";
import Backdrop from '../Backdrop';
import { dropIn } from '../../utils/modals';
import { Warning } from '@mui/icons-material';

function ReportModal({handleClose}) {
  return (
    <Backdrop onClick={handleClose}>

        <motion.div
        onClick={(e) => e.stopPropagation()} 
        className="modal !justify-start !w-2/3 !h-4/5 "
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
          <div className="df-c w-full">
          <div className="df  jc-sb">
            <div className="title">report</div>
            <Warning />
          </div>
          <hr />
          <div className="mt-6">
            <div className="font-bold">reasons why to report sana magrouni</div>
            <div className="options ta-c df">
              <div className="option !mt-6">scam</div>
              <div className="option !mt-6 active">abuse</div>
              <div className="option !mt-6">inapropriate</div>
              <div className="option !mt-6">fake</div>
              <div className="option !mt-6">spam</div>
              <div className="option !mt-6">something</div>
              <div className="option !mt-6">others</div>
            </div>
          </div>
          <div className="font-bold">can you clarify the issue? help us understand</div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur porro aliquid reiciendis, asperiores possimus pariatur est cum repudiandae reprehenderit suscipit.</p>
          <textarea name="" id=""></textarea>
          <div className="simple-btn !mt-6 !w-1/2 mx-auto justify-center">confirm</div>
          </div>

        </motion.div>
    </Backdrop>
  )
}

export default ReportModal