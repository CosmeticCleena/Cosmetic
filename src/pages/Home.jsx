import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TopBar from "../components/Topbar";
import ProductHighlight from "../components/ProductHighlight";
import ProductHighlight1Img from "../assets/images/ProductHighlight1.svg";
import ProductHighlight2Img from "../assets/images/ProductHighlight2.svg";
import Footer from "../components/Footer";
import FeatureProducts from "../components/FeaturedProducts";
import SignatureProducts from "../components/SignatureProducts";
import BannerImg1 from "../assets/images/Banner_1.svg";
import BannerImg2 from "../assets/images/Banner_2.svg";
import Banner from "../components/Banner";
import QuoteArrow from "../assets/icons/Quote-Arrows.svg";
import DiscoverProducts from "../components/DiscoverProducts";

const Home = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <ProductHighlight imgSrc={ProductHighlight1Img}>
        <p className="text-3xl md:text-4xl lg:text-5xl font-magnificent">
          Khám phá ngay
          <span className="text-[#D1AE62]"> bộ sưu tập mỹ phẩm cao cấp</span> từ
          <span className="text-[#D1AE62]"> Lumia</span> – Nâng niu làn da, tôn
          vinh nét đẹp tự nhiên
        </p>
        <p className="font-lato w-full lg:text-xl">
          Lumia mang đến những sản phẩm mỹ phẩm cao cấp giúp bạn chăm sóc làn da
          khỏe mạnh và rạng rỡ. Với thành phần tự nhiên và công nghệ tiên tiến,
          chúng tôi cam kết mang lại vẻ đẹp bền vững cho mọi làn da.
        </p>
        <button className="bg-[#D1AE62] text-white px-5 py-3 w-full md:w-auto">
          KHÁM PHÁ NGAY
        </button>
      </ProductHighlight>
      <ProductHighlight imgSrc={ProductHighlight2Img} isReverse={true}>
        <p className="text-3xl md:text-4xl lg:text-5xl font-magnificent">
          Lumia – Chăm sóc làn da bạn theo cách tự nhiên nhất.
        </p>
        <p className="font-lato w-full lg:text-xl">
          Chúng tôi tin rằng làn da khỏe mạnh bắt nguồn từ những thành phần tinh
          khiết nhất, vì vậy Lumia cam kết mang đến các công thức giàu dưỡng
          chất, an toàn và lành tính. Với sự kết hợp giữa công nghệ tiên tiến và
          chiết xuất thiên nhiên, mỗi sản phẩm của Lumia không chỉ giúp nuôi
          dưỡng làn da từ sâu bên trong mà còn mang lại sự tươi trẻ, rạng rỡ dài
          lâu. Hãy để Lumia đồng hành cùng bạn trên hành trình chăm sóc làn da
          mỗi ngày.
        </p>
      </ProductHighlight>
      <SignatureProducts />
      <Banner imgSrc={BannerImg1}>
        <p className="text-[#D1AE62] text-3xl font-magnificent text-start md:text-center">
          Lumia không chỉ đơn thuần là một thương hiệu mỹ phẩm
        </p>
        <p className="text-center mb-4 text-[#FFFFFF] md:w-[50%] md:mx-auto">
          Lumia không chỉ đơn thuần là một thương hiệu mỹ phẩm, mà còn là người
          bạn đồng hành trên hành trình chăm sóc và yêu thương làn da của bạn.
          Chúng tôi hiểu rằng mỗi loại da đều có nhu cầu riêng, vì vậy Lumia
          mang đến những sản phẩm được nghiên cứu kỹ lưỡng, giúp cung cấp độ ẩm,
          phục hồi và bảo vệ làn da khỏi tác động của môi trường. Với sự kết hợp
          giữa khoa học hiện đại và nguồn nguyên liệu thiên nhiên, Lumia giúp
          bạn tự tin hơn mỗi ngày với làn da khỏe mạnh, căng tràn sức sống. Hãy
          để Lumia trở thành bí quyết làm đẹp không thể thiếu của bạn!
        </p>
        <button className="w-[200px] h-[56px] bg-[#D1AE62] text-white mx-auto rounded-md">
          Khám Phá Ngay
        </button>
      </Banner>
      <DiscoverProducts />
      <Banner imgSrc={BannerImg2}>
        <img
          src={QuoteArrow}
          alt="Quote Arrow"
          className="w-[60px] h-[50px] mx-auto"
        />
        <p className="text-white text-3xl font-magnificent text-center">
          DƯỠNG DA KHOA HỌC
        </p>
        <p className="text-center mb-4 text-[#FFFFFF] md:w-[50%] md:mx-auto">
          Sản phẩm dưỡng da khoa học dựa trên những thành phần/hoạt chất đã được
          nghiên cứu chứng minh có tác dụng cải thiện làn da hiệu quả. Tuân thủ
          nghiêm ngặt các quy định an toàn của pháp luật.
        </p>
        <div className="flex items-center justify-center gap-4 py-4">
          <div className="h-3 w-3 rounded-full bg-[#6A6E4E] opacity-70"></div>
          <div className="h-3 w-3 rounded-full bg-white"></div>
          <div className="h-3 w-3 rounded-full bg-white"></div>
          <div className="h-3 w-3 rounded-full bg-white"></div>
          <div className="h-3 w-3 rounded-full bg-white"></div>
          <div className="h-3 w-3 rounded-full bg-white"></div>
        </div>
      </Banner>
      <FeatureProducts />
      <Footer />
    </>
  );
};

export default Home;
