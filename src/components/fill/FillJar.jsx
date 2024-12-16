import { useHoneyContext } from '../../hooks/useAuthContext';
import { useCartContext } from '../../hooks/useCartContext';
import { motion } from 'framer-motion';

function FillJar() {
  const { cart } = useCartContext();
  const { selectedHoney } = useHoneyContext();

  const TotalKG = cart.reduce((total, product) => {
    return total + (typeof product?.weightInKg === "number" && !isNaN(product.weightInKg) ? product.weightInKg * product.quantity : 0);
  }, 0);

  const getPercentage = (honeyLevel) => {
    const maxLevel = 300;
    const percentage = (honeyLevel / maxLevel) * 100;
    return percentage > 100 ? 100 : percentage; 
  };

  return (
    <motion.div 
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5,
        },
      }}}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.7 }}
    className="fill-jar pt-12 pr-20 pr">
      <img src="/img/spl.png" className="spl" alt="" />
      <img src="/img/spl2.png" className="spl2" alt="" />
      <img src="/img/flowerleft.png" className="flowerleft !w-20 !top-full" alt="" />
      <div className="df justify-center fdj !items-stretch">
        <img src="/img/fill.png" className="w-2/6 m-d-none sdnone" alt="" />
        <div className="w-1/4 m-w-60 m-items-center honey-fill-instr flex flex-col content-center gap-2 items-center m-gap-3">
          <div className="title title3">املأ باقتك بالجملة!</div>
          <p className="ta-c">
            املأ باقتك ب{selectedHoney}! كلما زادت كمية العسل التي تختارها بالكيلوغرامات، اقتربت خطوة نحو الحصول على هدية مميزة. اختر الكمية التي ترغب فيها، وشاهد تقدمك نحو الهدية على شريط التقدم. لا تتردد في زيادة الكمية لتحصل على هديتك!
          </p>
        </div>
        <div className="fill-bar ">
          <div className="prop-cont incl">
            <div
              className="prog"
              style={{ height: '100%' }}
            ></div>
            <div className="indic1" style={{ bottom: getPercentage(100) + '%' }}>
              <img src='/img/gift.png' alt="" />
            </div>
            <div className="indic2" style={{ bottom: getPercentage(200) + '%' }}>
              <img src='/img/gift.png' alt="" />
            </div>
            <div className="indic3" style={{ bottom: getPercentage(300) + '%' }}>
              <img src='/img/gift.png' alt="" />
            </div>
          </div>
          <motion.div
            className="prop-cont floating--bar"
            variants={{
              hidden: { position:"absolute",opacity: 0, top: "0", left: "20%" },
              show: {
                position:"fixed",
                opacity: 1,top: "unset", left: "1rem",bottom:"1rem",
                transition: {
                  type: "tween", // Use tween for duration control
                  duration: 1.5,   // Set the desired duration here
                  ease: "easeOut",
                },
              }}}
          >
            <div
              className="prog"
              style={{ height: `${getPercentage(TotalKG) + '% '}` }}
            ></div>
            <div className="indic1" style={{ bottom: getPercentage(100) + '%' }}>
              <img src='/img/gift.png' alt="" />
            </div>
            <div className="indic2" style={{ bottom: getPercentage(200) + '%' }}>
              <img src='/img/gift.png' alt="" />
            </div>
            <div className="indic3" style={{ bottom: getPercentage(300) + '%' }}>
              <img src='/img/gift.png' alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default FillJar;
