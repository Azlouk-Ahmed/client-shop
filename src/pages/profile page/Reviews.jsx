import { useState } from "react";
import Stars from "../../components/stars rate/Stars";

function Reviews() {
  const [filter, setFilter] = useState("all");

  const comments = [
    {
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      name: "أحمد بن علي",
      id: "#1594",
      since: "مندوب منذ 12 يناير 2020",
      rating: 5,
      date: "12 فبراير 2023",
      comment:
        "خدمة ممتازة ومنتجات عالية الجودة. سأوصي بها بالتأكيد! فريق العمل كان ودودًا جدًا واستجاب لكل استفساراتي بسرعة. الأسعار أيضًا معقولة، مقارنة بالجودة المقدمة. التجربة كانت سلسة من البداية إلى النهاية، ولم أواجه أي مشاكل في الشحن أو التسليم. هذا النوع من الخدمة يجعلني زبونًا دائمًا.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
      name: "خالد السعيد",
      id: "#4234",
      since: "مندوب منذ 5 مارس 2021",
      rating: 4,
      date: "25 يونيو 2023",
      comment:
        "تجربة رائعة بشكل عام، لكن يمكن تحسين سرعة التسليم. الشحنة وصلت متأخرة قليلاً عن المتوقع. ومع ذلك، جودة المنتجات كانت رائعة جدًا، ولم يكن هناك أي عيوب في التغليف. التواصل مع خدمة العملاء كان ممتازًا، وسأستمر في الشراء منهم مستقبلًا إذا تم تحسين سرعة التسليم.",
    },
    {
      img: "/img/product1.png",
      isProduct: true,
      name: "عسل السدر البري",
      id: "#5678",
      since: "منتج منذ 10 أكتوبر 2020",
      rating: 5,
      date: "15 أغسطس 2023",
      comment:
        "عسل طبيعي ومذاق رائع جدًا. استخدمته لتحلية المشروبات وأيضًا كعلاج طبيعي. أوصي به للجميع!",
    },
    {
      img: "/img/product2.png",
      isProduct: true,
      name: "عسل الغابة السوداء",
      id: "#9101",
      since: "منتج منذ 5 يوليو 2021",
      rating: 4,
      date: "7 سبتمبر 2023",
      comment:
        "جودة العسل ممتازة ولكن العبوة يمكن تحسينها. بشكل عام، المنتج يستحق الشراء.",
    },
    {
      img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      name: "فاطمة الزهراء",
      id: "#1242",
      since: "مندوب منذ 15 يوليو 2019",
      rating: 5,
      date: "30 أغسطس 2023",
      comment:
        "تعامل احترافي وأسعار مناسبة جدًا! لقد كنت أتعامل معهم لسنوات ولم أواجه أي مشاكل تذكر. دائمًا ما تكون المنتجات على أعلى مستوى من الجودة، والشحن يتم بسرعة كبيرة. التواصل مع الفريق سهل وسلس. أوصي بهذه الشركة لكل من يبحث عن الجودة والخدمة الممتازة.",
    },
  ];

  const filteredComments =
    filter === "all"
      ? comments
      : filter === "product"
      ? comments.filter((comment) => comment.isProduct)
      : comments.filter((comment) => !comment.isProduct);

  return (
    <div className="comments !w-full df-c section-card">
      {/* Filter bar */}
      <div className="df header-btns jc-sb filter-bar gap-4 bg-white px-4 py-6">
        <div className="df text-sm">
        <label className="df filter-option">
          <input
            type="radio"
            name="filter"
            value="all"
            checked={filter === "all"}
            onChange={(e) => setFilter(e.target.value)}
          />
          <span>عرض الكل</span>
        </label>
        <label className="df filter-option">
          <input
            type="radio"
            name="filter"
            value="product"
            checked={filter === "product"}
            onChange={(e) => setFilter(e.target.value)}
          />
          <span>المنتجات</span>
        </label>
        <label className="df filter-option">
          <input
            type="radio"
            name="filter"
            value="mandoub"
            checked={filter === "mandoub"}
            onChange={(e) => setFilter(e.target.value)}
          />
          <span>المندوبون</span>
        </label>

        </div>
        <div className="text-xs filtres">نتائج ({filteredComments.length})</div>
      </div>

      {/* Comments Section */}
      {filteredComments.map((review, index) => (
        <div
          key={index}
          className="df bg-white comment ai-fs gap-8 !px-4"
        >
          <div className="df comment-user-img ai-stretch">
            <img
              src={review.img}
              className={`${review.isProduct ? "!object-contain" : ""}`}
              alt="user"
            />
            <div className="df-c jc-sb flex-1">
              <div className="bold-1 text-lg">{review.name}</div>
              <div>
                <div className="text">{review.id}</div>
                <div className="text">{review.since}</div>
              </div>
            </div>
          </div>
          <div className="comment-content df-c">
            <div className="text df text-xs">
              <Stars number={review.rating} /> {review.date}
            </div>
            <div className="text">{review.comment}</div>
            <div className="df header-btns">
              <div
                className="simple-btn-outlined"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                حذف
              </div>
              <div
                className="simple-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                تعديل
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
