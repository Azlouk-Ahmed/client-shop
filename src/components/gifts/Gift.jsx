import "./gift.css"
function Gift() {
  return (
    <div className="gifts sm-ta-c sm-df-c container-padding mt-28">
        <div className="df sm-df-c !gap-16">
            <div className="df-c sm-w-full w-2/5">
                <div className="title pr w-fit">✨ نظام الهدايا الحصري لدينا يجعل تجربة التسوق أكثر حلاوة! ✨</div>
                <p className="df-c">
                    اشترِ الكمية التي تحتاجها من أنواع العسل الطبيعي المميز لدينا، واحصل على فرصة للحصول على هدايا رائعة ضمن نظام المكافآت الخاص بنا.
                    <ul >
                        <li className="pr-8">🎁 اشترِ 30 كجم من عسل الأكاسيا أو أي نوع آخر، واحصل على هدية مميزة من قائمتنا الأولى، مثل ملعقة عسل خشبية أنيقة أو عينة مجانية من عسلنا الفاخر.</li>
                        <li className="pr-8">🎁 مع شراء 100 كجم، انتقل إلى المستوى الثاني من الهدايا واحصل على هدايا أكثر قيمة، مثل علبة هدايا خاصة أو خصم إضافي على مشترياتك القادمة.</li>
                        <li className="pr-8">🎁 أما إذا اشتريت 200 كجم أو أكثر، فسوف تحصل على هدية فاخرة من المستوى الثالث، مثل سلة عسل فاخرة أو موزع عسل زجاجي مميز.</li>
                    </ul>
                    كلما زادت مشترياتك، زادت قيمة هديتك! لا تفوّت هذه الفرصة لجعل تسوقك أكثر متعة وفائدة. 🛒✨ ابدأ الآن وكن من عملائنا المميزين!
                </p>
            </div>
            <div className="df sm-df-c tr- flex1">
                <div className="flex1 tr df-c items-center">
                    <div className="title">المستوى الأول</div>
                    <div className="product-img">
                        <img src="/img/polygon.png" alt="" className="poly" srcSet="" />
                        <img src="/img/lvl1.png" alt="" className="prod" srcSet="" />
                    </div>
                </div>
                <div className="flex1  df-c items-center">
                    <div className="title mb-6">المستوى الثالث</div>
                    <div className="product-img ">
                        <img src="/img/polygon.png" alt="" className="poly scale" srcSet="" />
                        <img src="/img/lvl3.png" alt="" className="prod scale" srcSet="" />
                    </div>
                </div>
                <div className="flex1 tr df-c items-center">
                    <div className="title">المستوى الثاني</div>
                    <div className="product-img">
                        <img src="/img/polygon.png" alt="" className="poly" srcSet="" />
                        <img src="/img/lvl2.png" alt="" className="prod" srcSet="" />
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Gift