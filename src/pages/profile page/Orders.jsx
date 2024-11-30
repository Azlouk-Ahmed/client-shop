import OrdersContent from "../../components/orders content/OrdersContent";

function Orders() {
  return (
    <div className="df sm-df-c ai-stretch">
        <div className="bg-white sm-w-full df-c p-4 w-4/12 orders ">
            <div className="title mb-12">طلباتي</div>
            <div className="order-box df-c p-4">
                <div className="df jc-sb">
                    <div className="font-bold">طلب#45</div>
                    <div className="status pending">قيد الانتظار</div>
                </div>
                <div className="df jc-sb">
                    <div className="font-bold">تاريخ الطلب :</div>
                    <div className="">21/02/2004</div>
                </div>
                <div className="df jc-sb">
                    <div className="font-bold">الشحن :</div>
                    <div className="">42$</div>
                </div>
                <div className="df jc-sb">
                    <div className="font-bold">الإجمالي :</div>
                    <div className="">3221$</div>
                </div>
            </div>
            <div className="order-box df-c p-4">
                <div className="df jc-sb">
                    <div>طلب#45</div>
                    <div className="status paid">مدفوع</div>
                </div>
                <div className="df jc-sb">
                    <div className="font-bold">تاريخ الطلب :</div>
                    <div className="">21/02/2004</div>
                </div>
                <div className="df jc-sb">
                    <div className="font-bold">الشحن :</div>
                    <div className="">42$</div>
                </div>
                <div className="df jc-sb">
                    <div className="font-bold">الإجمالي :</div>
                    <div className="">3221$</div>
                </div>
            </div>
            <div className="order-box df-c p-4">
                <div className="df jc-sb">
                    <div>طلب#45</div>
                    <div className="failed status">فشل</div>
                </div>
                <div className="df jc-sb">
                    <div className="font-bold">تاريخ الطلب :</div>
                    <div className="">21/02/2004</div>
                </div>
                <div className="df jc-sb">
                    <div className="font-bold">الشحن :</div>
                    <div className="">42$</div>
                </div>
                <div className="df jc-sb">
                    <div className="font-bold">الإجمالي :</div>
                    <div className="">3221$</div>
                </div>
            </div>
            <div className="order-box df-c p-4">
                <div className="df jc-sb">
                    <div>طلب#45</div>
                    <div className="failed status">فشل</div>
                </div>
                <div className="df jc-sb">
                    <div>تاريخ الطلب :</div>
                    <div className="">21/02/2004</div>
                </div>
                <div className="df jc-sb">
                    <div>الشحن :</div>
                    <div className="">42$</div>
                </div>
                <div className="df jc-sb">
                    <div>الإجمالي :</div>
                    <div className="">3221$</div>
                </div>
            </div>
        </div>
        <OrdersContent />
    </div>
  )
}

export default Orders;
