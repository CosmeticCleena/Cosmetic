import RightArrow from "../../assets/icons/RightArrow.svg";
import { useNavigate } from "react-router-dom";
import SignatureProductImages from "../../configs/signature_products/signature_products.js";

const SignatureProduct = ({ title, description, id, image }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/products/${id}`);
      }}
      className="bg-[#FCF7E1] col-span-8 md:col-span-6 lg:col-span-3 rounded-lg p-4 shadow-lg hover:bg-[#E3C988]
                 transition-all duration-300 flex flex-col col-start-3 sm:col-start-1 cursor-pointer h-full"
    >
      <div className="flex-shrink-0 h-[270px] flex items-center justify-center mb-4">
        <img
          src={SignatureProductImages[image]}
          alt={title}
          className="object-contain max-h-full max-w-full h-auto w-auto"
          loading="lazy"
        />
      </div>

      <div className="flex  items-start justify-between my-0 py-0 text-[#967031] font-magnificent space-x-4 text-3xl mx-auto flex-shrink-0 md:h-[200px] ">
        <p
          className="bg-clip-text text-transparent bg-gradient-to-r from-[#B08B3B] to-[#EAC980] text-2xl md:text-3xl flex-1 leading-tight
                      overflow-hidden
                      [display:-webkit-box]
                      [-webkit-box-orient:vertical]
                      [-webkit-line-clamp:5]
                      [line-clamp:5]"
        >
          {title}
        </p>
        <img
          src={RightArrow}
          alt="Right Arrow"
          className="inline-block align-top h-fit object-contain flex-shrink-0 mt-1"
          loading="lazy"
        />
      </div>

      <div className="flex-1 flex items-start mt-4">
        <p className="text-start text-[#0A0A0A] font-lato leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SignatureProduct;
