import React from "react";
import clsx from "clsx";
import defaultPhoto from "../../assets/product-default-image.png";

import "./Photo.css";

const Photo = ({ className, ...props }) => (
  <img
    className={clsx("photo", className)}
    src={defaultPhoto}
    alt=""
    {...props}
  />
);

export default Photo;
