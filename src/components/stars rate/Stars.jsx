import React from "react";
import { TbStar } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import "./stars.css"

function Stars({ number }) {
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < number ? <TbStarFilled /> : <TbStar />
  );
  return <div className="stars-range">{stars}</div>;
}

export default Stars;
