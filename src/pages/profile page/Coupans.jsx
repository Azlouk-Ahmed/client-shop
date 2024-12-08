function Coupans() {
  return (
    <div className="df-c">
      <div className="df-c !gap-8 bg-white p-4">
        <div className="title pr w-fit">حوّل نقاطك إلى كوبونات <div className="wave"></div></div> {/* Translated title */}
        <div className="df flex-wrap bg-white p-4">
          {/* Coupon #1 */}
          <div className="coupon">
            <div className="left-cop">
              <div>استمتع بهديتك</div> {/* Translated text */}
            </div>
            <div className="center-cop">
              <div>
                <h2>خصم 50%</h2> {/* Translated text */}
                <h3>كوبون</h3> {/* Translated text */}
                <small>صالح حتى مايو 2023</small> {/* Translated text */}
              </div>
            </div>
            <div className="right-cop">
              <div>87878521112</div>
            </div>
          </div>

          {/* Coupon #2 */}
          <div className="coupon">
            <div className="left-cop">
              <div>استمتع بهديتك</div>
            </div>
            <div className="center-cop">
              <div>
                <h2>خصم 50%</h2>
                <h3>كوبون</h3>
                <small>صالح حتى مايو 2023</small>
              </div>
            </div>
            <div className="right-cop">
              <div>87878521112</div>
            </div>
          </div>

          {/* Coupon #3 */}
          <div className="coupon">
            <div className="left-cop">
              <div>استمتع بهديتك</div>
            </div>
            <div className="center-cop">
              <div>
                <h2>خصم 50%</h2>
                <h3>كوبون</h3>
                <small>صالح حتى مايو 2023</small>
              </div>
            </div>
            <div className="right-cop">
              <div>87878521112</div>
            </div>
          </div>
        </div>

        <div className="df w-full">
          <div className="df w-1/2 mx-auto">
            <div className="simple-btn !justify-center flex-1 mr-auto">تطبيق</div> {/* Translated text */}
          </div>
        </div>
      </div>

      {/* Your Coupans Section */}
      <div className="df-c !gap-8 bg-white p-4">
        <div className="title pr w-fit">كوبوناتك <div className="wave"></div></div> {/* Translated title */}
        <div className="df flex-wrap bg-white p-4">
          {/* Available Coupon */}
          <div className="coupon available-cp">
            <div className="left-cop">
              <div>استمتع بهديتك</div>
            </div>
            <div className="center-cop">
              <div>
                <h2>خصم 50%</h2>
                <h3>#CP-403</h3>
                <small>صالح حتى مايو 2023</small>
              </div>
            </div>
            <div className="right-cop">
              <div>87878521112</div>
            </div>
          </div>

          {/* Soon Expiring Coupon */}
          <div className="coupon soon-cp">
            <div className="left-cop">
              <div>استمتع بهديتك</div>
            </div>
            <div className="center-cop">
              <div>
                <h2>خصم 50%</h2>
                <h3>3CP-302</h3>
                <small>سينتهي في 5 أيام</small> {/* Translated text */}
              </div>
            </div>
            <div className="right-cop">
              <div>87878521112</div>
            </div>
          </div>

          {/* Expired Coupon */}
          <div className="coupon expired-cp">
            <div className="left-cop">
              <div>استمتع بهديتك</div>
            </div>
            <div className="center-cop">
              <div>
                <h2>خصم 50%</h2>
                <h3>#CP-981</h3>
                <small>تم استخدام هذا الكود</small> {/* Translated text */}
              </div>
            </div>
            <div className="right-cop">
              <div>87878521112</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupans;
