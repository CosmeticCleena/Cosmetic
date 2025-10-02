import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import HeroBg from "../assets/images/Hero2.svg";
import Loading from "../components/common/Loading";

// Lazy load components
const Hero = lazy(() => import("../components/layout/Hero"));
const LinearImage = lazy(() => import("../components/common/LinearImage"));
const ProductHighlights = lazy(() => import("../components/products/ProductHighlights"));
const FeatureProducts = lazy(() => import("../components/products/FeaturedProducts"));
const SignatureProducts = lazy(() => import("../components/products/SignatureProducts"));
const FirstBanner = lazy(() => import("../components/layout/FirstBanner"));
const SecondBanner = lazy(() => import("../components/layout/SecondBanner"));
const DiscoverProducts = lazy(() => import("../components/products/DiscoverProducts"));
const Feedback = lazy(() => import("../components/layout/Feedback"));
const QuestionQA = lazy(() => import("../components/layout/QuestionQA"));
const CustomerSupport = lazy(() => import("../components/layout/CustomerSupport"));

const Home = () => {
  const location = useLocation();
  
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      scroller.scrollTo(hash, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -120,
      });
    }
  }, [location]);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ProductHighlights />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <SignatureProducts />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <FirstBanner />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <DiscoverProducts />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <SecondBanner />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Feedback />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <FeatureProducts />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <QuestionQA />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <CustomerSupport />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <LinearImage
          imgSrc={HeroBg}
          leftColor="from-black/30"
          isLinear={false}
          height="h-[550px]"
        >
          <div className="absolute w-[90%] md:w-[50%] lg:w-[40%] top-1/4 md:top-[20%] lg:top-[40%] left-[5%] lg:left-[10%]">
            <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
          </div>
        </LinearImage>
      </Suspense>
    </>
  );
};

export default Home;
