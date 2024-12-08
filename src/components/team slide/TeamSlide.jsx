import { DeliveryDiningSharp, Facebook, Instagram, StarsOutlined, Telegram, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";

function TeamSlide() {
  return (
    <div className="profile-card">
      <div className="image">
        <img src="	https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="Profile" className="profile-img" />
      </div>
      <div className="text-data">
        <span className="name">mounir abidi</span>
        <span className="job">mandoub yemen, san3a2</span>
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
      <div className="buttons">
        <Link to ="/team/5" className="button">profile</Link>
        <button className="button">report</button>
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
          <i className="bx bx-share"></i>
          <span className="number">12k</span>
        </div>
      </div>
    </div>
  );
}

export default TeamSlide;
