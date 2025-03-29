import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TopBar from "../components/Topbar";
import ProductHighlight from "../components/ProductHighlight";
import ProductHighlight1Img from "../assets/images/ProductHighlight1.svg";
import ProductHighlight2Img from "../assets/images/ProductHighlight2.svg";
import Footer from "../components/Footer";
import FeatureProducts from "../components/FeaturedProducts";
import SignatureProducts from "../components/SignatureProducts";
import Banner from "../components/Banner";

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
      <Banner />
      <FeatureProducts />
      <Footer />
    </>
  );
};

export default Home;
