import { Suspense, lazy } from "react";
import Root from "./pages/Root";
import NotFoundPage from "./components/common/NotFoundPage";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const TechnologyTransfer = lazy(() =>
  import("./components/layout/TechnologyTransfer")
);

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#D1AE62]"></div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: "products/:id",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "agency",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <TechnologyTransfer />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
