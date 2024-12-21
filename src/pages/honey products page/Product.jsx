import { Link } from "react-router-dom";
import Stars from "../../components/stars rate/Stars";
import { useCartContext } from "../../hooks/useCartContext";
import { useState } from "react";

function Product({ list, product }) {
  const { dispatch } = useCartContext();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    const selectedProduct = {
      ...product,
      selectedColor,
      selectedSize,
    };
    console.log(selectedProduct);
    dispatch({type : "ADD_PRODUCT",payload: selectedProduct})
  };

  return (
    <div
      className={`container-prod sm-w-full sm-df-c ai-stretch ${
        list ? "df  !w-full mx-auto" : "df-c w-col"
      }`}
    >
      <div>
        <div className="images">
          <img src={product.img} alt="صورة المنتج" />
        </div>

        <p className="pick">اختر اللون والمقاس</p>
        <div className="sizes df w-full">
          {product.colors.map((color, index) => (
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
        <div className="sizes">
          {product.sizes.map((size, index) => (
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
      <div className="product flex1">
      <div className="df">
        <h2 className="">{product.price}</h2>
        - <Stars number={product.rate} />

        </div>
        <p>{product.name}</p>
        <Link to="./7" className="title pr w-fit">
          <div className="wave"></div>
          {product.title}
        </Link>
        
        {/* <p className="desc">{product.shortDesc}</p> */}
        <div className="buttons  mt-5 df">
          <button
            onClick={handleAddToCart}
            className="simple-btn !px-2 flex1 justify-center"
          >
            أضف إلى السلة
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
