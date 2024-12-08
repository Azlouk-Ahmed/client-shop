import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function AdSlide({ primaryColor }) {
  console.log("Primary Color:", primaryColor);

  const ref = useRef(null); // Ref for the section
  const isInView = useInView(ref, { threshold: 0.1 }); // Detect visibility

  // Variants for shape1
  const shape1Variants = {
    hidden: { transform: "translate(0%, 0%) rotate(0deg) scale(0.2)" }, // Initial state
    visible: {
      transform: "translate(-50%, 50%) rotate(45deg) scale(1)", // Target state
      transition: { duration: 0.8 },
    },
  };

  // Variants for shape2
  const shape2Variants = {
    hidden: { transform: "translate(-100%, 0%) rotate(0deg) scale(0.2)" }, // Initial state
    visible: {
      transform: "translate(50%, -50%) rotate(45deg) scale(1)", // Target state
      transition: { duration: 0.8, delay: 0.8 },
    },
  };

  return (
    <div
      className="df ad-slide sm-df-c sm-items-center"
      style={{ borderColor: primaryColor }}
      ref={ref}
    >
      <div
        className="img-ad-cont"
        style={{ backgroundColor: primaryColor }}
      >
        {/* Shape 1 */}
        <motion.div
          className="shape1"
          style={{ backgroundColor: primaryColor }}
          variants={shape1Variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        ></motion.div>

        {/* Shape 2 */}
        <motion.div
          className="shape2"
          style={{ backgroundColor: primaryColor }}
          variants={shape2Variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        ></motion.div>

        <img src="/img/about.png" alt="" />
      </div>
      <div className="contt df-c sm-items-center !gap-8">
        <div className="title pr !w-fit">
          our sponsor
          <div
            className="wave"
            style={{ textDecorationColor: primaryColor }}
          ></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, num
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, num
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, num
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, numquam.
        </p>
        <div
          className="simple-btn w-2/3 !justify-center !border-none"
          style={{ backgroundColor: primaryColor }}
        >
          check this out
        </div>
      </div>
    </div>
  );
}

export default AdSlide;
