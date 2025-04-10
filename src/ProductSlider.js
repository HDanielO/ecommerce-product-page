const ProductSlider = () => {
  const nextBtnFunctionality = () => {
    const productImage = document.querySelector(".product-image");
    document.querySelector(".product-slider-mobile").scrollLeft +=
      productImage.offsetWidth;
  };

  const previousBtnFunctionality = () => {
    const productImage = document.querySelector(".product-image");
    document.querySelector(".product-slider-mobile").scrollLeft -=
      productImage.offsetWidth;
  };
  return (
    <div className="product-slider">
      <img
        src="/images/icon-previous.svg"
        alt="previous icon"
        className="previous-icon"
        onClick={previousBtnFunctionality}
      />
      <img
        src="/images/icon-next.svg"
        alt="next icon"
        className="next-icon"
        onClick={nextBtnFunctionality}
      />
      <div className="product-slider-mobile">
        <img
          src="/images/image-product-1.jpg"
          alt="product image"
          className="product-image"
        />
        <img
          src="/images/image-product-2.jpg"
          alt="product image"
          className="product-image"
        />
        <img
          src="/images/image-product-3.jpg"
          alt="product image"
          className="product-image"
        />
        <img
          src="/images/image-product-4.jpg"
          alt="product image"
          className="product-image"
        />
      </div>
      <div className="product-slider-desktop">
        <img
          src="/images/image-product-1.jpg"
          alt="product image"
          className="product-image-desktop"
        />
        <div className="product-thumbnail-row">
          <div
            className="product-thumbnail"
          ></div>
          <div className="product-thumbnail"></div>
          <div className="product-thumbnail"></div>
          <div className="product-thumbnail"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
