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
                 transition-all duration-300 flex flex-col col-start-3 sm:col-start-1 cursor-pointer
                 h-[700px]" // Tăng chiều cao để chứa description đầy đủ
    >
      {/* Container cho ảnh với chiều cao cố định */}
      <div className="flex-shrink-0 h-[270px] flex items-center justify-center mb-4">
        <img
          src={SignatureProductImages[image]}
          alt={title}
          className="object-contain max-h-full max-w-full h-auto w-auto"
          loading="lazy"
        />
      </div>

      {/* Container cho title với chiều cao cố định */}
      <div className="flex items-start justify-between h-[150px] mb-4 text-[#967031] font-magnificent">
        <p
          className="bg-clip-text text-transparent bg-gradient-to-r from-[#B08B3B] to-[#EAC980]
                     text-xl sm:text-2xl md:text-3xl flex-1 mr-4 leading-tight
                     line-clamp-4 overflow-hidden"
        >
          {title}
        </p>
        <img
          src={RightArrow}
          alt="Right Arrow"
          className="inline-block mt-1 h-fit object-contain flex-shrink-0"
          loading="lazy"
        />
      </div>

      {/* Description với chiều cao cố định để căn chỉnh, hiển thị đầy đủ */}
      <div className="flex-1 flex items-start h-[160px] overflow-hidden">
        <p className="text-start text-[#0A0A0A] font-lato leading-relaxed text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SignatureProduct;
