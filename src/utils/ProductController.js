import products from "../configs/product/Products.json";

class ProductController {
  getAllProducts = () => {
    return products;
  };
  getSignatureProducts = () => {
    return products.filter((p) => {
      if (p.categories) return p.categories.includes("Sản Phẩm Nổi Bật");
      return null;
    });
  };
}
const productController = new ProductController();
export default productController;
