import { motion } from 'framer-motion';
import { useState } from 'react';
import { CgAttachment } from "react-icons/cg";
import AddAdress from '../../components/Modal/AddAdress';
import ModalContainer from '../../components/Modal/ModalContainer';
import useModal from '../../hooks/useModal';
import { AddCircleOutlined } from '@mui/icons-material';

function Settings() {
    const [droppedFiles, setDroppedFiles] = useState(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) {
            setDroppedFiles(files[0]);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // Prevent default to allow drop
    };

    const handleFileChange = (e) => {
        setDroppedFiles(e.target.files[0]);
    };
    const { modalOpen, close, open } = useModal();
    return (
        <div className='df-c'>
            <ModalContainer>
                {modalOpen && (
                    <AddAdress
                        modalOpen={modalOpen}
                        handleClose={close}
                    />
                )}
            </ModalContainer>
            <div className="df-c bg-white p-8 !gap-16">
            <div className="df sm-fd-col sm-df-c sm-items-center comment-user-img ai-stretch">
                    <img
                        className="!w-40 sm-m-auto  "
                        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                        alt="user"
                    />
                    <div className="df-c jc-sb flex-1">
                        <label
                            htmlFor="images"
                            className="drop-container"
                            id="dropcontainer"
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        >
                            <span className="rounded-icon"><CgAttachment /></span>
                            <div className="text-center"><span>انقر لتحميل</span> أو اسحب وأفلت <br />
                                SVG، JPEG، PNG أو GIF
                            </div>
                            <div className="df file-uploader">
                                <input
                                    type="file"
                                    id="images"
                                    accept="image/*"
                                    className="dnone"
                                    onChange={handleFileChange}
                                    required
                                />
                                {droppedFiles && (
                                    <div className="">
                                        <p>{droppedFiles.name}</p>
                                    </div>
                                )}
                            </div>
                        </label>
                    </div>
                </div>
                <div className="df sm-df-c">
                    <div className="df-c sm-w-full !gap-2 w-45">
                        <div className="df-c pr">
                            <label className="label-trans" htmlFor="">الاسم</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="df-c sm-w-full !gap-2 w-45">
                        <div className="df-c pr">
                            <label className="label-trans" htmlFor="">الكنية</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                </div>
                <div className="df-c !gap-16">
                    <div className="df-c !gap-2 w-full">
                        <div className="df-c pr">
                            <label className="label-trans" htmlFor="">البريد الإلكتروني</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="df-c !gap-2 w-full">
                        <div className="df-c pr">
                            <label className="label-trans" htmlFor="">رقم الهاتف</label>
                            <input type="text" name="" id="" />
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
            <div className="bg-white p-8 df-c !gap-16">
                <div className="df jc-sb">
                <div className="title pr">adresses <div className="wave"></div></div>
                <div className="add df" onClick={open}>add <AddCircleOutlined /></div>

                </div>

                <div className="df sm-df-c flex-wrap">
                    <div className="adressbox">
                        <div className="df-c">
                            <div className="title ">billing </div>
                            <p>
                            2231 Kidd Avenue, AK, Kipnuk, 99614, United States
                            </p>
                        </div>
                    </div>
                    <div className="adressbox">
                        <div className="df-c">
                            <div className="title">billing</div>
                            <p>
                            2231 Kidd Avenue, AK, Kipnuk, 99614, United States
                            </p>
                        </div>
                    </div>
                    <div className="adressbox">
                        <div className="df-c">
                            <div className="title">billing</div>
                            <p>
                            2231 Kidd Avenue, AK, Kipnuk, 99614, United States
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Settings;
