import React from "react";
import SignatureImg from "../../assets/images/SignatureBg.svg";
import SIGNATURE_PRODUCTS from "../../configs/SignatureProducts.json";
import SignatureProduct from "./SignatureProduct";

const SignatureProducts = () => {
  return (
    <div className="relative w-full">
      <div
        className="absolute inset-0 -top-[18%]  -z-10"
        style={{
          backgroundImage: `url(${SignatureImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 px-4 py-8 md:py-12">
        <div className="w-full md:w-[76%] mx-auto">
          <p className="font-magnificent text-2xl text-[#E6E6E6] md:text-3xl w-full md:w-[70%] lg:w-[50%] text-start mb-8">
            Các dòng sản phẩm tiêu biểu của chúng tôi
          </p>

          <div className="grid grid-cols-12 gap-4 md:gap-6 overflow-x-auto">
            {SIGNATURE_PRODUCTS.map((product, index) => (
              <SignatureProduct key={index} {...product} id={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureProducts;
