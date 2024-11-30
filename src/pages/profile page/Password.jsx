
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { GoVerified } from 'react-icons/go';

const Password = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [strength, setStrength] = useState([false, false, false, false]);
    const [filledBars, setFilledBars] = useState(0);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleCurrentPasswordChange = (e) => {
        setCurrentPassword(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        const password = e.target.value;
        setNewPassword(password);
        checkPasswordStrength(password);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const checkPasswordStrength = (password) => {
        const newStrength = [
            password.length >= 10,                       // الحد الأدنى لطول 6 أحرف
            /[a-z]/.test(password),                     // على الأقل حرف صغير واحد
            /\d/.test(password),                        // على الأقل رقم واحد
            /[^A-Za-z0-9]/.test(password),             // على الأقل رمز خاص واحد
        ];
        
        // حساب عدد القواعد التي تم استيفاؤها
        const fulfilledCount = newStrength.filter(Boolean).length;
        
        setStrength(newStrength);
        setFilledBars(fulfilledCount); // تعيين عدد الأشرطة المملوءة
    };

    return (
        <div className="df-c bg-white p-8 !gap-9">
            <div className="flex flex-col w-full">
                <div className="df-c pr">
                    <label htmlFor="" className="label-trans">كلمة المرور الحالية</label>
                    <input
                        type={showCurrentPassword ? 'text' : 'password'}
                        value={currentPassword}
                        onChange={handleCurrentPasswordChange}
                        placeholder="أدخل كلمة المرور الحالية"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <div onClick={() => setShowCurrentPassword(!showCurrentPassword)} className="icon-trans">
                        {showCurrentPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                </div>
            </div>
            <div className="df-c">
                <div className="flex flex-col w-full">
                    <div className="df-c pr">
                        <label htmlFor="" className="label-trans">كلمة المرور الجديدة</label>
                        <input
                            type={showNewPassword ? 'text' : 'password'}
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                            placeholder="أدخل كلمة المرور الجديدة"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <div onClick={() => setShowNewPassword(!showNewPassword)} className="icon-trans">
                            {showNewPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                        </div>
                    </div>
                </div>
                <div className="df w-full jc-sb">
                    <div className="df !gap-1  pw-prog">
                        {[...Array(4)].map((_, index) => {
                            let barColor = 'bg-gray-300'; // اللون الافتراضي
                            if (index < filledBars) {
                                if (index === 0) barColor = 'bg-yellow-200';
                                else if (index === 1) barColor = 'bg-yellow-300';
                                else if (index === 2) barColor = 'bg-yellow-400';
                                else if (index === 3) barColor = 'bg-yellow-500';
                            }
                            return (
                                <div
                                    key={index}
                                    className={`h-2 rounded-md  flex-1 ${barColor} transition-all duration-300`}
                                    style={{ width: '100%', margin: '0 2.5px' }} // فراغ 5px
                                />
                            );
                        })}
                    </div>
                    {filledBars === 4 && (
                        <BiCheck className=" text-2xl ml-2" />
                    )}
                </div>
                <div className="flex pw-prog flex-col space-y-1">
                    <div className={`df jc-sb ${strength[0] ? 'success-pw' : 'text'}`}>الحد الأدنى لطول 6 أحرف {strength[0] && (<GoVerified />)}</div>
                    <div className={`df jc-sb ${strength[1] ? 'success-pw' : 'text'}`}>على الأقل حرف صغير واحد {strength[1] && (<GoVerified />)}</div>
                    <div className={`df jc-sb ${strength[2] ? 'success-pw' : 'text'}`}>على الأقل رقم واحد {strength[2] && (<GoVerified />)}</div>
                    <div className={`df jc-sb ${strength[3] ? 'success-pw' : 'text'}`}>على الأقل رمز خاص واحد {strength[3] && (<GoVerified />)}</div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="df-c pr">
                    <label htmlFor="" className="label-trans">تأكيد كلمة المرور الجديدة</label>
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        placeholder="أدخل كلمة المرور الجديدة"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <div onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="icon-trans">
                        {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                </div>
            </div>
            <div className="df sm-df-c sm-w-full header-btns mr-auto">
                <motion.div
                    className="simple-btn-outlined sm-w-full sm-justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    إعادة تعيين
                </motion.div>
                <motion.div
                    className="simple-btn sm-w-full sm-justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    تأكيد
                </motion.div>
            </div>
        </div>
    );
};

export default Password;
