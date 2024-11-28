import { Facebook, Instagram, Telegram, Twitter } from "@mui/icons-material";

function TeamSlide() {
  return (
    <div className="profile-card">
      <div className="image">
        <img src="	https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="Profile" className="profile-img" />
      </div>
      <div className="text-data">
        <span className="name">CodingLab</span>
        <span className="job">YouTuber & Blogger</span>
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
        <button className="button">Subscribe</button>
        <button className="button">Message</button>
      </div>
      <div className="analytics">
        <div className="data">
          <i className="bx bx-heart"></i>
          <span className="number">60k</span>
        </div>
        <div className="data">
          <i className="bx bx-message-rounded"></i>
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
