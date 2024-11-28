import "./imgshape.css";

function ImgShapeContainer({ path, width, height }) {
  return (
    <div 
      className="shape" 
      style={{
        width: width ? width+"rem" : "10rem",
        height: height ? height+"rem" : "10rem"
      }}
    >
      <img src={path} alt="Shape" />
    </div>
  );
}

export default ImgShapeContainer;
