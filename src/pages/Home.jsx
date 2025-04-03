import Hero from "../components/layout/Hero";
import Navbar from "../components/layout/Navbar";
import HeroBg from "../assets/images/Hero.svg";
import LinearImage from "../components/common/LinearImage";
import ProductHighlights from "../components/products/ProductHighlights";
import Footer from "../components/layout/Footer";
import FeatureProducts from "../components/products/FeaturedProducts";
import SignatureProducts from "../components/products/SignatureProducts";
import FirstBanner from "../components/layout/FirstBanner";
import SecondBanner from "../components/layout/SecondBanner";
import DiscoverProducts from "../components/products/DiscoverProducts";
import Feedback from "../components/layout/Feedback";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductHighlights />
      <SignatureProducts />
      <FirstBanner />
      <DiscoverProducts />
      <SecondBanner />
      <Feedback />
      <FeatureProducts />
      <LinearImage
        imgSrc={HeroBg}
        leftColor="from-black/30"
        isLinear={false}
        height="h-[550px]"
      >
        <div className="absolute w-[90%] md:w-[50%] lg:w-[40%] top-1/4 md:top-[20%] lg:top-[40%] left-[5%] lg:left-[10%]">
          <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>

          <div className="relative z-10 p-4">
            <h1 className="font-magnificent text-4xl font-light capitalize mb-6 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h1>
            <p className="text-xl mb-8 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </p>
          </div>
        </div>
      </LinearImage>
      <Footer />
    </>
  );
};

export default Home;
