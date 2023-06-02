import React from 'react';
import zebraImage from "../../../public/zebra.jpg";

function ImageTest() {
    console.log({zebraImage});
  return (
    <img src={zebraImage} alt="zebra image" />
  )
}

export default ImageTest
