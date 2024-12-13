import { Link } from "react-router-dom";
import Stars from "../../components/stars rate/Stars";
import { useCartContext } from "../../hooks/useCartContext";

function Product({ list, product }) {
    const {dispatch} = useCartContext();

    const handleAddToCart = () => {
        dispatch({type : "ADD_PRODUCT", payload : product})
      };
  
    return (
      <div className={`container-prod sm-w-full sm-df-c ai-stretch ${list ? "df  !w-3/4 mx-auto" : "df-c w-col"}`}>
        <div>
          <div className="images">
            <img src={product.img} alt="صورة المنتج" />
          </div>
  
          <div className="sizes df w-full">
            {product.colors.map((color, index) => (
              <div
                key={index}
                style={{ background: color }}
                className={`color ${index === 0 ? "selected-col" : ""}`}
              ></div>
            ))}
          </div>
          <p className="pick">اختر اللون</p>
          <div className="sizes">
            {product.sizes.map((size, index) => (
              <div
                key={index}
                className={`size ${index === 0 ? "selected-s" : ""}`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="product flex1">
          <p>{product.name}</p>
          <Link to="./7" className="title pr w-fit"><div className="wave"></div>{product.title}</Link>
          <h2 className="!mt-4">{product.price}</h2>
          <Stars number={product.rate} />
          <p className="desc">{product.shortDesc}</p>
          <div className="buttons df">
            <button onClick={handleAddToCart} className="simple-btn !px-2 flex1 justify-center">
              أضف إلى السلة
            </button>
            <button className="simple-btn !px-2">
              <span>♥</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Product;
  