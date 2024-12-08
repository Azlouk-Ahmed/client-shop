import { DeliveryDiningSharp, Facebook, Instagram, StarsOutlined, Telegram, Twitter } from "@mui/icons-material";
import { GiRank1 } from "react-icons/gi";
import { Link } from "react-router-dom";

function TeamSlide() {
  return (
    <div className="profile-card" dir="rtl">
      <div className="image">
        <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="Profile" className="profile-img" />
      </div>
      <div className="text-data">
        <Link to="/team/5" className="name">مُنير عبيدي</Link> {/* Arabic name */}
        <span className="job">مندوب اليمن، صنعاء</span> {/* Arabic job title */}
      </div>
      <div className="media-buttons">
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
      <div className="analytics">
        <div className="data">
          <DeliveryDiningSharp className="bx bx-heart" />
          <span className="number">60k</span>
        </div>
        <div className="data">
          <StarsOutlined className="bx bx-message-rounded" />
          <span className="number">20k</span>
        </div>
        <div className="data">
          <GiRank1 />
          <span className="number">12k</span>
        </div>
      </div>
    </div>
  );
}

export default TeamSlide;
