import { IoIosCart } from "react-icons/io"

function ProductSlide() {
  return (
    <div>
        <div className="df ta-c ai-c justify-between product !w-full" style={{ direction: "rtl" }}>
      <div className="product-img">
        <img src="/img/polygon.png" alt="" className="poly" srcSet="" />
        <img src="/img/shadow.png" alt="" className="shad" srcSet="" />
        <img src="/img/product1.png" alt="" className="prod" srcSet="" />
      </div>
      <div className="df-c infos w-1/2 items-center">
        
      <div className="title mt-12 pr">
        عسل الجراح
        <div className="wave"></div>
      </div>
      <div className="title v-p">
        18.8$
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M3,146.1c17.1-8.8,33.5-17.8,51.4-17.8c15.6,0,17.1,18.1,30.2,18.1c22.9,0,36-18.6,53.9-18.6 c17.1,0,21.3,18.5,37.5,18.5c21.3,0,31.8-18.6,49-18.6c22.1,0,18.8,18.8,36.8,18.8c18.8,0,37.5-18.6,49-18.6c20.4,0,17.1,19,36.8,19 c22.9,0,36.8-20.6,54.7-18.6c17.7,1.4,7.1,19.5,33.5,18.8c17.1,0,47.2-6.5,61.1-15.6"></path></svg>
      </div>
      <p className="text-sm mt-5">
        لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيكينغ إيليت. كوم، نون.
      </p>
      <div className="btn mt-8">
        أضف إلى السلة
        <div className="ic">
        <IoIosCart />

        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default ProductSlide