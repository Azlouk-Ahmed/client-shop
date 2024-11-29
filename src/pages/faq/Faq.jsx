import { useState } from "react";
import "./faq.css";
import { IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Krushi?",
      answer:
        "Krushi is a Public Charitable Trust designed to carry out farming on extensive scale Natural & Sustainable methods.",
    },
    {
      question: "How does it work?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.",
    },
    {
      question: "What are the major challenges of current agriculture?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.",
    },
    {
      question: "How does the Krushi address the above challenges?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.",
    },
    {
      question: "How can I be a part of Krushi?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.",
    },
    {
      question: "How does it work?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.",
    },
  ];

  return (
    <div className="df-c">
      <div className=" pr qaf-p df !justify-center">
        <img src="/img/hiddenyellow.png" class="hiddeny" />
        <div className="title w-fit pr">any questions? look here <svg width="100%" height="10" xmlns="http://www.w3.org/2000/svg">
          <path
            className="path"
            d="M10,5 Q150,0 290,5"
            fill="none"
            stroke="#e3be63"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg></div>

      </div>

      <div className="wrapper !mt-20">
        {faqs.map((faq, index) => (
          <div className={`faq ${activeIndex === index ? "active" : ""}`} key={index}>
            <button
              className={`accordion ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <IoIosArrowForward className={`fa-solid fa-chevron-down ${activeIndex === index ? "rotate" : ""}`} />
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="pannel"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
