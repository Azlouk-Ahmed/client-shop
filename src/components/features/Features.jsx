function Features() {
    return (
        <div className="ft df-c items-center">
            <div className="title">من خلايا النحل لدينا إلى <strong>منزلك</strong></div>
            <div className="df justify-around w-4/5 mt-20 sm-df-c sm-g-3">



                <div className="df-c ta-c justify-center">
                    <img src="/img/new-house.png" className="w-32" alt="" />
                    <div className="title">
                        مُصنّع
                        <div className="highlighted">
                             في البيت
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
                </div>
                <div className="df-c ta-c justify-center">
                    <img src="/img/feeding.png" className="w-32 mx-auto" alt="" />
                    <div className="title df !gap-1"> مزارع 
                        <span className="pr col-sec"> 
                        صديقة للبيئة
                        <div className="wave"></div>
                        </span>
                    </div>
                </div>
                <div className="df-c ta-c justify-center">
                    <img src="/img/honey.png" className="w-32" alt="" />
                    <div className="title pr">منتجات <span className="typewriter">طبيعية</span> <img src="/img/dashed1.png" className="dashed1 adjusting sdnone" /></div>
                </div>
            </div>
        </div>
    );
}

export default Features;
