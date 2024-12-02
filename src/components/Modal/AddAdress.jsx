import Backdrop from '../Backdrop';
import { motion } from 'framer-motion';
import { dropIn } from '../../utils/modals';
import { useState } from 'react';

function AddAdress({ handleClose }) {
    const [selectedAdress, setSelectedAdress] = useState("adress");

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal g0 adressmodal"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="title w-fit mx-auto pr">Add New Address <div className="wave"></div></div>
                <div className="df-c !gap-10 mt-12">
                    <div>
                    <div className="w-full ">
                        <div className="df sm-df-c wrap w-full justify-around">
                            <label
                                htmlFor="adress"
                                className={`df-c payment-label ${selectedAdress === "adress" ? "selected" : ""}`}
                            >
                                <div className="payment-card !w-16">
                                    <img src="https://cdn-icons-png.flaticon.com/128/1611/1611154.png" alt="نقداً" />
                                </div>
                                <span className="ta-c font-bold text-sm ">نقداً</span>
                                <input
                                    type="radio"
                                    name="payment"
                                    id="adress"
                                    value="adress"
                                    onChange={() => setSelectedAdress("adress")}
                                    checked={selectedAdress === "adress"}
                                />
                            </label>

                            <label
                                htmlFor="billing"
                                className={`df-c payment-label ${selectedAdress === "billing" ? "selected" : ""}`}
                            >
                                <div className="payment-card !w-16">
                                    <img src="https://cdn-icons-png.flaticon.com/128/2776/2776064.png" alt="ماستر كارد" />
                                </div>
                                <span className="ta-c font-bold text-sm">ماستر كارد</span>
                                <input
                                    type="radio"
                                    name="payment"
                                    id="billing"
                                    value="billing"
                                    onChange={() => setSelectedAdress("billing")}
                                    checked={selectedAdress === "billing"}
                                />
                            </label>
                        </div>
                    </div>
                    </div>
                <div className="df sm-df-c jc-sb">
                    <div className="df-c sm-w-full !gap-2 w-45">
                        <div className="df-c pr">
                            <label className="label-trans" htmlFor="">adress</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="df-c sm-w-full !gap-2 w-45">
                        <div className="df-c pr">
                            <label className="label-trans" htmlFor="">zip code</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                </div>
                <div className="df-c !gap-2 w-full">
                        <div className="df-c pr">
                            <label className="label-trans" htmlFor="">adress</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                <div className="df-c !gap-2 w-full">
                        <div className="df-c pr">
                            <label className="label-trans" htmlFor="">adress</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                <div className="df-c !gap-2 w-full">
                        <div className="df-c pr">
                            <label className="label-trans" htmlFor="">adress</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="df header-btns mr-auto">
                <motion.div
                    className="simple-btn-outlined"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    إعادة تعيين
                </motion.div>
                <motion.div
                    className="simple-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    تأكيد
                </motion.div>
            </div>
                
               
                
                </div>
            </motion.div>
        </Backdrop>
    )
}

export default AddAdress