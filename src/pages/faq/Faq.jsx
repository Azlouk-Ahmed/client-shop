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
      question: "ما هو العسل؟",
      answer: "العسل هو مادة طبيعية حلوة يصنعها النحل باستخدام رحيق الأزهار."
    },
    {
      question: "كيف يتم إنتاج العسل؟",
      answer:
        "يقوم النحل بجمع رحيق الأزهار وتخزينه في خلايا الشمع داخل الخلية. يتم تحويل الرحيق إلى عسل عن طريق الإنزيمات الطبيعية التي يفرزها النحل وعمليات التبخير."
    },
    {
      question: "ما هي الفوائد الصحية للعسل؟",
      answer:
        "العسل يحتوي على مضادات أكسدة ومركبات مضادة للبكتيريا، وهو مفيد لتعزيز المناعة، تهدئة الحلق، وتحسين صحة الجهاز الهضمي."
    },
    {
      question: "ما هي التحديات التي تواجه إنتاج العسل؟",
      answer:
        "تشمل التحديات تغير المناخ، تدهور البيئة الطبيعية للنحل، استخدام المبيدات الزراعية، وانتشار الأمراض التي تؤثر على صحة النحل."
    },
    {
      question: "كيف يمكننا دعم النحل ومنتجي العسل؟",
      answer:
        "يمكننا دعم النحل من خلال زراعة النباتات المزهرة، تجنب استخدام المبيدات الضارة، وشراء العسل الطبيعي من مصادر موثوقة."
    },
    {
      question: "هل هناك أنواع مختلفة من العسل؟",
      answer:
        "نعم، تختلف أنواع العسل بناءً على نوع الأزهار التي يجمع منها النحل الرحيق، مثل عسل الزهور البرية، عسل الأكاسيا، وعسل المانوكا."
    }
  ];
  

  return (
    <div className="df-c">
      <div className=" pr qaf-p df !justify-center">
        <img src="/img/hiddenyellow.png" class="hiddeny" />
        <div className="title w-fit pr ta-c">
  أي أسئلة؟ انظر هنا
  <svg width="100%" height="10" xmlns="http://www.w3.org/2000/svg">
    <path
      className="path"
      d="M10,5 Q150,0 290,5"
      fill="none"
      stroke="#e3be63"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
</div>


      </div>

      <div className="wrapper !mt-20">
        {faqs.map((faq, index) => (
          <div className={`faq ${activeIndex === index ? "active" : ""}`} key={index}>
            <button
              className={`accordion df ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <p>
              {faq.question}

              </p>
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
