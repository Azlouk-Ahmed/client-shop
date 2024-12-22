import "./terms.css";
import { useRef } from "react";

function Terms() {
  const sections = [
    { id: "section1", label: "الجزء الأول" },
    { id: "section2", label: "الجزء الثاني" },
    { id: "section3", label: "الجزء الثالث" },
    { id: "section4", label: "الجزء الثالث" },
    { id: "section5", label: "الجزء الثالث" },
    { id: "section6", label: "الجزء الثالث" },
    { id: "section7", label: "الجزء الثالث" },
  ];

  const contentParentRef = useRef(null);

  const handleScrollTo = (id) => {
    const targetElement = document.getElementById(id);
    if (contentParentRef.current && targetElement) {
      const offsetTop = targetElement.offsetTop - contentParentRef.current.offsetTop;
      contentParentRef.current.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div className="df-c">
      {/* Header Section */}
      <div className="pr qaf-p df !justify-center">
        <img src="/img/hiddenyellow.png" className="hiddeny bottom12" alt="Decorative" />
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

      {/* Main Section */}
      <div className="df menu-elements-parent w-fit justify-center ai-fs mx-auto mt-20 sm-df-c">
        {/* Navigation Menu */}
        <div className="menu-links section w-1/4 sm-w-full">
          <ul className="df-c">
            {sections.map((section,index) => (
              <h2
                key={section.id}
                className={`menu-item font-bold text-lg cursor-pointer`}

                onClick={() => handleScrollTo(section.id)}
              >
                {section.label}
              </h2>
            ))}
          </ul>
        </div>

        {/* Content Sections */}
        <div ref={contentParentRef} className="content-parent w-1/3">
          <div className="content">
            {sections.map((section, index) => (
              <div key={section.id} id={section.id} className={`section ${index === sections.length - 1 ? 'padding-ha' : ''}`}
>
                <h2 className="section-title font-bold text-lg">{section.label}</h2>
                <p>
                  هذا هو محتوى {section.label}. يمكنك تعديل المحتوى هنا بناءً على احتياجاتك.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, error debitis. Tempore minus veritatis qui, odio modi nemo labore hic ea dolor dicta molestiae, laudantium, explicabo possimus vero eum quod.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
