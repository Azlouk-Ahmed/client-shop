function Product({list}) {
    return (
      <div class={`container-prod ai-stretch ${list? 'df ' : "df-c w-col"}`}>
        <div>
  
          <div class="images">
            <img src="https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C5158Q5XbN1L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png" alt="صورة المنتج" />
          </div>
          <div class="slideshow-buttons">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
  
          <div class="sizes df w-full">
            <div style={{ background: "yellow" }} class="color selected-col"></div>
            <div style={{ background: "orange" }} class="color"></div>
            <div style={{ background: "orangered" }} class="color"></div>
          </div>
          <p class="pick">اختر اللون</p>
          <div class="sizes">
            <div class="size selected-s">S</div>
            <div class="size">L</div>
            <div class="size">XL</div>
            <div class="size">XXL</div>
          </div>
        </div>
        <div class="product flex1">
          <p>حذاء الجري للسيدات</p>
          <h1> إيبيك رياكت فلايكنيت</h1>
          <h2>$150</h2>
          <p class="desc">
            وسادة نايك إيبيك رياكت فلايكنيت توفر الراحة والاستجابة، فهي خفيفة الوزن، متينة وناعمة. هذا التصميم يضيف إحساسًا ممتعًا أثناء الجري ويعزز شعورك بالتقدم للأمام.
          </p>
          <div class="buttons df">
            <button class="simple-btn !px-2 flex1 justify-center">أضف إلى السلة</button>
            <button class="simple-btn !px-2"><span>♥</span></button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Product;
  