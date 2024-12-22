import { Facebook, Pinterest, Telegram, WhatsApp, X } from "@mui/icons-material";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer id="footer" className="pr" dir="rtl">
        <img src="/img/hiddenbg.png" className="hiddenbg" srcSet="" />
        <div className="container-padding mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* First Column - Logo and About Section */}
            <div className="flex flex-col items-start ta-c">
              <a href="index.html" className="mx-auto">
                <img
                  src="/img/logo.png"
                  alt="Logo"
                  className="w-32 h-auto mb-4"
                />
              </a>
              <div className="footer-about">
                <p className="text-sm">
                  لوريم إيبسوم هو ببساطة نص شكلي للطباعة والتنضيد. لوريم إيبسوم كان نصاً شكلياً قياسياً في صناعة الطباعة منذ القرن الخامس عشر.
                </p>
              </div>
            </div>

            {/* Second Column - Useful Links */}
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold mb-2">روابط مفيدة</h2>
              <img
                src="./assets/images/about/home_line.png"
                alt=""
                className="w-24 mb-4"
              />
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="flex items-center">
                    <i className="fa-solid fa-angles-right mr-2"></i> الرئيسية
                  </Link>
                </li>
                <li>
                  <Link to="/honey-products" className="flex items-center">
                    <i className="fa-solid fa-angles-right mr-2"></i> منتجات العسل
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="flex items-center">
                    <i className="fa-solid fa-angles-right mr-2"></i> الشروط والأحكام
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="flex items-center">
                    <i className="fa-solid fa-angles-right mr-2"></i> تواصل معنا
                  </Link>
                </li>
                <li>
                  <a  href="https://drive.google.com/file/d/1FMi5kI6xoq8dexw66o7RLZUSDyjT2Wqo/view" target="_blank" className="flex items-center">
                    <i className="fa-solid fa-angles-right mr-2"></i> أقرأ كتابنا
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=jpuaOTyNCj4&ab_channel=AlrheeqH" target="_blank" className="flex items-center">
                    <i className="fa-solid fa-angles-right mr-2"></i> شاهد مقطع الفيديو الخاص بنا
                  </a>
                </li>
              </ul>
            </div>

            {/* Third Column - Social Media Links */}
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold mb-2">تابعونا</h2>
              <img
                src="./assets/images/about/home_line.png"
                alt=""
                className="w-24 mb-4"
              />
              <div className="media-buttons df !gap-1 sm-mx-auto" target="_blank" >
        <a href="https://wa.me/+967780838873" target="_blank" className="link">
          <WhatsApp className="bx bxl-facebook "></WhatsApp>
        </a>
        <a href="https://www.facebook.com/alrheeqH" target="_blank" className="link">
          <Facebook className="bx bxl-facebook "></Facebook>
        </a>
        <a href="https://x.com/alrheeqh" target="_blank" className="link">
          <X className="bx bxl-twitter"></X>
        </a>
        <a href="https://t.me/AlrheeqH" target="_blank" className="link">
          <Telegram className="bx bxl-youtube"></Telegram>
        </a>
        <a href="https://www.pinterest.com/alrheeqH" target="_blank" className="link">
          <Pinterest className="bx bxl-youtube"></Pinterest>
        </a>
      </div>
            </div>

            {/* Fourth Column - Address */}
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold mb-2">العنوان</h2>
              <img
                src="./assets/images/about/home_line.png"
                alt=""
                className="w-24 mb-4"
              />
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="fa-solid fa-location-dot mr-2"></i> حضرموت| دوعن
                </li>
                <li>
                  <a href="" className="flex items-center">
                    <i className="fa-solid fa-phone mr-2"></i> +967 780838873
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center">
                    <i className="fa-solid fa-envelope mr-2"></i> mail@1234567.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
