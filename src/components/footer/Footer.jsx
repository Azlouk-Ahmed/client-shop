import { Facebook, Telegram, Twitter } from "@mui/icons-material";
import "./footer.css";

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
                  <a href="index.html" className="flex items-center">
                    <i className="fa-solid fa-angles-right mr-2"></i> الرئيسية
                  </a>
                </li>
                <li>
                  <a href="about.html" className="flex items-center">
                    <i className="fa-solid fa-angles-right mr-2"></i> عنّا
                  </a>
                </li>
                <li>
                  <a href="gallery.html" className="flex items-center">
                    <i className="fa-solid fa-angles-right mr-2"></i> المعرض
                  </a>
                </li>
                <li>
                  <a href="contact.html" className="flex items-center">
                    <i className="fa-solid fa-angles-right mr-2"></i> تواصل معنا
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
              <div className="media-buttons df !gap-1">
        <a href="#" className="link">
          <Facebook className="bx bxl-facebook "></Facebook>
        </a>
        <a href="#"  className="link">
          <Twitter className="bx bxl-twitter"></Twitter>
        </a>
        <a href="#" className="link">
          <Telegram className="bx bxl-youtube"></Telegram>
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
                  <i className="fa-solid fa-location-dot mr-2"></i> كولاثور رامانكولام - مالابورام Dt، كيرالا 679338
                </li>
                <li>
                  <a href="" className="flex items-center">
                    <i className="fa-solid fa-phone mr-2"></i> +91 90904500112
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
