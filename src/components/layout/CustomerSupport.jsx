import React from "react";
import CalendarIcon from "../../assets/icons/Calender.svg";

const CustomerSupport = () => {
  return (
    <div className="w-[80%] mx-auto grid grid-cols-12 gap-6 mt-6 mb-10">
      <div className="col-span-12 md:col-span-4 flex flex-col space-y-4">
        <h1 className="font-magnificent text-3xl text-center md:text-start">
          Đăng Ký Tư Vấn 1-1
        </h1>
        <p className="text-[#6A6A6A] text-center md:text-start font-lato">
          Hãy liên hệ ngay với chúng tôi để nhận tư vấn trực tiếp 1-1 từ CEO
          LUMIA, Lưu Thu Trang, và đội ngũ chuyên gia. Chúng tôi sẽ giúp bạn
          hiểu rõ hơn về quy trình chuyển giao công nghệ, các sản phẩm trị nám
          đặc biệt của LUMIA, và các chiến lược phát triển spa thành công.
        </p>
      </div>
      <div className="col-span-12 md:col-span-8">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-3 font-lato">
          <input
            type="text"
            placeholder="Your Name*"
            className="px-4 py-3 border border-[#D8D8D8] focus:border-[#D1AE62] focus:ring-1 focus:ring-[#D1AE62] focus:text-[#D1AE62] focus:ring-opacity-50 transition duration-200 outline-none text-[#6A6A6A]"
            name="name"
            required
          />
          <select
            className="px-4 py-3 border border-[#D8D8D8] focus:border-[#D1AE62] focus:ring-1 focus:ring-[#D1AE62] focus:ring-opacity-50 outline-none text-[#6A6A6A] bg-white"
            name="services"
            required
          >
            <option value="" disabled selected>
              Choose Barber Services
            </option>
            <option value="haircut">Haircut</option>
            <option value="beard-trim">Beard Trim</option>
            <option value="haircut-beard">Haircut & Beard Combo</option>
            <option value="hot-towel">Hot Towel Shave</option>
          </select>
          <input
            type="date"
            placeholder="Enter Date"
            className="px-4 py-3 border border-[#D8D8D8] focus:border-[#D1AE62] focus:ring-1 focus:ring-[#D1AE62] focus:text-[#D1AE62] focus:ring-opacity-50 transition duration-200 outline-none text-[#6A6A6A]"
            name="date"
            required
          />
          <textarea
            name="Message"
            className="order-1 md:order-none px-4 pt-3 pb-12 border border-[#D8D8D8] focus:border-[#D1AE62] focus:ring-1 focus:ring-[#D1AE62] focus:text-[#D1AE62] focus:ring-opacity-50 transition duration-200 outline-none text-[#6A6A6A] md:row-span-2"
            placeholder="Your Message"
          ></textarea>
          <input
            type="email"
            placeholder="Email address*"
            className="px-4 py-3 border border-[#D8D8D8] focus:border-[#D1AE62] focus:ring-1 focus:ring-[#D1AE62] focus:text-[#D1AE62] focus:ring-opacity-50 transition duration-200 outline-none text-[#6A6A6A]"
            name="email"
            required
          />
          <button
            type="submit"
            className="order-2 px-4 py-3 bg-[#D1AE62] hover:bg-[#cfa957] text-[#FFFFFF] flex items-center justify-center"
          >
            <span className="pr-4">
              <img src={CalendarIcon} alt="Calendar Icon" />
            </span>{" "}
            [Đăng Ký Tư Vấn 1-1]
          </button>
          <p className="order-3 font-lato text-[#6A6A6A] mt-4">
            Đăng ký ngay để nhận ưu đãi đặc biệt và khám phá cơ hội hợp tác cùng
            LUMIA!
          </p>
        </form>
      </div>
    </div>
  );
};

export default CustomerSupport;
