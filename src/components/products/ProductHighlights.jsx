import React, { memo, useMemo } from "react";
import ProductHighlight from "./ProductHighlight";
import ProductHighlight1Img from "../../assets/images/ProductHighlight1.jpg";
import ProductHighlight2Img from "../../assets/images/ProductHighlight1.webp";
import ProductHighlightData from "../../configs/ProductHightlight.json";

const imgSrc = {
  ProductHighlight1Img: ProductHighlight1Img,
  ProductHighlight2Img: ProductHighlight2Img,
};

const ProductHighlights = () => {
  const highlights = useMemo(() => ProductHighlightData.map((item, index) => ({
    ...item,
    imgSource: imgSrc[item.imgSrc]
  })), []);
  return (
    <div id="brand-overview">
      {highlights.map((item, index) => (
        <ProductHighlight
          key={index}
          imgSrc={item.imgSource}
          isReverse={item.isReverse}
        >
          <p
            className="text-3xl md:text-4xl lg:text-5xl font-magnificent"
            dangerouslySetInnerHTML={{
              __html: item.content.title,
            }}
          />
          <p className="font-lato w-full lg:text-xl">
            {item.content.description}
          </p>
          {item.buttonText && (
            <button className={item.button.style}>{item.button.text}</button>
          )}
        </ProductHighlight>
      ))}
    </div>
  );
};

export default memo(ProductHighlights);