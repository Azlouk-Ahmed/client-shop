import { useState } from 'react';
import Backdrop from '../Backdrop';
import { motion, AnimatePresence } from 'framer-motion';
import { dropIn } from '../../utils/modals';
import SignUpForm from '../auth/SignUpForm';
import LoginForm from '../auth/LoginForm';

function Authentification({ handleClose }) {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => setShowLogin((prev) => !prev);

  return (
    <Backdrop onClick={handleClose} isNotification={true}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal g0"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <AnimatePresence mode="wait">
          {showLogin ? (
            <motion.div
              key="login"
              initial={{ opacity: 1, x: 0,height: "50%" }}
              animate={{ opacity: 1, x: 0,height: "auto" }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <LoginForm toggleForm={toggleForm} />
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: 100,height: "50%" }}
              animate={{ opacity: 1, x: 0,height: "auto" }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <SignUpForm toggleForm={toggleForm} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Backdrop>
  );
}

export default Authentification;
