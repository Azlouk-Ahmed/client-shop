import { motion } from 'framer-motion';
import "./modal.css";
import Backdrop from '../Backdrop';
import { dropIn } from '../../utils/modals';
import { Cancel } from '@mui/icons-material';

function StartingPopup({handleClose}) {

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal pr !justify-start sm-df-c !w-2/3 !h-fit"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-full"><Cancel onClick={handleClose} className='cursor-pointer' /></div>
        <div className="df !gap-12 h-full ai-c sm-df-c w-full">
        <div className="img-ad w-1/2 pr z-10">
                <img src="/img/ad.png" className='w-full h-full sm-w-full object-cover' alt="إعلان" />
            </div>
            <div className="df-c sm-w-full w-1/2">
            <div className="title pr w-fit ">تم إضافة منتج جديد<div className="wave"></div></div>
            <p>لوريم إيبسوم دولور سيت أميت كونسيكتيتور أديبيسيسينغ إليت. ألياس إيبسوم أنيمي فولوبتاتس أوديو، كو أتاك، أوديت فوغا إيوس موليستيا ريبريهيندرينت تينتور ريم أ أديبري سيدي ديليكتوس إينفنتوري، فيليت فيرو ماكسيمي دولوريبوس.</p>
            <div className="simple-btn justify-center">تحقق من ذلك</div>
            </div>
            
        </div>
        <div className="blur !top-0 z-0 blurpopup !left-0"></div>
      </motion.div>
    </Backdrop>
  )
}

export default StartingPopup;
