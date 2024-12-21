import { useEffect, useState } from "react";
import "./faq.css";
import { IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { GiHoneyJar } from "react-icons/gi";

const Faq = () => {
    const [selectedItem, setSelectedItem] = useState("عسل البرسيم");
  const [activeIndex, setActiveIndex] = useState(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev); // Toggle the menu open/close
  };
  

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [selectedSubject, setSelectedSubject] = useState("");

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
  const handleItemClick = (itemText,e ) => {
    e.stopPropagation();
    setSelectedItem(itemText); // Update the selected item
  setIsOpenMenu(false); // Close the menu
  console.log("Selected Item:", itemText); // Debug
    
  };
  useEffect(() => {
    console.log("Menu State updated:", isOpenMenu);
  }, [isOpenMenu]);

  const handleChange = (e) => {
    setSelectedSubject(e.target.value); // Update state on selection
  };
  

  return (
    <div className="df-c p-4">
      <div className="df justify-center ai-stretch sm-df-c sm-w-full ">
      <div className="client-info sm-w-full">
  <div className="df-c">
    <img src="/img/contact.webp" alt="" />
    
    <div className="df-c">
      <div className="title">العنوان</div>
      <p>طريق ولاية نيويورك، نيويورك، الولايات المتحدة</p>
    </div>

    <div className="df-c">
      <div className="title">الهاتف</div>
      <p>+129290122122</p>
    </div>

    <div className="df-c">
      <div className="title">البريد الإلكتروني</div>
      <p>demo@demo.com</p>
    </div>

    <div className="df-c">
      <div className="title">الموقع الإلكتروني</div>
      <a href="https://redq.io" target="_blank" rel="noopener noreferrer">
        https://redq.io
      </a>
    </div>
  </div>
</div>

        <div id="container">
  <h1>&bull; ابق على تواصل &bull;</h1>
  <div class="icon_wrapper df justify-center">
    <img className="w-10" src="/img/mobile-phone.png" alt="" />
    <img className="w-10" src="/img/beecontact.png" alt="" />
  </div>
  <form action="#" method="post" id="contact_form">
    <div className="df sm-df-c sgap-0 ">
    <div class="name flex1 sm-w-full">
      <label for="name"></label>
      <input type="text" placeholder="اسمي هو" name="name" id="name_input" required />
    </div>
    <div class="name flex1 sm-w-full">
      <label for="surname"></label>
      <input type="text" placeholder="لقبي هو" name="surname" id="surname_input" required />
    </div>

    </div>
    <div class="subject">
      <label for="subject"></label>
      <select
        placeholder="موضوع الرسالة"
        name="subject"
        id="subject_input"
        required
        value={selectedSubject}
        onChange={(e) => setSelectedSubject(e.target.value)} // Update state on change
      >
        <option disabled hidden value="">
          موضوع الرسالة
        </option>
        <option value="start_project">أود بدء مشروع</option>
        <option value="ask_question">أود أن أطرح سؤالًا</option>
        <option value="submit_suggestion">أود أن أقدم اقتراحًا</option>
        <option value="buy_bulk">أود الشراء بالجملة</option>
        <option value="report_problem">أود الإبلاغ عن مشكلة</option>
      </select>

    </div>
    {
      selectedSubject === "buy_bulk" && (
        <div onClick={toggleMenu} className={`menu-item pr ${isOpenMenu ? "select" : ""}`}>

            <div className="menu-text w-full">
              <div className="df jc-sb w-full">

              <div className="df">
                <GiHoneyJar /> <div>{selectedItem}</div>
              </div>
                <IoMdArrowDropdown />
              </div>
            </div>
          { isOpenMenu && (
            <div className="sub-menu">
              <div className="icon-box df" onClick={(e) => handleItemClick("عسل البرسيم",e)}>
                <GiHoneyJar />
                <div className="text">
                  <div className="title">
                    عسل البرسيم<i className="far fa-arrow-right"></i>
                  </div>
                  <div className="sub-text">عسل البرسيم الطبيعي، غني بالعناصر الغذائية.</div>
                </div>
              </div>
              <div className="icon-box df" onClick={(e) => handleItemClick("عسل الزهور",e)}>
                <GiHoneyJar />
                <div className="text">
                  <div className="title">
                    عسل الزهور<i className="far fa-arrow-right"></i>
                  </div>
                  <div className="sub-text">عسل الزهور، طعمه لذيذ ومفيد للصحة.</div>
                </div>
              </div>
              <div className="icon-box df" onClick={(e) => handleItemClick("عسل الغابة السوداء",e)}>
                <GiHoneyJar />
                <div className="text">
                  <div className="title">
                    عسل الغابة السوداء<i className="far fa-arrow-right"></i>
                  </div>
                  <div className="sub-text">عسل الغابة السوداء، ذو نكهة غنية ومميزة.</div>
                </div>
              </div>
              <div className="icon-box df" onClick={(e) => handleItemClick("عسل الكينا",e)}>
                <GiHoneyJar />
                <div className="text">
                  <div className="title">
                    عسل الكينا<i className="far fa-arrow-right"></i>
                  </div>
                  <div className="sub-text">عسل الكينا، مشهور بفوائده التنفسية.</div>
                </div>
              </div>
            </div>
          )}

          {
            selectedSubject === "buy_bulk" && (
              <div class="name !w-full flex1 mt-4 sm-w-full">
                <label for="surname"></label>
                <input type="text" placeholder="الكمية" name="surname" id="surname_input" required />
              </div>
            )
          }
          
        </div>
      )
    }
    
    <div class="message">
      <label for="message"></label>
      <textarea name="message" placeholder="أود التحدث عن" id="message_input" cols="30" rows="5" required></textarea>
    </div>
    <div class="simple-btn w-fit mx-auto">
       إرسال الرسالة
    </div>
  </form>
</div>

      </div>
      

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
