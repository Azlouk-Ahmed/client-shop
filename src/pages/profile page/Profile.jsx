import ProfileSidebar from "../../components/profileNav/ProfileSidebar";
import "./profile.css";
import { Outlet } from "react-router-dom";

function Profile() {
  return (
    <div className="container-padding profile df ai-fs">
        <div className="df-c w-1/4">
            <div className="points bg-white p-8 df-c">
                <div className="title">wallet points</div>
                <div className="df mt-8 jc-sa">
                    <div className="ta-c df-c">
                        <span>0</span>
                        <span>Total</span>
                    </div>
                    <div className="ta-c df-c">
                        <span>0</span>
                        <span>Total</span>
                    </div>
                    <div className="ta-c df-c">
                        <span>0</span>
                        <span>Total</span>
                    </div>
                </div>
                <div className="simple-btn !justify-center">transform</div>
                
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
