import { NavLink } from 'react-router-dom';

function ProfileSidebar() {
  return (
    <div className="bg-white p-8 profile-sidebar">
        <ul className='df-c'>
          <li><NavLink index to="page1">المعلومات</NavLink></li>
          <li><NavLink to="page2">تغيير كلمة المرور</NavLink></li>
          <li><NavLink to="page3">الطلبات</NavLink></li>
          <li><NavLink to="page4">قائمة الرغبات</NavLink></li>
          <li><NavLink to="page5">التقييمات والمراجعات</NavLink></li>
          <li><NavLink to="page6">كوبونات</NavLink></li>
        </ul>
      </div>
  )
}

export default ProfileSidebar;
