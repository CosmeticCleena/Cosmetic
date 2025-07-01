import productsData from "../configs/product/Products.json";

class ProductController {
  getAllProducts = () => {
    return productsData;
  };
  getSignatureProducts = () => {
    const results = productsData.filter((p) => {
      if (p.categories) return p.categories.includes("Sản Phẩm Nổi Bật");
      return null;
    });
    return results;
  };
  getFeatureProducts = () => {
    let results = productsData.filter((p) => {
      if (p.categories) return p.categories.includes("Sản Phẩm Nổi Bật");
      return null;
    });
    results.pop();
    return results;
  };
  findProductById = (productId) => {
    const results = productsData.find((p) => p.id == productId);
    return results;
  };
}
const productController = new ProductController();
export default productController;
