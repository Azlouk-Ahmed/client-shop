import { useState } from "react";
import ReviewsPage from "../../components/reviews/ReviewsPage";
import Stars from "../../components/stars rate/Stars";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const productData = {
    name: "MOMENTUM",
    model:"505795",
    isProduct: true,
    title: "لاسلكي أسود",
    price: 499.95,
    rate: 4,
    reviewsCount: 153,
    shortDesc: "سماعات رأس لاسلكية مع ميكروفون مدمج.",
    description:
      "أداء عالي مع إلغاء الضوضاء النشط. سماعات MOMENTUM اللاسلكية الجديدة من Sennheiser - سماعة رأس محيطية مغلقة بتقنية Bluetooth® اللاسلكية وإلغاء الضوضاء النشط NoiseGard Hybrid.",
    img: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C5158Q5XbN1L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    colors: ["yellow", "orange", "orangered"],
    sizes: ["S", "L", "XL", "XXL"],
    quantity: 1,
    descriptionInformation: "تصميم أنيق وراحة فائقة. قميص MOMENTUM الجديد من القطن عالي الجودة - يتميز بخامة مرنة وتقنية حديثة تضمن الراحة والمتانة طوال اليوم.",
    specifications: [
      { characteristic: "نوع التثبيت على الأذن", value: "حول الأذن" },
      { characteristic: "مبدأ التحويل", value: "ديناميكي، مغلق" },
      { characteristic: "استجابة التردد", value: "16Hz – 22kHz" },
      { characteristic: "مستوى ضغط الصوت (SPL)", value: "113 ديسيبل (سلبي: 1 كيلوهرتز / 1 فولت فعال)" },
      { characteristic: "إجمالي التشويه التوافقي (THD)", value: "<0.5% (1 كيلوهرتز، 100 ديسيبل SPL)" },
      { characteristic: "التحكم في مستوى الصوت", value: "تحكم على الأذن عند الاتصال عبر Bluetooth" },
      { characteristic: "نوع الميكروفون", value: "ميكروفون مزدوج متعدد الاتجاهات (2 ميكروفون مع تشكيل شعاعي)" },
      { characteristic: "الكابل / الموصل", value: "1.4 متر (قابل للفصل) / 3.5 مم بزاوية" },
      { characteristic: "الوزن", value: "260 جم (9.17 أوقية)" },
    ],
  };


function HoneyProductDetailsPage() {
  const [quantity, setQuantity] = useState(productData.quantity);
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [selectedSize, setSelectedSize] = useState(productData.sizes[0]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : Math.max(1, prev - 1)));
  };

  return (
    <main className="main">
      <div className="mainWrapper">
        <div className="mainBackground">
          <div className="flex flex-wrap">
            <div className="flex1">
              <div className="productCard_block">
                <div className="flex flex-wrap">
                  {/* Left Side: Product Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="productCard_leftSide">
                      <div className="productCard_brendBlock">
                        <a className="productCard_brendBlock__imageBlock" href="#">
                          <img
                            src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/brtendsLogos/logo_sennheiser.png?raw=true"
                            alt="sennheiser"
                          />
                        </a>
                      </div>
                      <div className="sliderBlock">
                        <ul className="sliderBlock_items">
                          <li className="sliderBlock_items__itemPhoto sliderBlock_items__showing">
                            <img src={productData.img} alt="headphones" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Product Details */}
                  <div className="w-full lg:w-1/2">
                    <div className="productCard_rightSide">
                      <div className="block_specification">
                        <div className="block_specification__informationShow hidden">
                          <i
                            className="fa fa-info-circle block_specification__button block_specification__button__jump"
                            aria-hidden="true"
                          ></i>
                          <span className="block_specification__text">معلومات</span>
                        </div>
                      </div>

                      <p className="block_model">
                        <span className="block_model__text">الموديل: </span>
                        <span className="block_model__number">{productData.model}</span>
                      </p>

                      <div className="block_product">
                        <h2 className="block_name block_name__mainName">
                          {productData.name}
                          <sup>&reg;</sup>
                        </h2>
                        <h2 className="block_name block_name__addName">{productData.title}</h2>
                        <p className="block_product__advantagesProduct">{productData.shortDesc}</p>
                        <div class="block_descriptionInformation">
                            <span>{
                                productData.descriptionInformation
                                }
                            </span>
                        </div>

                        <div className="block_informationAboutDevice">
                          <div className="df">
                            <Stars number={productData.rate} />
                            <span className="block_rating__avarage">{productData.rate}</span>
                            <span className="block_rating__reviews">(153 تقييم)</span>
                          </div>
                          <div className="flex flex-wrap">
                            {/* Price and Quantity */}
                            <div className="lg:w-1/2 w-full">
                              <div className="block_price">
                                <p className="block_price__currency">ر.س {productData.price}</p>
                                <p className="block_price__shipping">الشحن والضرائب إضافية</p>
                              </div>
                              <div className="block_quantity">
                                <span className="text_specification">الكمية</span>
                                <div className="block_quantity__chooseBlock">
                                  <input
                                    className="block_quantity__number"
                                    name="quantityNumber"
                                    type="text"
                                    readOnly
                                    value={quantity}
                                  />
                                  <div className="df-c">
                                    <button
                                      className="block_quantity__button block_quantity__up"
                                      onClick={() => handleQuantityChange("increase")}
                                    >
                                      <IoIosArrowUp />
                                    </button>
                                    <button
                                      className="block_quantity__button block_quantity__down"
                                      onClick={() => handleQuantityChange("decrease")}
                                    >
                                      <IoIosArrowDown />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Color Selection */}
                            <div className="lg:w-1/2 w-full">
                              <div className="block_goodColor">
                                <span className="text_specification">اختر الألوان:</span>
                                <div className="sizes df w-full">
                                  {productData.colors.map((color, index) => (
                                    <div
                                      key={index}
                                      style={{ background: color }}
                                      className={`color ${
                                        color === selectedColor ? "selected-col" : ""
                                      }`}
                                      onClick={() => handleColorSelect(color)}
                                    ></div>
                                  ))}
                                </div>
                              </div>
                              <div className="block_goodColor">
                                <span className="text_specification">sizes:</span>
                                <div className="sizes df">
                                  {productData.sizes.map((size, index) => (
                                    <div
                                      key={index}
                                      className={`size ${size === selectedSize ? "selected-s" : ""}`}
                                      onClick={() => handleSizeSelect(size)}
                                    >
                                      {size}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <button className="styling__resp simple-btn content-center mt-8">أضف إلى السلة</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReviewsPage product={true} />
    </main>
  );
}

export default HoneyProductDetailsPage;
