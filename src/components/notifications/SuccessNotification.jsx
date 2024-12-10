import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function SuccessNotification({ message, duration = 10000, onClose,img }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const notificationVariants = {
        hidden: { opacity: 0, x: 50, y: 50 },
        visible: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 50, y: 50 },
    };

    return (
        <AnimatePresence>
            <motion.div
                className="notification df success"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={notificationVariants}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    background: '#4caf50',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000,
                }}
            >
                <div className="w-16 h-16">
            <img src={`${img ? img : '/img/_.png'}`} className='w-full h-full object-cover' alt="" />

        </div>
        <div>
             
                {message}
        </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default SuccessNotification;
