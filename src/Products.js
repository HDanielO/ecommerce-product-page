import ProductDescription from "./ProductDescription";
import ProductSlider from "./ProductSlider";

const Product = () => {
  return (
    <div className="product-section">
      <ProductSlider></ProductSlider>
      <ProductDescription></ProductDescription>
    </div>
  );
};

export default Product;
