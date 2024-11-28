import React from 'react'
import { AnimatePresence} from "framer-motion";
import "./modal.css"

const ModalContainer = ({ children, label }) => (
    <AnimatePresence
      initial={false}
      mode='wait'
    >
      {children}
    </AnimatePresence>
  );


  
  
  export default ModalContainer