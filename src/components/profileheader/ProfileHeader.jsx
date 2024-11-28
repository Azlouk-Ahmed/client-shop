import './profileHeader.css';
import useModal from '../../hooks/useModal';
import ModalContainer from '../Modal/ModalContainer';
import ReportModal from '../Modal/ReportModal';
import { DeliveryDiningOutlined, Facebook, Instagram, Start, Telegram, Twitter, Warning } from '@mui/icons-material';
import { TbMilitaryRank } from 'react-icons/tb';

const ProfileHeader = ({data}) => {
  const {modalOpen, open, close} = useModal();
  return (
    <div className="profile-header pr">
      <ModalContainer >
        {
          modalOpen && <ReportModal modalOpen={modalOpen}
          handleClose={close} />
        }
      </ModalContainer>
      <main class="cd__main">
         <div class="profile-page">
  <div class="content">
    <div class="content__cover">
      <div class="content__avatar">
        <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
      </div>
      <div class="content__bull"><span></span><span></span><span></span><span></span><span></span>
      </div>
    </div>
    <div class="content__actions"><div onClick={open} className='cursor-pointer df text-red-600'>
        <Warning /><span>الإبلاغ عن مشكلة</span></div>
        </div>
    <div class="content__title">
      <h1>سامانثا جونز</h1><span>نيويورك، الولايات المتحدة الأمريكية</span>
    </div>
    <div class="content__description">
    <div className="media-buttons df w-fit mx-auto">
        <a href="#" style={{ background: "#4267b2" }} className="link">
          <Facebook className="bx bxl-facebook"></Facebook>
        </a>
        <a href="#" style={{ background: "#1da1f2" }} className="link">
          <Twitter className="bx bxl-twitter"></Twitter>
        </a>
        <a href="#" style={{ background: "#e1306c" }} className="link">
          <Instagram className="bx bxl-instagram"></Instagram>
        </a>
        <a href="#" style={{ background: "blue" }} className="link">
          <Telegram className="bx bxl-youtube"></Telegram>
        </a>
      </div>
    </div>
    <ul class="content__list">
      <li className='df-c !items-center'><span className='df'>65 <DeliveryDiningOutlined /></span>إجمالي الطلبات المُسلّمة</li>
      <li className='df-c !items-center'><span className='df'>43 <Start /></span>إجمالي التقييمات</li>
      <li className='df-c !items-center'><span className='df'>21 <TbMilitaryRank /></span>الترتيب الأسبوعي</li>
    </ul>
    <div class="content__button"><a class="button" href="#rate">
        <div class="button__border"></div>
        <div class="button__bg"></div>
        <p class="simple-btn">إضافة تقييم</p></a></div>
  </div>
  <div class="bg">
    <div><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
  </div>
</div>
      </main>

    </div>
  );
};

export default ProfileHeader;
