import { useState } from "react";
import DiscoverProduct from "../../assets/images/DiscoverProduct.svg";
import FeaturedProductCard from "./FeaturedProductCard";
import SignatureProductImages from "../../configs/signature_products/signature_products";

const DiscoverProducts = () => {
  // Mảng dữ liệu sản phẩm mẫu
  const featuredProducts = [
    {
      id: 1,
      product_name: "Kem Nám Chân - Brightening Corector Cream",
      description:
        "Điều trị nám chân gốc rễ, kích thích tuần hoàn, phục hồi sắc tố melanin, làm sáng da, đều màu chỉ sau 2 tuần. Sản phẩm sử dụng công nghệ phân tử tiên tiến, mang lại hiệu quả gấp 3-5 lần so với phương pháp thông thường.",
      image: "Signature1",
    },
    {
      id: 15,
      product_name:
        "Kem Dưỡng Ban Ngày và Ban Đêm - Anti-Aging Day & Glow Revival Night",
      description:
        "Cung cấp độ ẩm lâu dài, giúp da luôn tươi mới và khỏe mạnh. Sản phẩm hỗ trợ quá trình tái tạo da, giảm thâm nám, mờ sạm màu, và cải thiện độ đàn hồi da.",
      image: "Signature2",
    },
    {
      id: 16,
      product_name: "Mặt Nạ Dưỡng Ẩm - Moisturizing Mask",
      description:
        "Cung cấp độ ẩm tức thì cho da khô và thiếu sức sống, giúp tái tạo da và giảm thiểu dấu hiệu lão hóa.",
      image: "Signature3",
    },
  ];

  // State để theo dõi slide hiện tại
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hàm xử lý khi nhấp vào nút chấm
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  // Hàm xử lý chuyển đến slide trước
  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? featuredProducts.length - 1 : prev - 1
    );
  };

  // Hàm xử lý chuyển đến slide kế tiếp
  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === featuredProducts.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full md:w-[75%] md:mx-auto font-magnificent mb-6 flex flex-col justify-center mt-20">
      <div className="text-center mb-10">
        <p className="text-[22px]">Khám phá</p>
        <p className="text-[40px] leading-tight">
          BỘ SƯU TẬP MỸ PHẨM{" "}
          <span className="inline-block bg-gradient-to-r from-[#B08B3B] to-[#EAC980] text-transparent bg-clip-text font-medium">
            BÁN CHẠY NHẤT
          </span>{" "}
          <br className="md:hidden" />
          NĂM 2025
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-[30px]">
        <img
          src={DiscoverProduct}
          alt="DiscoverProduct"
          className="block w-full xl:w-auto mb-6 xl:mb-0"
          loading="lazy"
        />

        <div className="flex flex-col items-center w-full">
          <div className="w-full flex justify-center px-4 md:px-6 relative">
            {/* Nút mũi tên trái */}
            <button
              onClick={handlePrevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white bg-opacity-80 rounded-full shadow-md z-10 hover:bg-opacity-100 transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#0A0A0A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="md:transform-none md:w-auto w-full flex justify-center md:scale-100 scale-110 transform-gpu">
              <FeaturedProductCard
                isAddToCart={false}
                data={featuredProducts[currentSlide]}
                image={featuredProducts[currentSlide].image}
              />
            </div>

            {/* Nút mũi tên phải */}
            <button
              onClick={handleNextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white bg-opacity-80 rounded-full shadow-md z-10 hover:bg-opacity-100 transition-all duration-300"
              aria-label="Next slide"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#0A0A0A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex gap-[14px] mt-8 xl:mt-6 relative z-10">
            {featuredProducts.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-[7px] h-[8px] rounded-3xl cursor-pointer ${
                  currentSlide === index ? "bg-[#D1AE62]" : "bg-[#0A0A0A]"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverProducts;
