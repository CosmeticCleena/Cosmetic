import React, { useState, useRef } from "react";
import { ProductSkinCareResultImages } from "../../configs/product_details/images";

const images = ["SkinCare1", "SkinCare2", "SkinCare3", "SkinCare4"];

const ProductSkinCareResult = () => {
  const [chiSoHoatDong, setChiSoHoatDong] = useState(0);
  const [diemChamBatDau, setDiemChamBatDau] = useState(0);
  const [diemChamKetThuc, setDiemChamKetThuc] = useState(0);
  const [dangVuot, setDangVuot] = useState(false);
  const [dịchChuyenX, setDichChuyenX] = useState(0);
  const thamChieuBangChuyenDong = useRef(null);

  // Khoảng cách vuốt tối thiểu để kích hoạt thay đổi slide (tính bằng pixel)
  const khoangCachVuotToiThieu = 50;

  const xuLyTiepTheo = () => {
    setChiSoHoatDong((chiSoTruocDo) =>
      chiSoTruocDo === images.length - 1 ? 0 : chiSoTruocDo + 1
    );
  };

  const xuLyTruocDo = () => {
    setChiSoHoatDong((chiSoTruocDo) =>
      chiSoTruocDo === 0 ? images.length - 1 : chiSoTruocDo - 1
    );
  };

  const xuLyNhanChiSo = (chiSo) => {
    setChiSoHoatDong(chiSo);
  };

  // Xử lý sự kiện chạm
  const xuLyChamBatDau = (e) => {
    setDiemChamBatDau(e.targetTouches[0].clientX);
    setDangVuot(true);
    setDichChuyenX(0);
  };

  const xuLyChamDiChuyen = (e) => {
    if (!dangVuot) return;

    const chamHienTai = e.targetTouches[0].clientX;
    const saiSo = chamHienTai - diemChamBatDau;

    // Thêm lực cản khi vuốt vượt quá slide đầu tiên hoặc cuối cùng
    if (
      (chiSoHoatDong === 0 && saiSo > 0) ||
      (chiSoHoatDong === images.length - 1 && saiSo < 0)
    ) {
      setDichChuyenX(saiSo / 3); // Thêm lực cản
    } else {
      setDichChuyenX(saiSo);
    }

    setDiemChamKetThuc(chamHienTai);
  };

  const xuLyChamKetThuc = () => {
    setDangVuot(false);

    // Đặt lại biến đổi
    setDichChuyenX(0);

    if (!diemChamBatDau || !diemChamKetThuc) return;

    const khoangCach = diemChamKetThuc - diemChamBatDau;
    const laVuotTrai = khoangCach < -khoangCachVuotToiThieu;
    const laVuotPhai = khoangCach > khoangCachVuotToiThieu;

    if (laVuotTrai && chiSoHoatDong < images.length - 1) {
      xuLyTiepTheo();
    } else if (laVuotPhai && chiSoHoatDong > 0) {
      xuLyTruocDo();
    }

    // Đặt lại giá trị
    setDiemChamBatDau(0);
    setDiemChamKetThuc(0);
  };

  // Xử lý sự kiện chuột cho việc kiểm tra trên máy tính
  const xuLyChuotNhanXuong = (e) => {
    setDiemChamBatDau(e.clientX);
    setDangVuot(true);
    setDichChuyenX(0);

    // Ngăn việc chọn văn bản trong quá trình vuốt
    e.preventDefault();
  };

  const xuLyChuotDiChuyen = (e) => {
    if (!dangVuot) return;
    const saiSo = e.clientX - diemChamBatDau;

    // Thêm lực cản khi vuốt vượt quá slide đầu tiên hoặc cuối cùng
    if (
      (chiSoHoatDong === 0 && saiSo > 0) ||
      (chiSoHoatDong === images.length - 1 && saiSo < 0)
    ) {
      setDichChuyenX(saiSo / 3); // Thêm lực cản
    } else {
      setDichChuyenX(saiSo);
    }

    setDiemChamKetThuc(e.clientX);
  };

  const xuLyChuotNhaRa = () => {
    xuLyChamKetThuc();
  };

  const xuLyChuotRoiDi = () => {
    if (dangVuot) {
      xuLyChamKetThuc();
    }
  };

  return (
    <div className="flex flex-col bg-[#7F4F29] w-full py-10 px-4 md:px-6 lg:px-[108px]">
      {/* Giao diện máy tính - 4 hình ảnh trong một hàng */}
      <div className="hidden lg:flex max-w-[1224px] gap-6 mb-5 mx-auto">
        {images.map((image, index) => (
          <div key={index} className="w-1/4 px-1">
            <img
              src={ProductSkinCareResultImages[image]}
              alt={`Kết quả chăm sóc da ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* Giao diện di động và máy tính bảng - Băng chuyền hình ảnh có thể vuốt */}
      <div className="lg:hidden flex flex-col items-center mb-6">
        <div
          ref={thamChieuBangChuyenDong}
          className="relative w-full max-w-md overflow-hidden touch-pan-y"
          onTouchStart={xuLyChamBatDau}
          onTouchMove={xuLyChamDiChuyen}
          onTouchEnd={xuLyChamKetThuc}
          onMouseDown={xuLyChuotNhanXuong}
          onMouseMove={xuLyChuotDiChuyen}
          onMouseUp={xuLyChuotNhaRa}
          onMouseLeave={xuLyChuotRoiDi}
        >
          {/* Hình ảnh lớn chính với biến đổi vuốt */}
          <div
            className="w-full aspect-square transition-transform duration-300 ease-out"
            style={{
              transform: dangVuot
                ? `translateX(${dịchChuyenX}px)`
                : "translateX(0)",
              touchAction: "pan-y",
            }}
          >
            <img
              src={ProductSkinCareResultImages[images[chiSoHoatDong]]}
              alt={`Kết quả chăm sóc da ${chiSoHoatDong + 1}`}
              className="w-full h-full object-cover"
              draggable="false"
            />
          </div>
        </div>

        {/* Thanh chỉ báo ngang nhỏ hơn - đáp ứng nhưng với tỷ lệ giới hạn */}
        <div className="flex justify-center items-center gap-1 mt-4 w-full max-w-xs mx-auto">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => xuLyNhanChiSo(index)}
              className={`h-1 w-6 rounded-full ${
                index === chiSoHoatDong ? "bg-[#D1AE62]" : "bg-gray-300"
              }`}
              style={{ height: "4px" }}
              aria-label={`Đi đến slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Nội dung văn bản - căn trái cho di động/máy tính bảng, căn giữa cho máy tính */}
      <div className="lg:text-center text-left space-y-3 font-lato">
        <p className="text-white text-base md:text-[20px]">
          <span className="font-magnificent text-sm md:text-[18px]">
            Chỉ sau 1 tuần: {""}
          </span>
          Da trông săn chắc, khỏe mạnh và mịn màng hơn.
        </p>

        <p className="text-white text-base md:text-[20px]">
          <span className="font-magnificent text-sm md:text-[18px]">
            Sau 3 tuần: {""}
          </span>
          Cải thiện gấp 2 lần về vẻ ngoài và cảm nhận độ đàn hồi của da
        </p>

        <p className="text-white text-base md:text-[20px]">
          <span className="font-magnificent text-sm md:text-[18px]">
            Sau 1 tháng: {""}
          </span>
          Da trông săn chắc hơn +60% | Da trông dày đặc hơn +56%
        </p>
      </div>
    </div>
  );
};

export default ProductSkinCareResult;
