import { useState } from "react";

const ImageMagnifier = ({
    src,
    className,
    width,
    height,
    alt,
    magnifierHeight = 150,
    magnifierWidth = 150,
    zoomLevel = 3,
}) => {
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [[x, y], setXY] = useState([0, 0]);

    const handleEnter = (e) => {
        const el = e.currentTarget;
        const { width, height } = el.getBoundingClientRect();
        setSize([width, height]);
        setShowMagnifier(true);
    };

    const handleLeave = () => {
        setShowMagnifier(false);
    };

    const handleMove = (pageX, pageY, el) => {
        const { top, left } = el.getBoundingClientRect();
        const x = pageX - left - window.scrollX;
        const y = pageY - top - window.scrollY;
        setXY([x, y]);
    };

    const handleMouseMove = (e) => {
        handleMove(e.pageX, e.pageY, e.currentTarget);
    };

    const handleTouchMove = (e) => {
        const touch = e.touches[0];
        handleMove(touch.pageX, touch.pageY, e.currentTarget);
    };

    return (
        <div
            className="relative inline-block"
            style={{ position: "relative", display: "inline-block" }}
        >
            <img
                src={src}
                className={className}
                width={width}
                height={height}
                alt={alt}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                onMouseMove={handleMouseMove}
                onTouchStart={handleEnter}
                onTouchEnd={handleLeave}
                onTouchMove={handleTouchMove}
            />
            <div
                style={{
                    display: showMagnifier ? "" : "none",
                    position: "absolute",
                    pointerEvents: "none",
                    height: `${magnifierHeight}px`,
                    width: `${magnifierWidth}px`,
                    opacity: "1",
                    border: "1px solid lightgrey",
                    backgroundColor: "white",
                    borderRadius: "5px",
                    backgroundImage: `url('${src}')`,
                    backgroundRepeat: "no-repeat",
                    top: `${y - magnifierHeight / 2}px`,
                    left: `${x - magnifierWidth / 2}px`,
                    backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                    backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
                    backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
                }}
            />
        </div>
    );
};

export default ImageMagnifier;
