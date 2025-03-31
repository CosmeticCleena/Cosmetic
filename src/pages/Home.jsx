import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TopBar from "../components/Topbar";
import HeroBg from "../assets/images/Hero.svg";
import LinearImage from "../components/LinearImage";
import ProductHighlights from "../components/ProductHighlights";
import Footer from "../components/Footer";
import FeatureProducts from "../components/FeaturedProducts";
import SignatureProducts from "../components/SignatureProducts";
import FirstBanner from "../components/FirstBanner";
import SecondBanner from "../components/SecondBanner";
import DiscoverProducts from "../components/DiscoverProducts";
import Feedback from "../components/Feedback";

const Home = () => {
  return (
    <>
      <TopBar />
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
        isLinear={true}
        height="h-[550px]"
      >
        <div className="relative text-white md:text-black z-20 h-full w-full flex">
          <div className="absolute w-full md:w-[40%] top-[30%]  md:top-[40%] left-[5%] lg:left-[10%]">
            <h1 className="font-magnificent text-4xl font-light capitalize mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h1>
            <p className="text-xl mb-8">
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
