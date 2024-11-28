  import { motion } from "framer-motion";

  const Backdrop = ({ children, onClick,isNotification }) => {

    return (
      <motion.div
        className={`backdrop ${(isNotification === true)? "notif-backdrop" : ""}`}
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    );
  };

  export default Backdrop;
