import React from "react";
import { useNavigate, Link } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 px-4">
      <div className="max-w-lg w-full text-center">
        {/* Error code */}
        <h1 className="font-magnificent text-8xl md:text-9xl text-[#D1AE62] mb-6">
          404
        </h1>

        {/* Error message */}
        <h2 className="font-magnificent text-3xl md:text-4xl text-gray-800 mb-4">
          Trang không tìm thấy
        </h2>

        {/* Error description */}
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển. Vui lòng
          kiểm tra lại đường dẫn hoặc quay về trang chủ.
        </p>

        {/* Decorative element */}
        <div className="w-16 h-1 bg-[#D1AE62] mx-auto mb-8"></div>

        {/* Action buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={handleGoHome}
            className="px-8 py-3 font-magnificent text-white bg-[#D1AE62] hover:bg-[#C09E52] transition-colors rounded-md shadow-md"
          >
            Quay về trang chủ
          </button>

          <Link to="/lien-he" className="inline-block">
            <button className="px-8 py-3 font-magnificent text-[#D1AE62] border border-[#D1AE62] hover:bg-[#FCF9F0] transition-colors rounded-md">
              Liên hệ hỗ trợ
            </button>
          </Link>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#D1AE62] opacity-5 rounded-full"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-[#D1AE62] opacity-5 rounded-full"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-[#D1AE62] opacity-5 rounded-full"></div>
    </div>
  );
};

export default NotFoundPage;
