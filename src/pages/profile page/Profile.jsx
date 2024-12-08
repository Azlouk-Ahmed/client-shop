import ProfileSidebar from "../../components/profileNav/ProfileSidebar";
import "./profile.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container-padding profile df ai-fs" dir="rtl">
        <div className={`df-c w-1/4 profile-side-bar ${isOpen ? "trs" : ""}`}>
            <div className="points bg-white p-8 df-c">
              <div className="df w-full">
                <div className="title">نقاط المحفظة</div> {/* Translated title */}
                <button
                  className={`menu p-sb mr-auto ${!isOpen ? "animate-toggle-nav" : ""}`}
                  onClick={() => setIsOpen(!isOpen)}
                  aria-expanded={isOpen}
                  aria-label="Main Menu"
                >
                  <svg width="40" height="40" viewBox="0 0 100 100">
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                  </svg>
                </button>
              </div>
                <div className="df mt-8 jc-sa">
                    <div className="ta-c df-c">
                        <span>0</span>
                        <span>إجمالي</span> {/* Translated "Total" */}
                    </div>
                    <div className="ta-c df-c">
                        <span>0</span>
                        <span>إجمالي</span> {/* Translated "Total" */}
                    </div>
                    <div className="ta-c df-c">
                        <span>0</span>
                        <span>إجمالي</span> {/* Translated "Total" */}
                    </div>
                </div>
                <div className="simple-btn !justify-center">تحويل</div> {/* Translated "transform" */}
                
            </div>
            <ProfileSidebar />
        </div>
      
      <div className="content flex-1">
        <Outlet /> {/* This will render the selected page's content */}
      </div>
    </div>
  );
}

export default Profile;
