function About() {
  return (
    <div className="about pr">
        <img src="/img/hiddenyellow.png" className="hiddeny" />
        <img src="/img/hiddenbg.png" className="hiddenbg" />
        <div className="about-content">
            <div className="title ta-c title title3">لماذا نحن؟</div>
            <div className="mt-28">
                <div className="df justify-center w-full">
                    <div className="element sm-w-full df-c ta-c ai-c">
                    <img src="/img/honeyicon.png" className="beeicon" />
                        <span className="title title3 !text-base">املأ عربة التسوق بما تحتاجه واستمتع بهدايا مجانية على طلباتك.</span>
                    </div>
                </div>
                <div className="df jc-sb sm-df-c sm-w-full mt-16">
                    <div className="element sm-w-full df-c ta-c ai-c">
                    <img src="/img/purchase.png" className="beeicon" />
                        <span className="title title3 !text-base">ننتج أفضل أنواع العسل. ستندهش من تنوع النكهات</span>
                    </div>
                    <div className="pr sdnone">
                        <img src="/img/beebee.png" className="aboutbee" />
                        <img src="/img/dashed.png" className="dashed m-d-none" />
                    </div>
                    <div className="element sm-w-full df-c ta-c ai-c">
                    <img src="/img/quality.png" className="beeicon" />
                        <span className="title title3 !text-base">جميع المنتجات معتمدة وتلبي المعايير الدولية</span>
                    </div>
                </div>
                <div className="df justify-around sm-df-c mt-16 w-full">
                    <div className="element sm-w-full df-c ta-c ai-c">
                    <img src="/img/delivery-man.png" className="beeicon" />
                        <span className="title title3 !text-base">نهتم بعملائنا، لذلك سنقوم بتوصيل منتجاتنا إلى أي مكان</span>
                    </div>
                    <div className="element sm-w-full df-c ta-c ai-c">
                        <img src="/img/beeicon.png" className="beeicon" />
                        <span className="title title3 !text-base">نلتزم بالجوانب الطبيعية والنقية لمنتجاتنا. نقدم مجموعة من المنتجات القائمة على النباتات وكنوز الخلية من الزراعة العضوية</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;
